(ns tic-tac-toe.game
  (require [tic-tac-toe.board :as board]))

(defn print-end-board [board]
  (board/print-board board)
  true)

(defn switch-player [current-player]
  (if (= \X current-player)
    \O
    \X))

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

(defn ->diagonals [board]
  (let [diagonal-right [(get-in board [0 0]) (get-in board [1 1]) (get-in board [2 2])]
        diagonal-left  [(get-in board [0 2]) (get-in board [1 1]) (get-in board [2 0])]]
    [diagonal-right diagonal-left]))

(defn diagonal-match? [diagonals player]
  (or (three-matches? (first diagonals) player)
      (three-matches? (second diagonals) player)))

(defn winning-row? [board player]
  (boolean (some #(three-matches? % player) board)))

(defn winning-col? [board player]
  (let [columns-as-rows (apply mapv vector board)]
    (winning-row? columns-as-rows player)))

(defn winning-diagonal? [board player]
  (let [diagonals (->diagonals board)]
    (diagonal-match? diagonals player)))

(defn win? [board player]
  (or (winning-row? board player)
      (winning-col? board player)
      (winning-diagonal? board player)))

(defn game-over? [new-board current-player]
  (cond
    (win? new-board current-player)
    (winner-message new-board current-player)
    (full-board? new-board)
    (draw-message new-board)
    :else false))

(defn game-loop [board current-player]
  (board/print-board board)
  (let [move        (board/get-user-move board)
        new-board   (board/make-move board move current-player)
        next-player (switch-player current-player)]
    (when-not (game-over? new-board current-player)
      (recur new-board next-player))))