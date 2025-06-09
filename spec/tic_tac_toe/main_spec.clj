(ns tic-tac-toe.main-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.main :as sut]
            [tic-tac-toe.output :as output]))

(describe "main"
  (with-stubs)

  (redefs-around [output/greeting (stub :output/greeting)
                  game/play-game (stub :game/play-game)])

  #_(it "displays a greeting"
    (sut/-main)
    (should-have-invoked :output/greeting))

  #_(it "gets user to select game mode"
    (sut/-main)
    (should-have-invoked :game/play-game))
  )