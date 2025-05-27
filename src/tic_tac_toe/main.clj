(ns tic-tac-toe.main
  (:require [tic-tac-toe.output :as output]
            [tic-tac-toe.game :as game]))

(defn -main []
  (output/greeting)
  (game/take-turns output/starting-board \X))
