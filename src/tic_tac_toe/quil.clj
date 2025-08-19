(ns tic-tac-toe.quil
  (:require [quil.core :as q]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.game :as game]))

(def state (atom {}))

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

(defn draw-token [col row token]
  (fill-black)
  (q/text-align :center :center)
  (q/text-size 72)
  (q/text (name token) (->pixel-location col) (->pixel-location row)))

(defn end-game-message [message]
  (when message
    (q/fill 0)
    (q/text-align :center :center)
    (q/text-size 32)
    (q/text message (/ grid-width 2) (- (/ grid-width 2) 80))))

(defn draw-tokens [{:keys [board]}]
  (doseq [row (range 3)
          col (range 3)
          :let [cell (get-in board [row col])]]
    (when (keyword? cell) (draw-token col row cell))))



#_(defn make-move [row col {:keys [board current-token board] :as state}]
    (let [new-board (board/make-move board [row col] current-token)
          msg       (when (board/game-over? new-board current-token board) "Game Over!")]
      (assoc state :board new-board :message msg)))

(defn valid-click? [row col {:keys [board message current-token board-size] :as state}]
  (let [in-progress? (nil? message)
        new-state    (game/->new-state state [row col])]
    (if (and (board/space-available? board [row col]) in-progress?)
      (if (board/game-over? (:board new-state) current-token board-size)
        (assoc new-state :message "finished")
        new-state)
      state)))

(comment
  (defn ->new-state [state]
    (let [updated-board (make-move)]
      (if (game-over?)
        (assoc state :board updated-board :message message)
        (assoc state :board updated-board)))))

(defn mouse-clicked [state click-position]
  (let [col (int (/ (:x click-position) cell-size))
        row (int (/ (:y click-position) cell-size))]
    (valid-click? row col state)))

(comment
  (defmulti draw-state :page)

  (defmethod draw-state :game [{:keys [message] :as state}]
    (white-background)
    (draw-gray-grid-lines)
    (draw-tokens state)
    (end-game-message message)))

(defn setup []
  (q/frame-rate 60)
  {:game-id       (random-uuid)
   :board         board/starting-board-3x3
   :current-token :X
   :board-size    :3x3
   :X            :human
   :O             :easy-ai
   :turn-count    0})

(defn draw-state [{:keys [message] :as state}]
  ;(white-background)
  ;(cond (state-ready) (do (draw-gray-grid-lines)
  ;                        (draw-tokens state)
  ;                        (end-game-message message))
  ;      (state-not-ready) (options-menu))

  (white-background)
  (draw-gray-grid-lines)
  (draw-tokens state)
  (end-game-message message)
  )