(ns tic-tac-toe.main
  (:require [tic-tac-toe.output :as output]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.records :as records]
            [tic-tac-toe.player-types]))

(defn run-game [args]
  (when-not (records/replay? args)
    (output/greeting)
    (game/start-game args)))

(defn -main [& args]
  (run-game args))