(ns tic-tac-toe.main
  (:require [tic-tac-toe.output :as output]
            [tic-tac-toe.boardc]
            [tic-tac-toe.human]
            [tic-tac-toe.tui-game :as game]
            [tic-tac-toe.records :as records]
            [tic-tac-toe.player-typesc]
            [clojure.string :as str]
            #?@(:bb  ()
                :clj ([tic-tac-toe.gui-sketch :as gui]))))

(defn setup-game [args database]
  (let [replay? (some #(= "--replay" %) args)
        game-id (first (remove #(str/starts-with? % "--") args))]
    (when-not (records/replay-game replay? game-id database)
      (output/greeting)
      (game/start-game args))))

(defn- tui? [args]
  #?(:bb  (not-any? #(= "--gui" %) args)
     :clj (some #(= "--tui" %) args)))

(defn- run-gui [database]
  #?(:bb  nil
     :clj (gui/-main database)))

(defn -main [& args]
  (let [database (if (some #(= "--edn" %) args) :edn-file :postgres)]
    (if (tui? args)
      (setup-game args database)
      (run-gui database))))