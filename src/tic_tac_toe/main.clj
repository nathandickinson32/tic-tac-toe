(ns tic-tac-toe.main
  (:require [tic-tac-toe.core :as core]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.game :as game]))

(defn -main []
  (core/greeting)
  (game/game-loop board/starting-board \X))
