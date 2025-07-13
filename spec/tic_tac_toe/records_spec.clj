(ns tic-tac-toe.records-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.records :as sut]))

(describe "keeping record of game history"

  (context "when recording moves"
    (with-stubs)

    (it "gets the correct args to record moves"
      (let [test-state {:X             :human
                        :O             :easy-ai
                        :board         [[1 2 3] [4 5 6] [7 8 9]]
                        :current-token :X
                        :game-id       nil
                        :should-ignore "should be ignored"}]
        (with-redefs [spit (stub :spit)]
          (sut/record-move test-state))
        (let [content (str (dissoc test-state :should-ignore) "\n")]
          (should-have-invoked :spit {:with ["game-history.edn" content :append true]}))))
    )
  )