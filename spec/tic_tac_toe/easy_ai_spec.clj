(ns tic-tac-toe.easy-ai-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.easy-ai :as sut]
            [tic-tac-toe.test-boards-spec :as test-board]))

(describe "an Easy AI Player"

  (context "when getting a random AI move"

    (it "chooses move from available moves"
      (let [test-board [[:O :X :O]
                        [\4 :X \6]
                        [:X :O \9]]]
        (with-redefs [rand-nth (constantly [2 2])]
          (should= [2 2] (sut/choose-random-move test-board)))))

    (it "chooses move from available moves"
      (let [test-board [[:O :X :O]
                        [\4 :X \6]
                        [:X :O \9]]]
        (with-redefs [rand-nth (constantly [1 0])]
          (should= [1 0] (sut/choose-random-move test-board)))))

    (it "chooses move from available moves"
      (with-redefs [rand-nth (constantly [1 2])]
        (should= [1 2] (sut/choose-random-move test-board/ai-test-board1))))
    )
  )