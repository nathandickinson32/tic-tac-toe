(ns tic-tac-toe.easy-ai
  (:require [tic-tac-toe.player-types :refer [->player-move]]
            [tic-tac-toe.board :as board]))

(defn choose-random-move [board board-size]
  (-> board
      (board/available-moves board-size)
      (rand-nth)))

(defmethod ->player-move :easy-ai [{:keys [board board-size]}]
  (choose-random-move board board-size))