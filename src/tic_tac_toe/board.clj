(ns tic-tac-toe.board
  (:require [tic-tac-toe.output :as output]))

(def single-digit-positions
  {"1" [0 0] "2" [0 1] "3" [0 2]
   "4" [1 0] "5" [1 1] "6" [1 2]
   "7" [2 0] "8" [2 1] "9" [2 2]})

(defn space-available? [board move]
  (let [symbol (get-in board move)]
    (not (or (= symbol \X) (= symbol \O)))))

(defn ->grid-coordinates [input]
  (get single-digit-positions input))

(defn- maybe-valid-move [board input]
  (when-let [move (->grid-coordinates input)]
    (when (space-available? board move)
      move)))

(defn make-move [board move player]
  (assoc-in board move player))

(defn get-user-move [board player]
  (output/player-prompt player)
  (let [input (read-line)]
    (or (maybe-valid-move board input)
        (do
          (output/invalid-response)
          (recur board player)))))