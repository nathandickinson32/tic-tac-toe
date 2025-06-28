(ns tic-tac-toe.human
  (:require [tic-tac-toe.board :as board]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.player-types :refer [->player-move]]))

(def single-digit-positions-3x3
  {"1" [0 0] "2" [0 1] "3" [0 2]
   "4" [1 0] "5" [1 1] "6" [1 2]
   "7" [2 0] "8" [2 1] "9" [2 2]})

(def single-digit-positions-4x4
  {"1"  [0 0] "2" [0 1] "3" [0 2] "4" [0 3]
   "5"  [1 0] "6" [1 1] "7" [1 2] "8" [1 3]
   "9"  [2 0] "10" [2 1] "11" [2 2] "12" [2 3]
   "13" [3 0] "14" [3 1] "15" [3 2] "16" [3 3]})

(defn ->grid-coordinates [input board-size]
  (get single-digit-positions-3x3 input))

(defn- maybe-valid-move [board input board-size]
  (when-let [move (->grid-coordinates input board-size)]
    (->> move (when (board/space-available? board move)))))

(defn get-user-move [board token board-size]
  (output/player-prompt-3x3 token)
  (let [input (board/->clean-user-input)]
    (or (maybe-valid-move board input board-size)
        (do
          (output/invalid-response)
          (recur board token board-size)))))

(defmethod ->player-move :human [{:keys [board current-token board-size]}]
  (get-user-move board current-token board-size))