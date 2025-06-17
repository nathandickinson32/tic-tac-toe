(ns tic-tac-toe.human
  (:require [tic-tac-toe.board :as board]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.player-types :refer [->player-move]]))

(def single-digit-positions
  {"1" [0 0] "2" [0 1] "3" [0 2]
   "4" [1 0] "5" [1 1] "6" [1 2]
   "7" [2 0] "8" [2 1] "9" [2 2]})

(defn ->grid-coordinates [input]
  (get single-digit-positions input))

(defn- maybe-valid-move [board input]
  (when-let [move (->grid-coordinates input)]
    (->> move (when (board/space-available? board move)))))

(defn get-user-move [board token]
  (output/player-prompt token)
  (let [input (clojure.string/trim (read-line))]
    (or (maybe-valid-move board input)
        (do
          (output/invalid-response)
          (recur board token)))))

(defmethod ->player-move :human [{:keys [board current-token]}]
  (get-user-move board current-token))