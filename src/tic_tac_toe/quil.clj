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

(defn draw-vertical-lines []
  (doseq [x (range cell-size grid-width cell-size)]
    (q/line x 0 x grid-width)))

(defn draw-horizontal-lines []
  (doseq [y (range cell-size grid-width cell-size)]
    (q/line 0 y grid-width y)))

(defn draw-gray-grid-lines []
  (gray-line)
  (draw-vertical-lines)
  (draw-horizontal-lines))

(defn ->pixel-location [cell]
  (+ (* cell cell-size) grid-center))

(defn draw-token [col row token]
  (fill-black)
  (q/text-align :center :center)
  (q/text-size 72)
  (q/text (name token) (->pixel-location col) (->pixel-location row)))

(defn end-game-message [state]
  (prn "board:" (:board state))
  (prn "token:" (:current-token state))
  (prn "game-over:" (board/end-game? (:board state) (:board-size state)))
  (when (board/end-game? (:board state) (:board-size state))
    (q/fill 0)
    (q/text-align :center :center)
    (q/text-size 32)
    (q/text "finished" (/ grid-width 2) (- (/ grid-width 2) 80))))

(defn draw-tokens [{:keys [board]}]
  (doseq [row (range 3)
          col (range 3)
          :let [cell (get-in board [row col])]]
    (when (keyword? cell) (draw-token col row cell))))

(defn valid-click? [row col {:keys [board current-token board-size] :as state}]
  (let [in-progress?   (not (board/game-over? board current-token board-size))
        new-state    (game/->new-state state [row col])]
    (if (and (board/space-available? board [row col]) in-progress?)
      new-state
      state)))

(defn mouse-clicked [state click-position]
  (if (= nil (:current-token state))
    (cond
      (clicked? (:x click-position) (:y click-position)
                (- (/ grid-width 2) button-width 20) 280 button-width button-height)
      (assoc state :current-token :X)

      (clicked? (:x click-position) (:y click-position)
                (+ (/ grid-width 2) 20) 280 button-width button-height)
      (assoc state :current-token :O)
      )

    (let [col (int (/ (:x click-position) cell-size))
          row (int (/ (:y click-position) cell-size))]
      (valid-click? row col state))))

(defn setup []
  (q/frame-rate 60)
  {:game-id       (random-uuid)
   :board         board/starting-board-3x3
   :current-token nil
   :board-size    :3x3
   :X             :human
   :O             :expert-ai
   :turn-count    0})

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

(defn draw-state [{:keys [message] :as state}]
  ;(white-background)
  ;(cond (state-ready) (do (draw-gray-grid-lines)
  ;                        (draw-tokens state)
  ;                        (end-game-message message))
  ;      (state-not-ready) (options-menu))

  ;(white-background)
  ;(draw-gray-grid-lines)
  ;(draw-tokens state)
  ;(end-game-message message)

  (cond (nil? (:current-token state))
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
                         button-width button-height))

        ;(nil? (:X state))
        ; (do "draw screen for x")
        :else
        (do
          (white-background)
          (draw-gray-grid-lines)
          (draw-tokens state)
          (end-game-message state)))
  )