(ns tic-tac-toe.main
  (:require [tic-tac-toe.output :as output]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.player-types]
            [tic-tac-toe.records :as records]))

(defn -main [& args]
  (output/greeting)
  (game/start-game))


#_(defn -main [& args]
    (prn "args:" args)
    (let [content (slurp "game-history.edn")]
      (if (filter (contains? (:game-id args) content))
        (do (prn "args:" (concat "made it" args))
            (game/start-new-game))
        (do
          (output/greeting)
          (game/start-new-game))))
    )