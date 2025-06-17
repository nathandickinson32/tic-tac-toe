(ns tic-tac-toe.easy-ai
  (:require [tic-tac-toe.player-types :refer [->player-move]]
            [tic-tac-toe.board :as board]))

(defn choose-random-move [board]
  (-> board
      (board/available-moves)
      (rand-nth)))

(defmethod ->player-move :easy-ai [{:keys [board]}]
  (choose-random-move board))