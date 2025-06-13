(ns tic-tac-toe.ai
  (:require [tic-tac-toe.human :as human]
            [tic-tac-toe.player-types :refer [->player-move]]
            [tic-tac-toe.board :as board]))

(defn choose-random-move [board]
  (rand-nth (board/available-moves board)))

(defmethod ->player-move :easy-ai [{:keys [board]}]
  (choose-random-move board))