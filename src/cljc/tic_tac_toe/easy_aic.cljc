(ns tic-tac-toe.easy-aic
  (:require [tic-tac-toe.player-typesc :refer [->player-move]]
            [tic-tac-toe.boardc :as board]))

(defn choose-random-move [board board-size]
  (-> board
      (board/available-moves board-size)
      (rand-nth)))

(defmethod ->player-move :easy-ai [{:keys [board board-size]}]
  (choose-random-move board board-size))