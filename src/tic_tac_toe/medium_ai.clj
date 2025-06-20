(ns tic-tac-toe.medium-ai
  (:require [tic-tac-toe.player-types :refer [->player-move]]
            [tic-tac-toe.expert-ai :refer [choose-best-move]]
            [tic-tac-toe.easy-ai :refer [choose-random-move]]))

(defn make-move [board current-token depth]
  (if (< depth 6)
    (choose-best-move board current-token depth)
    (choose-random-move board)))

(defmethod ->player-move :medium-ai [{:keys [board current-token depth]}]
  (make-move board current-token depth))
