(ns tic-tac-toe.quil-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.quil :as sut]
            [quil.core :as q]
            [tic-tac-toe.gui.core :as core]
            [tic-tac-toe.gui.mouse :refer [on-mouse-click]]))

(defn ->click [x y] {:x x :y y})

(declare state)

(describe "Tic Tac Toe GUI"
  (with-stubs)

  (redefs-around [q/frame-rate (stub :frame-rate)])

  (it "sets up the GUI state"
    (let [state (sut/setup :postgres)]
      (should-have-invoked :frame-rate {:with [60]})
      (should-be uuid? (:game-id state))
      (should= :choose-first-player (:page state))
      (should= 0 (:turn-count state))
      (should= :postgres (:database state))))

  (context "click events"

    (context "choosing the first player"

      (with state (sut/setup :postgres))

      #_(with state (-> (sut/setup)
                        (on-mouse-click sut/x-button)
                        (on-mouse-click sut/human-button)
                        (on-mouse-click sut/easy-ai-button)
                        (on-mouse-click sut/square-1)
                        sut/update-state
                        (on-mouse-click sut/square-5)
                        sut/update-state
                        (on-mouse-click sut/square-9)))

      (it "clicks on something other than a button"
        (should= @state (on-mouse-click @state (->click 1 1))))

      (it "clicks on the corner of X"
        (let [x-left    (- (/ core/grid-width 2)
                           core/button-width
                           core/button-padding)
              new-state (on-mouse-click @state (->click x-left core/row-top-1))]
          (should= (assoc @state :current-token :X
                                 :page :choose-board-size) new-state)))

      (it "clicks on the corner of X"
        (let [x-left    (- (/ core/grid-width 2)
                           core/button-width
                           core/button-padding)
              new-state (on-mouse-click @state (->click (dec x-left) core/row-top-1))]
          (should= @state new-state)))

      (it "clicks on the bottom-left corner of X"
        (let [x-left    (- (/ core/grid-width 2)
                           core/button-width
                           core/button-padding)
              y-bottom  (+ core/row-top-1 core/button-height)
              new-state (on-mouse-click @state (->click x-left y-bottom))]
          (should= (assoc @state :current-token :X
                                 :page :choose-board-size) new-state)))

      (it "clicks on the bottom-right corner of X"
        (let [x-right   (- (/ core/grid-width 2)
                           core/button-padding)
              y-bottom  (+ core/row-top-1 core/button-height)
              new-state (on-mouse-click @state (->click x-right y-bottom))]
          (should= (assoc @state :current-token :X
                                 :page :choose-board-size) new-state)))

      (it "clicks below the X button"
        (let [x-middle  (- (/ core/grid-width 2)
                           (/ core/button-width 2)
                           core/button-padding)
              y-bottom  (+ core/row-top-1 core/button-height)
              new-state (on-mouse-click @state (->click x-middle (inc y-bottom)))]
          (should= @state new-state)))

      (it "clicks center of X button"
        (let [x-middle  (- (/ core/grid-width 2)
                           (/ core/button-width 2)
                           core/button-padding)
              y-middle  (+ core/row-top-1 (/ core/button-height 2))
              new-state (on-mouse-click @state (->click x-middle y-middle))]
          (should= (assoc @state :current-token :X
                                 :page :choose-board-size) new-state)))

      (it "clicks on the corner of O"
        (let [o-left    (+ (/ core/grid-width 2) core/button-padding)
              new-state (on-mouse-click @state (->click o-left core/row-top-1))]
          (should= (assoc @state :current-token :O
                                 :page :choose-board-size) new-state)))

      (it "clicks just left of O"
        (let [o-left    (+ (/ core/grid-width 2) core/button-padding)
              new-state (on-mouse-click @state (->click (dec o-left) core/row-top-1))]
          (should= @state new-state)))

      (it "clicks on the bottom-left corner of O"
        (let [o-left    (+ (/ core/grid-width 2) core/button-padding)
              y-bottom  (+ core/row-top-1 core/button-height)
              new-state (on-mouse-click @state (->click o-left y-bottom))]
          (should= (assoc @state :current-token :O
                                 :page :choose-board-size) new-state)))

      (it "clicks on the bottom-right corner of O"
        (let [o-right   (+ (/ core/grid-width 2)
                           core/button-padding
                           core/button-width)
              y-bottom  (+ core/row-top-1 core/button-height)
              new-state (on-mouse-click @state (->click o-right y-bottom))]
          (should= (assoc @state :current-token :O
                                 :page :choose-board-size) new-state)))

      (it "clicks below the O button"
        (let [o-middle  (+ (/ core/grid-width 2)
                           core/button-padding
                           (/ core/button-width 2))
              y-bottom  (+ core/row-top-1 core/button-height)
              new-state (on-mouse-click @state (->click o-middle (inc y-bottom)))]
          (should= @state new-state)))

      (it "clicks center of O button"
        (let [o-middle  (+ (/ core/grid-width 2)
                           core/button-padding
                           (/ core/button-width 2))
              y-middle  (+ core/row-top-1 (/ core/button-height 2))
              new-state (on-mouse-click @state (->click o-middle y-middle))]
          (should= (assoc @state :current-token :O
                                 :page :choose-board-size) new-state)))
      )

    (context "choosing player X"

      (with state (-> (sut/setup :postgres)
                      (assoc :page :choose-player-X)))

      (it "clicks on something other than a button"
        (should= @state (on-mouse-click @state (->click 1 1))))

      (it "clicks on Human button"
        (let [x         (- (/ core/grid-width 2) (/ core/button-width 2))
              y         190
              new-state (on-mouse-click @state (->click x y))]
          (should= (assoc @state :X :human :page :choose-player-O) new-state)))

      (it "clicks on Easy AI button"
        (let [x         (- (/ core/grid-width 2) (/ core/button-width 2))
              y         250
              new-state (on-mouse-click @state (->click x y))]
          (should= (assoc @state :X :easy-ai :page :choose-player-O) new-state)))

      (it "clicks on Medium AI button"
        (let [x         (- (/ core/grid-width 2) (/ core/button-width 2))
              y         310
              new-state (on-mouse-click @state (->click x y))]
          (should= (assoc @state :X :medium-ai :page :choose-player-O) new-state)))

      (it "clicks on Expert AI button"
        (let [x         (- (/ core/grid-width 2) (/ core/button-width 2))
              y         370
              new-state (on-mouse-click @state (->click x y))]
          (should= (assoc @state :X :expert-ai :page :choose-player-O) new-state)))
      )

    (context "choosing player O"

      (with state (-> (sut/setup :postgres)
                      (assoc :page :choose-player-O)))

      (it "clicks on something other than a button"
        (should= @state (on-mouse-click @state (->click 1 1))))

      (it "clicks on Human button"
        (let [x         (- (/ core/grid-width 2) (/ core/button-width 2))
              y         190
              new-state (on-mouse-click @state (->click x y))]
          (should= (assoc @state :O :human :page :play-game) new-state)))

      (it "clicks on Easy AI button"
        (let [x         (- (/ core/grid-width 2) (/ core/button-width 2))
              y         250
              new-state (on-mouse-click @state (->click x y))]
          (should= (assoc @state :O :easy-ai :page :play-game) new-state)))

      (it "clicks on Medium AI button"
        (let [x         (- (/ core/grid-width 2) (/ core/button-width 2))
              y         310
              new-state (on-mouse-click @state (->click x y))]
          (should= (assoc @state :O :medium-ai :page :play-game) new-state)))

      (it "clicks on Expert AI button"
        (let [x         (- (/ core/grid-width 2) (/ core/button-width 2))
              y         370
              new-state (on-mouse-click @state (->click x y))]
          (should= (assoc @state :O :expert-ai :page :play-game) new-state)))
      )

    (context "choosing the board size"

      (with state (-> (sut/setup :postgres)
                      (assoc :page :choose-board-size)))

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

    (context "play-again"
      (with state (-> (sut/setup :postgres)
                      (assoc :page :game-over)))

      (it "clicks somewhere outside the Play Again button"
        (let [click-pos {:x 1 :y 1}
              new-state (on-mouse-click @state click-pos)]
          (should= @state new-state)))

      (it "clicks in the center of the Play Again button"
        (let [click-x   (+ (:left sut/play-again-button)
                           (/ core/button-width 2))
              click-y   (+ (:top sut/play-again-button)
                           (/ core/button-height 2))
              new-state (on-mouse-click @state {:x click-x :y click-y})]
          (should= :choose-first-player (:page new-state))
          (should-not= (:game-id @state) (:game-id new-state))
          (should= :postgres (:database new-state))))

      (it "clicks on the top-left corner of Play Again button"
        (let [click-pos {:x (:left sut/play-again-button)
                         :y (:top sut/play-again-button)}
              new-state (on-mouse-click @state click-pos)]
          (should= :choose-first-player (:page new-state))
          (should-not= (:game-id @state) (:game-id new-state))))

      (it "clicks on the bottom-right corner of Play Again button"
        (let [click-pos {:x (:right sut/play-again-button)
                         :y (:bottom sut/play-again-button)}
              new-state (on-mouse-click @state click-pos)]
          (should= :choose-first-player (:page new-state))
          (should-not= (:game-id @state) (:game-id new-state))))
      )

    (context "play game page"

      (with state (-> (sut/setup :postgres)
                      (assoc :page :play-game
                             :board board/starting-board-3x3
                             :board-size :3x3
                             :current-token :X
                             :X :human
                             :O :easy-ai)))

      (it "clicks on top-left cell of the board"
        (let [cell-size (/ core/grid-width 3)
              click-pos {:x (/ cell-size 2) :y (/ cell-size 2)}
              new-state (on-mouse-click @state click-pos)]
          (should= :O (:current-token new-state))
          (should= :human (:X new-state))
          (should= :easy-ai (:O new-state))
          (should= :play-game (:page new-state))
          (should= :X (get-in (:board new-state) [0 0]))))

      (it "clicks on center cell of the board"
        (let [cell-size (/ core/grid-width 3)
              click-pos {:x (+ cell-size (/ cell-size 2))
                         :y (+ cell-size (/ cell-size 2))}
              new-state (on-mouse-click @state click-pos)]
          (should= :O (:current-token new-state))
          (should= :X (get-in (:board new-state) [1 1]))))

      (it "clicks on bottom-right cell of the board"
        (let [cell-size (/ core/grid-width 3)
              click-pos {:x (+ (* 2 cell-size) (/ cell-size 2))
                         :y (+ (* 2 cell-size) (/ cell-size 2))}
              new-state (on-mouse-click @state click-pos)]
          (should= :O (:current-token new-state))
          (should= :X (get-in (:board new-state) [2 2]))))

      (it "clicks on a cell that is already taken"
        (let [cell-size              (/ core/grid-width 3)
              click-pos              {:x (/ cell-size 2) :y (/ cell-size 2)}
              state-after-first-move (on-mouse-click @state click-pos)
              new-state              (on-mouse-click state-after-first-move click-pos)]
          (should= state-after-first-move new-state)))
      )
    )
  )