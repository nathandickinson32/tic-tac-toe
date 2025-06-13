(ns tic-tac-toe.main
  (:require [tic-tac-toe.output :as output]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.player-types]))

(defn -main []
  (output/greeting)
  (game/play-game))