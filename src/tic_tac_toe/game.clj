(ns tic-tac-toe.game
  (:require [tic-tac-toe.board :as board]
            [tic-tac-toe.output :as output]))

(defn switch-player [current-player]
  (if (= \X current-player)
    \O
    \X))

(defn full-board? [board]
  (every? #{\X \O} (flatten board)))

(defn three-matches? [row player]
  (every? #(= % player) row))

(defn diagonal-right [board]
  [(get-in board [0 0])
   (get-in board [1 1])
   (get-in board [2 2])])

(defn diagonal-left [board]
  [(get-in board [0 2])
   (get-in board [1 1])
   (get-in board [2 0])])

(defn winning-row? [board player]
  (some #(three-matches? % player) board))

(defn winning-col? [board player]
  (let [columns-as-rows (apply mapv vector board)]
    (winning-row? columns-as-rows player)))

(defn winning-diagonal? [board player]
  (or (three-matches? (diagonal-right board) player)
      (three-matches? (diagonal-left board) player)))

(defn win? [board player]
  (or (winning-row? board player)
      (winning-col? board player)
      (winning-diagonal? board player)))

(defn game-over? [board player]
  (cond
    (win? board player) (do (output/winner-message board player) true)
    (full-board? board) (do (output/draw-message board) true)))

(defn take-turns [board current-player]
  (output/print-board board)
  (let [move        (board/get-user-move board current-player)
        new-board   (board/make-move board move current-player)
        next-player (switch-player current-player)]
    (when-not (game-over? new-board current-player)
      (recur new-board next-player))))