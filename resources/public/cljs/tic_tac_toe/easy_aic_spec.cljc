(ns tic-tac-toe.easy-aic-spec
  (:require [speclj.core :refer [it describe context should=]]
            [tic-tac-toe.easy-aic :as sut]
            [tic-tac-toe.test-boards-3x3c-spec :as test-board]))

(describe "an Easy AI Player"

  (context "when getting a random AI move from a 3x3 board"

    (it "chooses move from available moves"
      (let [test-board [[:O :X :O]
                        [\4 :X \6]
                        [:X :O \9]]]
        (with-redefs [rand-nth (constantly [2 2])]
          (should= [2 2] (sut/choose-random-move test-board :3x3)))))

    (it "chooses move from available moves"
      (let [test-board [[:O :X :O]
                        [\4 :X \6]
                        [:X :O \9]]]
        (with-redefs [rand-nth (constantly [1 0])]
          (should= [1 0] (sut/choose-random-move test-board :3x3)))))

    (it "chooses move from available moves"
      (with-redefs [rand-nth (constantly [1 2])]
        (should= [1 2] (sut/choose-random-move test-board/O-should-block :3x3))))
    )

  (context "when getting a random AI move from a 4x4 board"

    (it "chooses move from available moves 4x4 board"
      (let [test-board [["1" "2" :O :X]
                        [:X :X :O :X]
                        ["9" :O :O :O]
                        [:O "14" :O "16"]]]
        (with-redefs [rand-nth (constantly [3 3])]
          (should= [3 3] (sut/choose-random-move test-board :4x4)))))

    (it "chooses move from available moves 4x4 board"
      (let [test-board [["1" "2" :O :X]
                        [:X :X :O :X]
                        ["9" :O :O :O]
                        [:O "14" :O "16"]]]
        (with-redefs [rand-nth (constantly [0 0])]
          (should= [0 0] (sut/choose-random-move test-board :4x4)))))

    (it "chooses move from available moves 4x4 board"
      (let [test-board [["1" "2" :O :X]
                        [:X :X :O :X]
                        ["9" :O :O :O]
                        [:O "14" :O "16"]]]
        (with-redefs [rand-nth (constantly [2 0])]
          (should= [2 0] (sut/choose-random-move test-board :4x4)))))
    )
  )