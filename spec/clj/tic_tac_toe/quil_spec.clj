(ns tic-tac-toe.quil-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.quil :as sut]
            [quil.core :as q]))

(describe "quil gui"
  (with-stubs)

  (context "constants"

    (it "returns correct grid constants"
      (should= 600 sut/grid-width)
      (should= 200 sut/cell-size)
      (should= [600 600] sut/grid-size))
    )

  (context "setup"

    (redefs-around [q/frame-rate (stub :frame-rate)])

    (it "empty board and no message"
      (let [state (sut/setup)]
        (should= board/starting-board-3x3 (:board state))
        (should-be-nil (:message state))))

    (it "sets frame rate"
      (sut/setup)
      (should-have-invoked :frame-rate {:with [100]}))
    )

  (context "mouse-clicked"

    (it "marks an X on empty position"
      (let [state          {:board board/starting-board-3x3}
            click-position {:x 250 :y 150}
            new-state      (sut/mouse-clicked state click-position)]
        (should= :X (get-in new-state [:board 0 1]))))

    (it "does not mark if position unavailable"
      (let [state          {:board (-> board/starting-board-3x3
                                       (board/make-move [0 1] :X))}
            click-position {:x 250 :y 50}
            new-state      (sut/mouse-clicked state click-position)]
        (should= state new-state)))

    (it "does not mark if message exists"
      (let [state          {:board   board/starting-board-3x3
                            :message "Game Over!"}
            click-position {:x 50 :y 50}
            new-state      (sut/mouse-clicked state click-position)]
        (should= state new-state)))
    )

  (context "draw-x function"

    (redefs-around [sut/fill-black       (stub :fill-black)
                    q/text-align         (stub :text-align)
                    q/text-size          (stub :text-size)
                    q/text               (stub :text)
                    sut/->pixel-location (stub :pixel-location)])

    (it "calls Quil functions with correct parameters"
      (with-redefs [sut/->pixel-location (fn [x] (* 10 x))]
        (sut/draw-token 2 3)
        (should-have-invoked :fill-black)
        (should-have-invoked :text-align {:with [:center :center]})
        (should-have-invoked :text-size {:with [72]})
        (should-have-invoked :text {:with ["X" 20 30]})))
    )

  (context "draw-state"

    (redefs-around [sut/white-background     (stub :background)
                    sut/draw-gray-grid-lines (stub :grid-lines)
                    sut/draw-token           (stub :draw-x)
                    q/fill                   (stub :fill)
                    q/text-align             (stub :text-align)
                    q/text-size              (stub :text-size)
                    q/text                   (stub :text)])

    (it "draws background, grid and X marks"
      (sut/draw-state {:board (-> board/starting-board-3x3
                                  (board/make-move [0 0] :X)
                                  (board/make-move [1 1] :X)
                                  (board/make-move [2 2] :X))})
      (should-have-invoked :background)
      (should-have-invoked :grid-lines)
      (should-have-invoked :draw-x {:times 3}))

    (it "draws message when message"
      (sut/draw-state {:board   board/starting-board-3x3
                       :message "Game Over!"})
      (let [half-width    (/ sut/grid-width 2)
            text-position (- half-width 80)
            black         0]
        (should-have-invoked :fill {:with [black]})
        (should-have-invoked :text-align {:with [:center :center]})
        (should-have-invoked :text-size {:with [32]})
        (should-have-invoked :text {:with ["Game Over!" half-width text-position]})))
    )

  (context "Quil calls"

    (redefs-around [q/frame-rate (stub :frame-rate)
                    q/background (stub :background)
                    q/fill       (stub :fill)
                    q/stroke     (stub :stroke)
                    q/line       (stub :line)
                    q/text       (stub :text)])

    (it "sets frame rate correctly"
      (sut/setup)
      (should-have-invoked :frame-rate {:with [100]}))

    (it "draws grid lines correctly"
      (sut/draw-gray-grid-lines)
      (should-have-invoked :stroke {:with [220]})
      (should-have-invoked :line))

    (it "fills black color"
      (sut/fill-black)
      (should-have-invoked :fill {:with [0]})))

  (context "grid calculations"

    (it "converts cell position to pixel location"
      (should= 100 (sut/->pixel-location 0))
      (should= 300 (sut/->pixel-location 1))
      (should= 500 (sut/->pixel-location 2)))
    )
  )