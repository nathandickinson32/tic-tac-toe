(ns tic-tac-toe.quil-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.quil :as sut]
            [quil.core :as q]))

(describe "Tic Tac Toe GUI"
  (with-stubs)

  (context "constants"

    (it "returns correct grid constants"
      (should= 600 sut/grid-width)
      (should= 200 sut/button-width)
      (should= 40 sut/button-height)
      (should= [600 600] sut/grid-size))
    )

  (context "setup"
    (with-stubs)

    (redefs-around [q/frame-rate (stub :frame-rate)
                    random-uuid  (stub :uuid {:return "123"})])

    (it "creates a new game on setup"
      (should= (sut/create-new-game) (sut/setup)))

    (it "sets up frame rate"
      (sut/setup)
      (should-have-invoked :frame-rate {:with [60]}))
    )

  (context "create-new-game"

    (it "returns a new game with correct structure"
      (let [game (sut/create-new-game)]
        (should (uuid? (:game-id game)))
        (should= board/starting-board-3x3 (:board game))
        (should= :3x3 (:board-size game))
        (should= 0 (:turn-count game))))
    )

  (context "choose-first-player"

    (it "chooses X when clicked on left button"
      (let [state     (sut/create-new-game)
            click     {:x 100 :y 280}
            new-state (sut/choose-first-player state click)]
        (should= :X (:current-token new-state))))

    (it "chooses O when clicked on right button"
      (let [state     (sut/create-new-game)
            click     {:x 500 :y 280}
            new-state (sut/choose-first-player state click)]
        (should= :O (:current-token new-state))))
    )

  (context "choose-player-X"

    (it "assigns human"
      (should= :human (:X (sut/choose-player-X {} {:x 300 :y 190}))))
    (it "assigns easy-ai"
      (should= :easy-ai (:X (sut/choose-player-X {} {:x 300 :y 250}))))
    (it "assigns medium-ai"
      (should= :medium-ai (:X (sut/choose-player-X {} {:x 300 :y 310}))))
    (it "assigns expert-ai"
      (should= :expert-ai (:X (sut/choose-player-X {} {:x 300 :y 370}))))
    )

  (context "choose-player-O"

    (it "assigns human"
      (should= :human (:O (sut/choose-player-O {} {:x 300 :y 190}))))
    (it "assigns easy-ai"
      (should= :easy-ai (:O (sut/choose-player-O {} {:x 300 :y 250}))))
    (it "assigns medium-ai"
      (should= :medium-ai (:O (sut/choose-player-O {} {:x 300 :y 310}))))
    (it "assigns expert-ai"
      (should= :expert-ai (:O (sut/choose-player-O {} {:x 300 :y 370}))))
    )

  (context "clicked?"

    (it "returns true if click is inside button"
      (should (sut/clicked? 50 50 0 0 100 100)))
    (it "returns false if click is outside button"
      (should-not (sut/clicked? 200 200 0 0 100 100)))
    )

  (context "drawing"
    (with-stubs)

    (redefs-around [q/fill       (stub :fill)
                    q/text       (stub :text)
                    q/rect       (stub :rect)
                    q/text-align (stub :align)
                    q/text-size  (stub :text-size)
                    q/stroke     (stub :stroke)
                    q/line       (stub :line)
                    q/background (stub :background)])

    (it "white-background calls q/background 255"
      (sut/white-background)
      (should-have-invoked :background {:with [255]}))

    (it "gray-line calls q/stroke with 220"
      (sut/gray-line)
      (should-have-invoked :stroke {:with [220]}))

    (it "fill-black calls q/fill 0"
      (sut/fill-black)
      (should-have-invoked :fill {:with [0]}))

    (it "draws vertical lines"
      (sut/draw-vertical-lines 200)
      (should-have-invoked :line))

    (it "draws horizontal lines"
      (sut/draw-horizontal-lines 200)
      (should-have-invoked :line))

    (it "->pixel-location centers correctly"
      (should= (+ (* 2 200) (/ 600 6)) (sut/->pixel-location 2 200)))
    )

  (context "mouse-clicked"

    (it "resets to new game if play-again is clicked"
      (with-redefs [sut/play-again (constantly true)]
        (should (contains? (sut/mouse-clicked {:board      board/starting-board-3x3
                                               :board-size :3x3}
                                              {:x 0 :y 0})
                           :game-id))))

    (it "build-state-or-player-move"
      (with-redefs [sut/play-again                 (constantly false)
                    sut/build-state-or-player-move (stub :build-state)]
        (sut/mouse-clicked {} {:x 10 :y 10})
        (should-have-invoked :build-state)))
    )

  (context "update-state"

    (it "performs AI move when ai-turn"
      (with-redefs [sut/ai-turn?     (constantly true)
                    sut/ai-make-move (stub :ai-move)]
        (sut/update-state {:X :easy-ai :O :human :current-token :X})
        (should-have-invoked :ai-move)))

    (it "returns state unchanged when not ai-turn"
      (let [state {:game-id "123" :board board/starting-board-3x3 :board-size :3x3 :X :human :O :human :current-token :X :turn-count 0}]
        (should= state (sut/update-state state))))
    )

  (context "draw-state"
    (with-stubs)

    (it "calls choose-first-player-page if no current-token"
      (with-redefs [sut/choose-first-player-page (stub :page)]
        (sut/draw-state {})
        (should-have-invoked :page)))

    (it "calls choose-player-X-page if no X chosen"
      (with-redefs [sut/choose-player-X-page (stub :page)]
        (sut/draw-state {:current-token :X})
        (should-have-invoked :page)))

    (it "calls choose-player-O-page if no O chosen"
      (with-redefs [sut/choose-player-O-page (stub :page)]
        (sut/draw-state {:current-token :X :X :human})
        (should-have-invoked :page)))

    (it "calls play-game-page if state fully made"
      (with-redefs [sut/play-game-page (stub :page)]
        (sut/draw-state {:current-token :X :X :human :O :human :board-size :3x3 :board board/starting-board-3x3})
        (should-have-invoked :page)))
    )
  )