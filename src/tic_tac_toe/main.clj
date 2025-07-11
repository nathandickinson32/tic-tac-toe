(ns tic-tac-toe.main
  (:require [tic-tac-toe.output :as output]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.player-types]
            [tic-tac-toe.records :as records]))

(defn -main []
  (output/greeting)
  (game/build-game-state))