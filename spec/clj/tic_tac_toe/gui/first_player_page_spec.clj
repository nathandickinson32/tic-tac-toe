(ns tic-tac-toe.gui.first-player-page-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.gui.mouse-clicks :as mouse-clicks]
            [tic-tac-toe.gui.core :as core]))

(defn ->click [x y] {:x x :y y})

(declare state)

(describe "choosing the first player"

  (with state {:page :choose-first-player})

  (it "clicks on something other than a button"
    (should= @state (mouse-clicks/on-mouse-click @state (->click 1 1))))

  (it "clicks on the corner of X"
    (let [x-left    (- (/ core/grid-width 2)
                       core/button-width
                       core/button-padding)
          new-state (mouse-clicks/on-mouse-click @state (->click x-left core/row-top-1))]
      (should= (assoc @state :current-token :X
                             :page :choose-board-size) new-state)))

  (it "clicks on the corner of X"
    (let [x-left    (- (/ core/grid-width 2)
                       core/button-width
                       core/button-padding)
          new-state (mouse-clicks/on-mouse-click @state (->click (dec x-left) core/row-top-1))]
      (should= @state new-state)))

  (it "clicks on the bottom-left corner of X"
    (let [x-left    (- (/ core/grid-width 2)
                       core/button-width
                       core/button-padding)
          y-bottom  (+ core/row-top-1 core/button-height)
          new-state (mouse-clicks/on-mouse-click @state (->click x-left y-bottom))]
      (should= (assoc @state :current-token :X
                             :page :choose-board-size) new-state)))

  (it "clicks on the bottom-right corner of X"
    (let [x-right   (- (/ core/grid-width 2)
                       core/button-padding)
          y-bottom  (+ core/row-top-1 core/button-height)
          new-state (mouse-clicks/on-mouse-click @state (->click x-right y-bottom))]
      (should= (assoc @state :current-token :X
                             :page :choose-board-size) new-state)))

  (it "clicks below the X button"
    (let [x-middle  (- (/ core/grid-width 2)
                       (/ core/button-width 2)
                       core/button-padding)
          y-bottom  (+ core/row-top-1 core/button-height)
          new-state (mouse-clicks/on-mouse-click @state (->click x-middle (inc y-bottom)))]
      (should= @state new-state)))

  (it "clicks dead center of X button"
    (let [x-middle  (- (/ core/grid-width 2)
                       (/ core/button-width 2)
                       core/button-padding)
          y-middle  (+ core/row-top-1 (/ core/button-height 2))
          new-state (mouse-clicks/on-mouse-click @state (->click x-middle y-middle))]
      (should= (assoc @state :current-token :X
                             :page :choose-board-size) new-state)))

  (it "clicks on the corner of O"
    (let [o-left    (+ (/ core/grid-width 2) core/button-padding)
          new-state (mouse-clicks/on-mouse-click @state (->click o-left core/row-top-1))]
      (should= (assoc @state :current-token :O
                             :page :choose-board-size) new-state)))

  (it "clicks just outside the corner of O"
    (let [o-left    (+ (/ core/grid-width 2) core/button-padding)
          new-state (mouse-clicks/on-mouse-click @state (->click (dec o-left) core/row-top-1))]
      (should= @state new-state)))

  (it "clicks on the bottom-left corner of O"
    (let [o-left    (+ (/ core/grid-width 2) core/button-padding)
          y-bottom  (+ core/row-top-1 core/button-height)
          new-state (mouse-clicks/on-mouse-click @state (->click o-left y-bottom))]
      (should= (assoc @state :current-token :O
                             :page :choose-board-size) new-state)))

  (it "clicks on the bottom-right corner of O"
    (let [o-right   (+ (/ core/grid-width 2) core/button-padding core/button-width)
          y-bottom  (+ core/row-top-1 core/button-height)
          new-state (mouse-clicks/on-mouse-click @state (->click o-right y-bottom))]
      (should= (assoc @state :current-token :O
                             :page :choose-board-size) new-state)))

  (it "clicks below the O button"
    (let [o-middle  (+ (/ core/grid-width 2)
                       (/ core/button-width 2)
                       core/button-padding)
          y-bottom  (+ core/row-top-1 core/button-height)
          new-state (mouse-clicks/on-mouse-click @state (->click o-middle (inc y-bottom)))]
      (should= @state new-state)))

  (it "clicks center of O button"
    (let [o-middle  (+ (/ core/grid-width 2)
                       (/ core/button-width 2)
                       core/button-padding)
          y-middle  (+ core/row-top-1 (/ core/button-height 2))
          new-state (mouse-clicks/on-mouse-click @state (->click o-middle y-middle))]
      (should= (assoc @state :current-token :O
                             :page :choose-board-size) new-state)))
  )