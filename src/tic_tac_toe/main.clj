(ns tic-tac-toe.main
  (:require [tic-tac-toe.output :as output]
            [tic-tac-toe.game :as game]))

(defn -main []
  (output/greeting)
  (game/choose-game-mode))