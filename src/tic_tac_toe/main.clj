(ns tic-tac-toe.main
  (:require [tic-tac-toe.output :as output]
            [tic-tac-toe.board]
            [tic-tac-toe.human]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.records :as records]
            [tic-tac-toe.player-types]
            [clojure.string :as str]
            [tic-tac-toe.gui :as gui]))

(defn setup-game [args database]
  (let [replay? (some #(= "--replay" %) args)
        game-id (first (filter #(not (str/starts-with? % "--")) args))]
    (when-not (records/replay-game replay? game-id database)
      (output/greeting)
      (game/start-game args))))

(defn -main [& args]
  (let [database (if (some #(= "--edn" %) args) :edn-file :postgres)]
    (if (some #(= "--tui" %) args)
      (setup-game args database)
      (gui/-main database))))