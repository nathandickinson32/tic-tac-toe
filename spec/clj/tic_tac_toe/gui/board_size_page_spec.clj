(ns tic-tac-toe.gui.board-size-page-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.gui.core :as core]
            [tic-tac-toe.gui.mouse-clicks :refer [on-mouse-click]]))

(defn ->click [x y] {:x x :y y})

(declare state)

(describe "board-size-page"

  (context "choosing the board size"

    (with state {:page :choose-board-size})

    (it "clicks on something other than a button"
      (should= @state (on-mouse-click @state (->click 1 1))))

    (it "clicks bottom-right corner of 3x3 button"
      (let [x         (+ (- (/ core/grid-width 2) core/button-width 20)
                         core/button-width)
            y         (+ core/row-top-1 core/button-height)
            new-state (on-mouse-click @state (->click x y))]
        (should= (assoc @state :board-size :3x3
                               :board board/starting-board-3x3
                               :page :choose-player-X)
                 new-state)))

    (it "clicks bottom-left corner of 4x4 button"
      (let [x         (+ (/ core/grid-width 2) 20)
            y         (+ core/row-top-1 core/button-height)
            new-state (on-mouse-click @state (->click x y))]
        (should= (assoc @state :board-size :4x4
                               :board board/starting-board-4x4
                               :page :choose-player-X)
                 new-state)))

    (it "clicks on the 3x3 button"
      (let [x         (- (/ core/grid-width 2) core/button-width 20)
            y         core/row-top-1
            new-state (on-mouse-click @state (->click x y))]
        (should= (assoc @state :board-size :3x3
                               :board board/starting-board-3x3
                               :page :choose-player-X)
                 new-state)))

    (it "clicks on the 4x4 button"
      (let [x         (+ (/ core/grid-width 2) 20)
            y         core/row-top-1
            new-state (on-mouse-click @state (->click x y))]
        (should= (assoc @state :board-size :4x4
                               :board board/starting-board-4x4
                               :page :choose-player-X)
                 new-state)))
    )
  )