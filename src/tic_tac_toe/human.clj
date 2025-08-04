(ns tic-tac-toe.human
  (:require [tic-tac-toe.board :as board]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.player-types :refer [->player-move]]))

(def positions-3x3
  {"1" [0 0] "2" [0 1] "3" [0 2]
   "4" [1 0] "5" [1 1] "6" [1 2]
   "7" [2 0] "8" [2 1] "9" [2 2]})

(def positions-4x4
  {"1"  [0 0] "2" [0 1] "3" [0 2] "4" [0 3]
   "5"  [1 0] "6" [1 1] "7" [1 2] "8" [1 3]
   "9"  [2 0] "10" [2 1] "11" [2 2] "12" [2 3]
   "13" [3 0] "14" [3 1] "15" [3 2] "16" [3 3]})

(def positions-3x3x3
  {"1"  [0 0 0] "2" [0 0 1] "3" [0 0 2]
   "4"  [0 1 0] "5" [0 1 1] "6" [0 1 2]
   "7"  [0 2 0] "8" [0 2 1] "9" [0 2 2]

   "10" [1 0 0] "11" [1 0 1] "12" [1 0 2]
   "13" [1 1 0] "14" [1 1 1] "15" [1 1 2]
   "16" [1 2 0] "17" [1 2 1] "18" [1 2 2]

   "19" [2 0 0] "20" [2 0 1] "21" [2 0 2]
   "22" [2 1 0] "23" [2 1 1] "24" [2 1 2]
   "25" [2 2 0] "26" [2 2 1] "27" [2 2 2]})

(defn determine-grid-coordinate-size [board-size]
  (condp = board-size
    :3x3 positions-3x3
    :4x4 positions-4x4
    :3x3x3 positions-3x3x3))

(defn ->grid-coordinates [input board-size]
  (let [single-digit-positions (determine-grid-coordinate-size board-size)]
    (get single-digit-positions input)))

(defn- maybe-valid-move [board input board-size]
  (when-let [move (->grid-coordinates input board-size)]
    (when (board/space-available? board move)
      move)))

(defn get-user-move [board token board-size]
  (output/determine-player-prompt-to-print board-size token)
  (let [input (board/->clean-user-input)]
    (or (maybe-valid-move board input board-size)
        (do
          (output/invalid-response)
          (recur board token board-size)))))

(defmethod ->player-move :human [{:keys [board current-token board-size]}]
  (get-user-move board current-token board-size))