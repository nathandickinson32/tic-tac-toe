(ns tic-tac-toe.easy-ai
  (:require [tic-tac-toe.player-types :refer [->player-move]]
            [tic-tac-toe.board-3x3 :as board-3x3]))

(defn choose-random-move [board board-size]
  (-> board
      (board-3x3/available-moves board-size)
      (rand-nth)))

(defmethod ->player-move :easy-ai [{:keys [board board-size]}]
  (choose-random-move board board-size))