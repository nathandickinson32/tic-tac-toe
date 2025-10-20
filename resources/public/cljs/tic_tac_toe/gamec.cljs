(ns tic-tac-toe.gamec
  (:require [tic-tac-toe.boardc :as board]))

(defn ->new-state [{:keys [board current-token board-size turn-count] :as state} grid-move]
  (let [new-board   (board/make-move board grid-move current-token)
        next-player (board/switch-player current-token)
        turn-count  (inc turn-count)
        new-state   (assoc state
                      :current-token next-player
                      :board new-board
                      :turn-count turn-count)]
    new-state))