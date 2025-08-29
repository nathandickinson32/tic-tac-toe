(ns tic-tac-toe.main-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.main :as sut]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.records :as records]
            [tic-tac-toe.gui.gui-sketch :as gui]))

(describe "main"
  (with-stubs)

  (redefs-around [output/greeting  (stub :greeting)
                  game/play-again? (stub :play-again)
                  game/start-game  (stub :start-game)
                  gui/-main        (stub :gui)])

  (context "run game with no arguments"

    (it "calls gui and does not call greeting or start-game"
      (sut/-main)
      (should-have-invoked :gui)
      (should-not-have-invoked :greeting)
      (should-not-have-invoked :start-game)))

  (context "run CLI game with no arguments"

    #_(it "displays a greeting and starts the game"
        (sut/-main ["--tui"])
        (should-have-invoked :greeting)
        (should-have-invoked :start-game))
    )

  (context "run game with arguments"

    #_(it "calls greeting and starts game when replay? is false"
        (with-redefs [records/replay-game (constantly false)]
          (sut/-main ["--tui" "--replay" "123"])
          (should-have-invoked :greeting)
          (should-have-invoked :start-game)))

    (it "does not call greeting or start-game when replay? is true"
      (with-redefs [records/replay-game (constantly true)]
        (sut/-main ["--tui" "--replay" "123"])
        (should-not-have-invoked :greeting)
        (should-not-have-invoked :start-game)))
    )
  )