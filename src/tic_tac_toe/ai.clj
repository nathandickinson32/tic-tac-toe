(ns tic-tac-toe.ai
  (:require [tic-tac-toe.board :as board]))

(def all-positions
  (for [row (range 3)
        col (range 3)]
    [row col]))

(defn available-moves [board]
  (filter (partial board/space-available? board) all-positions))

(defn choose-random-move [board]
  (rand-nth (available-moves board)))

(defn choose-best-move [board] [1 2])