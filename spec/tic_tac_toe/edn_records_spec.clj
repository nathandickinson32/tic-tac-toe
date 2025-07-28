(ns tic-tac-toe.edn-records-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.edn-records :as sut]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.board :as board]))

(describe "Game records"

  (context "when recording moves"
    (with-stubs)

    (it "gets the correct args to record moves"
      (let [test-state {:X             :human
                        :O             :easy-ai
                        :board         output/starting-board-3x3
                        :current-token :X
                        :game-id       "123"
                        :should-ignore "should be ignored"}]
        (with-redefs [spit (stub :spit)]
          (sut/record-move test-state))
        (let [content (str (dissoc test-state :should-ignore) "\n")]
          (should-have-invoked :spit {:with ["game-history.edn" content :append true]}))))
    )

  (context "when reading the last recorded move"
    (with-stubs)

    (it "returns a single record"
      (let [record {:X             :human
                    :O             :human
                    :board         output/starting-board-3x3
                    :current-token :X
                    :game-id       nil}]
        (with-redefs [slurp (stub :slurp {:return (str record "\n")})]
          (should= record (sut/read-last-record)))))

    (it "returns last record"
      (let [record-1 {:X             :human
                      :O             :human
                      :board         output/starting-board-3x3
                      :current-token :X
                      :game-id       nil}
            record-2 {:X             :easy-ai
                      :O             :human
                      :board         (board/make-move output/starting-board-3x3 [0 0] :X)
                      :current-token :O
                      :game-id       nil}
            content  (str record-1 "\n" record-2 "\n")]
        (with-redefs [slurp (stub :slurp {:return content})]
          (should= record-2 (sut/read-last-record)))))
    )

  (context "printing a replay of a recorded game"
    (with-stubs)

    (it "returns false if first argument is not --replay"
      (should-not (sut/replay? ["--not-replay" "some-id"])))


    (it "responds to empty game id"
      (with-redefs [slurp                  (constantly "id-123")
                    output/invalid-game-id (stub :invalid-response)
                    output/greeting        (stub :greeting)
                    game/start-new-game    (stub :new-game)]
        (should (sut/replay? ["--replay" ""]))
        (should-have-invoked :invalid-response)
        (should-not-have-invoked :greeting)
        (should-not-have-invoked :new-game)))

    (it "responds to an invalid game id"
      (with-redefs [slurp                  (constantly "id-123")
                    output/invalid-game-id (stub :invalid-response)
                    output/greeting        (stub :greeting)
                    game/start-new-game    (stub :new-game)]
        (should (sut/replay? ["--replay" "invalid"]))
        (should-have-invoked :invalid-response)
        (should-not-have-invoked :greeting)
        (should-not-have-invoked :new-game)))

    #_(it "prints outcome and board when X wins"
      (let [state {:game-id "id-123"}]
        (with-redefs [slurp                           (constantly (pr-str state))
                      board/win?                      (constantly true)
                      board/full-board?               (constantly false)
                      println                         (stub :println)
                      output/determine-board-to-print (stub :print)
                      output/record-of-token-moved    (stub :moved-by)]
          (should (sut/replay? ["--replay" "id-123"]))
          (should-have-invoked :moved-by)
          (should-have-invoked :print))))
    )
  )