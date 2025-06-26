(ns tic-tac-toe.medium-ai
  (:require [tic-tac-toe.player-types :refer [->player-move]]
            [tic-tac-toe.expert-ai :refer [choose-best-move]]
            [tic-tac-toe.easy-ai :refer [choose-random-move]]))

(def medium-ai-moves [:easy-ai
                      :expert-ai])

(defn best-or-rand-move [board current-token depth]
  (let [move (rand-nth medium-ai-moves)]
    (prn "(println move):" (println move))
    (if (= move :easy-ai)
      (choose-random-move board)
      (choose-best-move board current-token depth))))

(defmethod ->player-move :medium-ai [{:keys [board current-token depth]}]
  (best-or-rand-move board current-token depth))