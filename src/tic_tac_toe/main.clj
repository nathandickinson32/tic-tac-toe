(ns tic-tac-toe.main
  (:require [tic-tac-toe.core :refer :all :as core]
            [tic-tac-toe.board :refer :all :as board]))

(defn greeting []
  (let [greeting "Welcome to Tic Tac Toe!\nPlease enter board size:"]
    (core/output greeting)))

(defn -main []
  (greeting)
  (board/->start-board))
