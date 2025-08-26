;(ns tic-tac-toe.first-player-page-spec
;  (:require [speclj.core :refer :all]
;            [tic-tac-toe.gui.first-player-page :as sut]
;            [tic-tac-toe.quil :as quil]))
;
;(defn ->click [x y] {:x x :y y})
;
;(declare state)
;
;(describe "choosing the first player"
;
;  (with state (quil/setup))
;
;  (it "clicks on something other than a button"
;    (should= @state (quil/on-mouse-click @state (->click 1 1))))
;
;  (it "clicks on the corner of X"
;    (let [x-left    (- (/ quil/grid-width 2)
;                       quil/button-width
;                       quil/button-padding)
;          new-state (quil/on-mouse-click @state (->click x-left quil/row-top-1))]
;      (should= (assoc @state :current-token :X
;                             :page :choose-player-X) new-state)))
;
;  (it "clicks on the corner of X"
;    (let [x-left    (- (/ quil/grid-width 2)
;                       quil/button-width
;                       quil/button-padding)
;          new-state (quil/on-mouse-click @state (->click (dec x-left) quil/row-top-1))]
;      (should= @state new-state)))
;
;  (it "clicks on the bottom-left corner of X"
;    (let [x-left    (- (/ quil/grid-width 2)
;                       quil/button-width
;                       quil/button-padding)
;          y-bottom  (+ quil/row-top-1 quil/button-height)
;          new-state (quil/on-mouse-click @state (->click x-left y-bottom))]
;      (should= (assoc @state :current-token :X
;                             :page :choose-player-X) new-state)))
;
;  (it "clicks on the bottom-right corner of X"
;    (let [x-right   (- (/ quil/grid-width 2)
;                       quil/button-padding)
;          y-bottom  (+ quil/row-top-1 quil/button-height)
;          new-state (quil/on-mouse-click @state (->click x-right y-bottom))]
;      (should= (assoc @state :current-token :X
;                             :page :choose-player-X) new-state)))
;
;  (it "clicks below the X button"
;    (let [x-middle  (- (/ quil/grid-width 2)
;                       (/ quil/button-width 2)
;                       quil/button-padding)
;          y-bottom  (+ quil/row-top-1 quil/button-height)
;          new-state (quil/on-mouse-click @state (->click x-middle (inc y-bottom)))]
;      (should= @state new-state)))
;
;  (it "clicks dead center of X button"
;    (let [x-middle  (- (/ quil/grid-width 2)
;                       (/ quil/button-width 2)
;                       quil/button-padding)
;          y-middle  (+ quil/row-top-1 (/ quil/button-height 2))
;          new-state (quil/on-mouse-click @state (->click x-middle y-middle))]
;      (should= (assoc @state :current-token :X
;                             :page :choose-player-X) new-state)))
;
;  (it "clicks on the corner of O"
;    (let [o-left    (+ (/ quil/grid-width 2) quil/button-padding)
;          new-state (quil/on-mouse-click @state (->click o-left quil/row-top-1))]
;      (should= (assoc @state :current-token :O
;                             :page :choose-player-O) new-state)))
;
;  (it "clicks just outside the corner of O"
;    (let [o-left    (+ (/ quil/grid-width 2) quil/button-padding)
;          new-state (quil/on-mouse-click @state (->click (dec o-left) quil/row-top-1))]
;      (should= @state new-state)))
;
;  (it "clicks on the bottom-left corner of O"
;    (let [o-left    (+ (/ quil/grid-width 2) quil/button-padding)
;          y-bottom  (+ quil/row-top-1 quil/button-height)
;          new-state (quil/on-mouse-click @state (->click o-left y-bottom))]
;      (should= (assoc @state :current-token :O
;                             :page :choose-player-O) new-state)))
;
;  (it "clicks on the bottom-right corner of O"
;    (let [o-right   (+ (/ quil/grid-width 2) quil/button-padding quil/button-width)
;          y-bottom  (+ quil/row-top-1 quil/button-height)
;          new-state (quil/on-mouse-click @state (->click o-right y-bottom))]
;      (should= (assoc @state :current-token :O
;                             :page :choose-player-O) new-state)))
;
;  (it "clicks below the O button"
;    (let [o-middle  (+ (/ quil/grid-width 2)
;                       (/ quil/button-width 2)
;                       quil/button-padding)
;          y-bottom  (+ quil/row-top-1 quil/button-height)
;          new-state (quil/on-mouse-click @state (->click o-middle (inc y-bottom)))]
;      (should= @state new-state)))
;
;  (it "clicks dead center of O button"
;    (let [o-middle  (+ (/ quil/grid-width 2)
;                       (/ quil/button-width 2)
;                       quil/button-padding)
;          y-middle  (+ quil/row-top-1 (/ quil/button-height 2))
;          new-state (quil/on-mouse-click @state (->click o-middle y-middle))]
;      (should= (assoc @state :current-token :O
;                             :page :choose-player-O) new-state)))
;  )