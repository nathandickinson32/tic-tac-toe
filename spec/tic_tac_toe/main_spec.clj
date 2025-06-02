(ns tic-tac-toe.main-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.main :as sut]
            [tic-tac-toe.output :as output]))

(describe "main"
  (with-stubs)

  (redefs-around [output/greeting (stub :output/greeting)
                  game/take-turns (stub :game/take-turns)])

  (it "displays a greeting"
    (sut/-main)
    (should-have-invoked :output/greeting))

  (it "plays tic tac toe"
    (sut/-main)
    (should-have-invoked :game/take-turns {:with [output/starting-board \X]}))
  )
