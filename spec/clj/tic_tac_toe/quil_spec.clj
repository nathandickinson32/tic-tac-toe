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
      (should-have-invoked :frame-rate {:with [60]}))
    )

  (context "mouse-clicked"

    (it "marks an X on empty position"
      (let [state          (-> (sut/create-new-game)
                               (assoc :current-token :X
                                      :X :human
                                      :O :human
                                      :board-size :3x3))
            click-position {:x 250 :y 150}
            new-state      (sut/mouse-clicked state click-position)]
        (should= :X (get-in new-state [:board 0 1]))))

    (it "does not mark if position unavailable"
      (let [state          (-> (sut/create-new-game)
                               (assoc :current-token :X
                                      :X :human
                                      :O :human
                                      :board-size :3x3
                                      :board (-> board/starting-board-3x3
                                                 (board/make-move [0 1] :X))))
            click-position {:x 250 :y 50}
            new-state      (sut/mouse-clicked state click-position)]
        (should= state new-state)))
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
      (should-have-invoked :frame-rate {:with [60]}))

    (it "draws grid lines correctly"
      (sut/draw-gray-grid-lines {:board-size :3x3})
      (should-have-invoked :stroke {:with [220]})
      (should-have-invoked :line))

    (it "fills black color"
      (sut/fill-black)
      (should-have-invoked :fill {:with [0]})))

  (context "grid calculations"

    (it "converts cell position to pixel location"
      (should= 100 (sut/->pixel-location 0 3))
      (should= 103 (sut/->pixel-location 1 3))
      (should= 106 (sut/->pixel-location 2 3)))
    )
  )