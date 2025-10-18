(ns tic-tac-toe.human
  (:require [tic-tac-toe.boardc :as board]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.player-typesc :refer [->player-move]]))

(defn get-user-move [board token board-size]
  (output/determine-player-prompt-to-print board-size token)
  (let [input (output/->clean-user-input)]
    (or (board/maybe-valid-move board input board-size)
        (do
          (output/invalid-response)
          (recur board token board-size)))))

(defmethod ->player-move :human [{:keys [board current-token board-size]}]
  (get-user-move board current-token board-size))