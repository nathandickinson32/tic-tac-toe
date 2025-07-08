(ns tic-tac-toe.records-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.records :as sut]))

(describe "keeping record of game history"

  (context "when recording moves"

    (it "gets the correct args to record moves"
      (let [test-state     {:X             :human
                            :O             :easy-ai
                            :board         [[1 2 3] [4 5 6] [7 8 9]]
                            :current-token :X
                            :should-ignore "should be ignored"}
            recorded-state (atom nil)]
        (with-redefs [spit (fn [& args] (reset! recorded-state args))]
          (sut/record-move test-state))
        (should= "game-history.edn" (nth @recorded-state 0))
        (should= :append (nth @recorded-state 2))
        (should= true (nth @recorded-state 3))
        (should= (str (select-keys test-state [:X :O :board :current-token]) "\n")
                 (nth @recorded-state 1))))
    )

  (context "when recording end game"

    (it "gets the correct args to record moves"
      (let [recorded-state (atom nil)]
        (with-redefs [spit (fn [& args] (reset! recorded-state args))]
          (sut/record-end-game))
        (should= "game-history.edn" (nth @recorded-state 0))
        (should= :append (nth @recorded-state 2))
        (should= true (nth @recorded-state 3))
        (should= "Game Has Ended\n" (nth @recorded-state 1))))
    )
  )