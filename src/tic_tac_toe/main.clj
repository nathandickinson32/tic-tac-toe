(ns tic-tac-toe.main
  (:require [tic-tac-toe.core :as core]
            [tic-tac-toe.board :as board]))

(defn -main []
  (core/greeting)
  (board/->start-board))
