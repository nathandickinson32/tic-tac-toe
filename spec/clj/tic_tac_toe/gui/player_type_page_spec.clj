(ns tic-tac-toe.gui.player-type-page-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.gui.mouse-clicks :as mouse-clicks]
            [tic-tac-toe.gui.core :as core]))

(defn ->click [x y] {:x x :y y})

(declare state)

(describe "player-type-page"

  (context "choosing player X"

    (with state {:page :choose-player-X})

    (it "clicks on something other than a button"
      (should= @state (mouse-clicks/on-mouse-click @state (->click 1 1))))

    (it "clicks on Human button"
      (let [x         (- (/ core/grid-width 2) (/ core/button-width 2))
            y         190
            new-state (mouse-clicks/on-mouse-click @state (->click x y))]
        (should= (assoc @state :X :human :page :choose-player-O) new-state)))

    (it "clicks on Easy AI button"
      (let [x         (- (/ core/grid-width 2) (/ core/button-width 2))
            y         250
            new-state (mouse-clicks/on-mouse-click @state (->click x y))]
        (should= (assoc @state :X :easy-ai :page :choose-player-O) new-state)))

    (it "clicks on Medium AI button"
      (let [x         (- (/ core/grid-width 2) (/ core/button-width 2))
            y         310
            new-state (mouse-clicks/on-mouse-click @state (->click x y))]
        (should= (assoc @state :X :medium-ai :page :choose-player-O) new-state)))

    (it "clicks on Expert AI button"
      (let [x         (- (/ core/grid-width 2) (/ core/button-width 2))
            y         370
            new-state (mouse-clicks/on-mouse-click @state (->click x y))]
        (should= (assoc @state :X :expert-ai :page :choose-player-O) new-state)))
    )

  (context "choosing player O"

    (with state {:page :choose-player-O})

    (it "clicks on something other than a button"
      (should= @state (mouse-clicks/on-mouse-click @state (->click 1 1))))

    (it "clicks on Human button"
      (let [x         (- (/ core/grid-width 2) (/ core/button-width 2))
            y         190
            new-state (mouse-clicks/on-mouse-click @state (->click x y))]
        (should= (assoc @state :O :human :page :play-game) new-state)))

    (it "clicks on Easy AI button"
      (let [x         (- (/ core/grid-width 2) (/ core/button-width 2))
            y         250
            new-state (mouse-clicks/on-mouse-click @state (->click x y))]
        (should= (assoc @state :O :easy-ai :page :play-game) new-state)))

    (it "clicks on Medium AI button"
      (let [x         (- (/ core/grid-width 2) (/ core/button-width 2))
            y         310
            new-state (mouse-clicks/on-mouse-click @state (->click x y))]
        (should= (assoc @state :O :medium-ai :page :play-game) new-state)))

    (it "clicks on Expert AI button"
      (let [x         (- (/ core/grid-width 2) (/ core/button-width 2))
            y         370
            new-state (mouse-clicks/on-mouse-click @state (->click x y))]
        (should= (assoc @state :O :expert-ai :page :play-game) new-state)))
    )
  )