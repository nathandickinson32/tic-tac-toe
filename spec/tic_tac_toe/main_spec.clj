(ns tic-tac-toe.main-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.main :as sut]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.records :as records]))

(describe "main"
  (with-stubs)

  (redefs-around [output/greeting (stub :greeting)
                  game/play-again? (stub :play-again)
                  game/start-new-game (stub :start-game)])

  (context "run game with no arguments"

    (it "displays a greeting"
      (sut/-main)
      (should-have-invoked :greeting))

    (it "starts the game"
      (sut/-main)
      (should-have-invoked :start-game))
    )

  (context "run game with arguments"

    (it "calls greeting and starts game when replay? is false"
      (with-redefs [records/replay? (constantly false)]
        (sut/-main ["--replay" "123"])
        (should-have-invoked :greeting)
        (should-have-invoked :start-game)))

    (it "does not call greeting or start-game when replay? is true"
      (with-redefs [records/replay? (constantly true)]
        (sut/-main ["--replay" "123"])
        (should-not-have-invoked :greeting)
        (should-not-have-invoked :start-game)))
    )
  )