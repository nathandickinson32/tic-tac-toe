(ns tic-tac-toe.game
  (require [tic-tac-toe.player :as player]
           [tic-tac-toe.board :as board]))

(defn print-end-board [board]
  (board/print-board board)
  true)

(defn winner-message [board player]
  (println player "wins!")
  (print-end-board board))

(defn draw-message [board]
  (println "It's a tie!")
  (print-end-board board))

(defn full-board? [board]
  (not-any? #(= \space %) (flatten board)))

(defn three-matches? [row player]
  (every? #(= % player) row))

(defn winning-row? [board player]
  (boolean (some #(three-matches? % player) board)))

(defn winning-col? [board player]
  (let [columns-as-rows (apply mapv vector board)]
    (winning-row? columns-as-rows player)))

(defn win? [board player]
  (or (winning-row? board player)
      (winning-col? board player)))

(defn game-over? [new-board current-player]
  (cond
    (win? new-board current-player)
    (winner-message new-board current-player)
    (full-board? new-board) (draw-message new-board)
    :else false))

(defn game-loop [board current-player]
  (board/print-board board)
  (let [move        (board/get-user-move board)
        new-board   (board/make-move board move current-player)
        next-player (player/switch-player current-player)]
    (when-not (game-over? new-board current-player)
      (recur new-board next-player))))