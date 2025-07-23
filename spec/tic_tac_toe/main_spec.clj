(ns tic-tac-toe.main-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.main :as sut]
            [tic-tac-toe.output :as output]))

(describe "main"
  (with-stubs)

  (redefs-around [output/greeting (stub :output/greeting)
                  game/play-again? (stub :play-again)
                  game/start-new-game (stub :game/play-game)])

  (it "displays a greeting"
    (sut/-main)
    (should-have-invoked :output/greeting))

  (it "starts the game"
    (sut/-main)
    (should-have-invoked :game/play-game))
  )