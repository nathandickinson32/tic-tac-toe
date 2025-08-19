(ns tic-tac-toe.quil
  (:require [quil.core :as q]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.game :as game]))

(def grid-width 600)
(def cell-size (/ grid-width 3))
(def grid-center (/ cell-size 2))
(def grid-size [grid-width grid-width])

(def button-width 200)
(def button-height 40)

(defn draw-button [label x y width height]
  (q/fill 230)
  (q/rect x y width height 10)
  (q/fill 0)
  (q/text-align :center :center)
  (q/text-size 20)
  (q/text label (+ x (/ width 2)) (+ y (/ height 2))))

(defn clicked? [mouse-x mouse-y x y width height]
  (and (>= mouse-x x)
       (<= mouse-x (+ x width))
       (>= mouse-y y)
       (<= mouse-y (+ y height))))

(defn white-background [] (q/background 255))
(defn gray-line [] (q/stroke 220))
(defn fill-black [] (q/fill 0))

(defn draw-vertical-lines [cell-size]
  (doseq [x (range cell-size grid-width cell-size)]
    (q/line x 0 x grid-width)))

(defn draw-horizontal-lines [cell-size]
  (doseq [y (range cell-size grid-width cell-size)]
    (q/line 0 y grid-width y)))

(defn draw-gray-grid-lines [state]
  (let [board-size 3                                        ;(if (= :3x3 (:board-size state)) 3 4)
        cell-size  (/ grid-width board-size)]
    (gray-line)
    (draw-vertical-lines cell-size)
    (draw-horizontal-lines cell-size)))

(defn ->pixel-location [cell cell-size]
  (+ (* cell cell-size) grid-center))

(defn draw-token [col row token state]
  (let [board-size 3                                        ;(if (= :3x3 (:board-size state)) 3 4)
        cell-size  (/ grid-width board-size)]
    (fill-black)
    (q/text-align :center :center)
    (q/text-size 72)
    (q/text (name token) (->pixel-location col cell-size) (->pixel-location row cell-size))))

(defn end-game-message [state]
  (when (board/end-game? (:board state) (:board-size state))
    (q/fill 0)
    (q/text-align :center :center)
    (q/text-size 32)
    (q/text "Game Over!" (/ grid-width 2) (- (/ grid-width 2) 80))))

(defn draw-tokens [{:keys [board] :as state}]
  (doseq [row (range 3)
          col (range 3)
          :let [cell (get-in board [row col])]]
    (when (keyword? cell) (draw-token col row cell state))))

(defn valid-click? [row col {:keys [board current-token board-size] :as state}]
  (let [in-progress? (not (board/game-over? board current-token board-size))
        new-state    (game/->new-state state [row col])]
    (if (and (board/space-available? board [row col]) in-progress?)
      new-state
      state)))

(defn choose-first-player [state click-position]
  (cond
    (clicked? (:x click-position) (:y click-position)
              (- (/ grid-width 2) button-width 20) 280 button-width button-height)
    (assoc state :current-token :X)

    (clicked? (:x click-position) (:y click-position)
              (+ (/ grid-width 2) 20) 280 button-width button-height)
    (assoc state :current-token :O)))

(defn choose-player-X [state click-position]
  (cond
    (clicked? (:x click-position) (:y click-position)
              (- (/ grid-width 2) (/ button-width 2)) 190 button-width button-height)
    (assoc state :X :human)

    (clicked? (:x click-position) (:y click-position)
              (- (/ grid-width 2) (/ button-width 2)) 250 button-width button-height)
    (assoc state :X :easy-ai)

    (clicked? (:x click-position) (:y click-position)
              (- (/ grid-width 2) (/ button-width 2)) 310 button-width button-height)
    (assoc state :X :medium-ai)

    (clicked? (:x click-position) (:y click-position)
              (- (/ grid-width 2) (/ button-width 2)) 370 button-width button-height)
    (assoc state :X :expert-ai)))

(defn choose-player-O [state click-position]
  (cond
    (clicked? (:x click-position) (:y click-position)
              (- (/ grid-width 2) (/ button-width 2)) 190 button-width button-height)
    (assoc state :O :human)

    (clicked? (:x click-position) (:y click-position)
              (- (/ grid-width 2) (/ button-width 2)) 250 button-width button-height)
    (assoc state :O :easy-ai)

    (clicked? (:x click-position) (:y click-position)
              (- (/ grid-width 2) (/ button-width 2)) 310 button-width button-height)
    (assoc state :O :medium-ai)

    (clicked? (:x click-position) (:y click-position)
              (- (/ grid-width 2) (/ button-width 2)) 370 button-width button-height)
    (assoc state :O :expert-ai)))

