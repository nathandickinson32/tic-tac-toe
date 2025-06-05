(ns tic-tac-toe.ai-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.ai :as sut]))

(describe "an AI Player"

  (context "when getting an AI move"

    (it "gets all 9 board positions"
      (should= [[0 0] [0 1] [0 2]
                [1 0] [1 1] [1 2]
                [2 0] [2 1] [2 2]]
               (sort sut/all-positions)))

    (it "gets one available move"
      (let [test-board
            [[\O \X \O]
             [\X \X \O]
             [\X \O \9]]]
        (should= [[2 2]] (sut/available-moves test-board))))

    (it "gets all available moves"
      (let [test-board
            [[\O \X \O]
             [\4 \X \6]
             [\X \O \9]]]
        (should= [[1 0] [1 2] [2 2]] (sort (sut/available-moves test-board)))))

    (it "does not contain moves that are taken"
      (let [test-board
            [[\O \X \O]
             [\4 \X \6]
             [\X \O \9]]]
        (should-not-contain [0 0] (sut/available-moves test-board))
        (should-not-contain [0 1] (sut/available-moves test-board))
        (should-not-contain [0 2] (sut/available-moves test-board))
        (should-not-contain [1 1] (sut/available-moves test-board))
        (should-not-contain [2 0] (sut/available-moves test-board))
        (should-not-contain [2 1] (sut/available-moves test-board))))

    (it "chooses move from available moves"
      (let [test-board [[\O \X \O]
                        [\4 \X \6]
                        [\X \O \9]]]
        (with-redefs [rand-nth (constantly [2 2])]
          (should= [2 2] (sut/choose-move test-board)))))

    (it "chooses move from available moves"
      (let [test-board [[\O \X \O]
                        [\4 \X \6]
                        [\X \O \9]]]
        (with-redefs [rand-nth (constantly [1 0])]
          (should= [1 0] (sut/choose-move test-board)))))

    (it "chooses move from available moves"
      (let [test-board [[\O \X \O]
                        [\4 \X \6]
                        [\X \O \9]]]
        (with-redefs [rand-nth (constantly [1 2])]
          (should= [1 2] (sut/choose-move test-board)))))
    )
  )