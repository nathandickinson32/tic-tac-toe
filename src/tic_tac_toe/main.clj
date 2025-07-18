(ns tic-tac-toe.main
  (:require [tic-tac-toe.output :as output]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.player-types]
            [tic-tac-toe.records :as records]))

(defn -main [& args]
  (output/greeting)
  (game/build-game-state))

#_(defn -main [& args]
  (prn "args:" args)
  (if (replay? args)
    ;replay
    (do
      (output/greeting)
      (game/build-game-state)))
  )