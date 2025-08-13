(ns tic-tac-toe.quil
  (:require [quil.core :as q]))

(def grid-width 600)
(def cell-size (/ grid-width 3))
(def grid-center (/ cell-size 2))
(def grid-size [grid-width grid-width])

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

(defn draw-x [col row]
  (fill-black)
  (q/text-align :center :center)
  (q/text-size 72)
  (q/text "X" (->pixel-location col) (->pixel-location row)))

(defn all-filled? [board]
  (every? some? (flatten board)))

(defn end-game-message [message]
  (when message
    (q/fill 0)
    (q/text-align :center :center)
    (q/text-size 32)
    (q/text message (/ grid-width 2) (- (/ grid-width 2) 80))))

(defn draw-tokens [board]
  (doseq [row (range 3)
          col (range 3)]
    (when (= :X (get-in board [row col]))
      (draw-x col row))))

(defn setup []
  (q/frame-rate 100)
  {:board   (vec (repeat 3 (vec (repeat 3 nil))))
   :message nil})

(defn make-move [board row col state]
  (let [new-board (assoc-in board [row col] :X)
        msg       (when (all-filled? new-board) "Game Over!")]
    (assoc state :board new-board :message msg)))

(defn valid-click? [board row col state]
  (if (and (nil? (get-in board [row col])) (nil? (:message state)))
    (make-move board row col state)
    state))

(defn mouse-clicked [state click-position]
  (let [col   (int (/ (:x click-position) cell-size))
        row   (int (/ (:y click-position) cell-size))
        board (:board state)]
    (valid-click? board row col state)))

(defn draw-state [{:keys [board message]}]
  (white-background)
  (draw-gray-grid-lines)
  (draw-tokens board)
  (end-game-message message))