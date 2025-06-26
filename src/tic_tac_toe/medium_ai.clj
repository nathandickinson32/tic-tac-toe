(ns tic-tac-toe.medium-ai
  (:require [tic-tac-toe.player-types :refer [->player-move]]
            [tic-tac-toe.expert-ai :refer [choose-best-move]]
            [tic-tac-toe.easy-ai :refer [choose-random-move]]))

(defn best-or-rand-move [board current-token depth]
  (if (< depth 6)
    (choose-best-move board current-token depth)
    (choose-random-move board)))
;change to random move between expert and easy every turn 
(defmethod ->player-move :medium-ai [{:keys [board current-token depth]}]
  (best-or-rand-move board current-token depth))