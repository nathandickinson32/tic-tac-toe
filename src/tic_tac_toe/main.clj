(ns tic-tac-toe.main
  (:require [clojure.string :as str]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.edn-records :as records]
            [tic-tac-toe.player-types]))

(defn run-game [args]
  (when-not (records/replay? args)
    (output/greeting)
    (game/start-new-game)))

(defn -main [& args]
  (run-game args))