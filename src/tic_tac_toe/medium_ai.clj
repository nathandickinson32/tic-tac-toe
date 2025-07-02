(ns tic-tac-toe.medium-ai
  (:require [tic-tac-toe.player-types :refer [->player-move]]
            [tic-tac-toe.expert-ai :refer [choose-best-move]]
            [tic-tac-toe.easy-ai :refer [choose-random-move]]))

(def medium-ai-moves [:easy-ai
                      :expert-ai])

(defn best-or-rand-move [board current-token depth board-size]
  (let [move (rand-nth medium-ai-moves)]
    (if (= move :easy-ai)
      (choose-random-move board board-size)
      (choose-best-move board current-token depth board-size))))

(defmethod ->player-move :medium-ai [{:keys [board current-token depth board-size]}]
  (best-or-rand-move board current-token depth board-size))