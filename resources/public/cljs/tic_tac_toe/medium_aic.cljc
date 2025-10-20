(ns tic-tac-toe.medium-aic
  (:require [tic-tac-toe.player-typesc :refer [->player-move]]
            [tic-tac-toe.expert-aic :refer [choose-best-move]]
            [tic-tac-toe.easy-aic :refer [choose-random-move]]))

(def medium-ai-moves [:easy-ai
                      :expert-ai])

(defn best-or-rand-move [board current-token board-size]
  (let [move (rand-nth medium-ai-moves)]
    (if (= move :easy-ai)
      (choose-random-move board board-size)
      (choose-best-move board current-token board-size))))

(defmethod ->player-move :medium-ai [{:keys [board current-token board-size]}]
  (best-or-rand-move board current-token board-size))