(ns tic-tac-toe.human-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.boardc :as board]
            [tic-tac-toe.human :as sut]
            [tic-tac-toe.output :as output]))

(describe "a human player"

  (context "get-user-move"
    (with-stubs)

    (redefs-around [output/player-prompt-3x3   (stub :output/player-prompt-3x3)
                    output/player-prompt-4x4   (stub :output/player-prompt-4x4)
                    output/player-prompt-3x3x3 (stub :output/player-prompt-3x3x3)
                    output/invalid-response    (stub :output/invalid-response)])

    (it "displays player prompt 3x3"
      (with-in-str "1\n"
        (sut/get-user-move board/starting-board-3x3 :X :3x3))
      (should-have-invoked :output/player-prompt-3x3 {:with [:X]}))

    (it "displays player prompt 4x4"
      (with-in-str "1\n"
        (sut/get-user-move board/starting-board-4x4 :X :4x4))
      (should-have-invoked :output/player-prompt-4x4 {:with [:X]}))

    (it "displays player prompt 3x3x3"
      (with-in-str "1\n"
        (sut/get-user-move board/starting-board-3x3x3 :X :3x3x3))
      (should-have-invoked :output/player-prompt-3x3x3 {:with [:X]}))

    (it "returns [0 0] for 1"
      (let [test-board board/starting-board-3x3]
        (with-in-str "1\n"
          (should= [0 0] (sut/get-user-move test-board :X :3x3)))))

    (it "returns [0 1] for 2"
      (let [test-board board/starting-board-3x3]
        (with-in-str "2\n"
          (should= [0 1] (sut/get-user-move test-board :X :3x3)))
        (should-not-have-invoked :output/invalid-response)))

    (it "4x4 board returns [0 0] for 1"
      (let [test-board board/starting-board-4x4]
        (with-in-str "1\n"
          (should= [0 0] (sut/get-user-move test-board :X :4x4)))))

    (it "4x4 board returns [3 3] for 16"
      (let [test-board board/starting-board-4x4]
        (with-in-str "16\n"
          (should= [3 3] (sut/get-user-move test-board :X :4x4)))))

    (it "4x4 board returns [3 3] for 16"
      (let [test-board board/starting-board-4x4]
        (with-in-str "16\n"
          (should= [3 3] (sut/get-user-move test-board :X :4x4)))))

    (it "3x3x3 board returns [0 0 0] for 1"
      (with-in-str "1\n"
        (should= [0 0 0] (sut/get-user-move board/starting-board-3x3x3 :X :3x3x3))))

    (it "3x3x3 board returns [1 1 1] for 14"
      (with-in-str "14\n"
        (should= [1 1 1] (sut/get-user-move board/starting-board-3x3x3 :X :3x3x3))))

    (it "3x3x3 board returns [2 2 2] for 27"
      (with-in-str "27\n"
        (should= [2 2 2] (sut/get-user-move board/starting-board-3x3x3 :X :3x3x3))))

    (it "responds to invalid move"
      (with-in-str "a\n2\n"
        (sut/get-user-move board/starting-board-3x3 :X :3x3))
      (should-have-invoked :output/invalid-response)
      (should-have-invoked :output/player-prompt-3x3 {:times 2}))

    (it "accepts leading and trailing whitespace"
      (let [test-board board/starting-board-3x3]
        (with-in-str " 1\n"
          (should= [0 0] (sut/get-user-move test-board :X :3x3)))))
    )

  (context "valid input"

    (it "returns true when grid point is empty"
      (let [test-board [[\space :X :O]
                        [:X \space \space]
                        [:O :X \space]]]
        (should (board/space-available? test-board [0 0]))
        (should (board/space-available? test-board [2 2]))
        (should (board/space-available? test-board [1 1]))
        (should (board/space-available? test-board [1 2]))))

    (it "returns false when grid point is taken"
      (let [test-board [[\space :X :O]
                        [:X \space \space]
                        [:O :X \space]]]
        (should-not (board/space-available? test-board [0 1]))
        (should-not (board/space-available? test-board [0 2]))
        (should-not (board/space-available? test-board [1 0]))
        (should-not (board/space-available? test-board [2 0]))
        (should-not (board/space-available? test-board [2 1]))))
    )
  )