(defn play-human-move [state click-position]
  (let [col (int (/ (:x click-position) cell-size))
        row (int (/ (:y click-position) cell-size))]
    (valid-click? row col state)))

(defn choose-board-size [state click-position]
  (cond
    (clicked? (:x click-position) (:y click-position)
              (- (/ grid-width 2) button-width 20) 280 button-width button-height)
    (assoc state :board-size :3x3                           ;:gui-size 3
                 )

    (clicked? (:x click-position) (:y click-position)
              (+ (/ grid-width 2) 20) 280 button-width button-height)
    (assoc state :board-size :4x4                           ; :gui-size 4
                 :board board/starting-board-4x4)))

(defn mouse-clicked [state click-position]
  (cond (= nil (:current-token state)) (choose-first-player state click-position)
        (= nil (:X state)) (choose-player-X state click-position)
        (= nil (:O state)) (choose-player-O state click-position)
        (= nil (:board-size state)) (choose-board-size state click-position)
        :else (play-human-move state click-position)))

(defn create-new-game []
  {:game-id       (random-uuid)
   :board         board/starting-board-3x3
   :board-size    :3x3
   :turn-count    0})

(defn setup []
  (q/frame-rate 60)
  (create-new-game))

(comment
  (defmulti draw-state (fn [state] (cond (nil? (:current-token state)) :choose-first-player)))
  (defmethod draw-state :choose-first-player [state]
    (do (white-background)
        (q/text-align :center :center)
        (q/text-size 32)
        (q/text "Welcome to Tic Tac Toe!" (/ grid-width 2) 150)
        (q/text-size 24)
        (q/text "Who should go first?" (/ grid-width 2) 220)

        (draw-button "Player X"
                     (- (/ grid-width 2) button-width 20) 280
                     button-width button-height)

        (draw-button "Player O"
                     (+ (/ grid-width 2) 20) 280
                     button-width button-height))))

(defn choose-first-player-page []
  (white-background)
  (q/text-align :center :center)
  (q/text-size 32)
  (q/text "Welcome to Tic Tac Toe!" (/ grid-width 2) 150)
  (q/text-size 24)
  (q/text "Who should go first?" (/ grid-width 2) 220)

  (draw-button "Player X"
               (- (/ grid-width 2) button-width 20) 280
               button-width button-height)

  (draw-button "Player O"
               (+ (/ grid-width 2) 20) 280
               button-width button-height))

(defn draw-player-choice-buttons []
  (draw-button "Human" (- (/ grid-width 2) (/ button-width 2)) 190 button-width button-height)
  (draw-button "Easy Ai" (- (/ grid-width 2) (/ button-width 2)) 250 button-width button-height)
  (draw-button "Medium Ai" (- (/ grid-width 2) (/ button-width 2)) 310 button-width button-height)
  (draw-button "Expert Ai" (- (/ grid-width 2) (/ button-width 2)) 370 button-width button-height))

(defn choose-player-X-page []
  (white-background)
  (q/text-align :center :center)
  (q/text-size 24)
  (q/text "Choose Player X" (/ grid-width 2) 150)
  (draw-player-choice-buttons))

(defn choose-player-O-page []
  (white-background)
  (q/text-align :center :center)
  (q/text-size 24)
  (q/text "Choose Player O" (/ grid-width 2) 150)
  (draw-player-choice-buttons))

(defn play-game-page [state]
  (white-background)
  (draw-gray-grid-lines state)
  (draw-tokens state)
  (end-game-message state))

#_(defn choose-board-size-page []
  (white-background)
  (q/text-align :center :center)
  (q/text-size 24)
  (q/text "Choose board size" (/ grid-width 2) 220)
  (draw-button "3x3"
               (- (/ grid-width 2) button-width 20) 280
               button-width button-height)

  (draw-button "4x4"
               (+ (/ grid-width 2) 20) 280
               button-width button-height))

(defn draw-state [state]
  (cond (nil? (:current-token state)) (choose-first-player-page)
        (nil? (:X state)) (choose-player-X-page)
        (nil? (:O state)) (choose-player-O-page)
        ;(nil? (:board-size state)) (choose-board-size-page)
        :else (play-game-page state)))