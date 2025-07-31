(ns tic-tac-toe.human-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.human :as sut]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.test-boards-3x3x3-spec :as test-board-3x3]))

(describe "a human player"

  (context "parse-user-input 3x3 board"

    (it "returns nil for 0"
      (should-be-nil (sut/->grid-coordinates "0" :3x3)))

    (it "returns nil for numbers greater than 9"
      (should-be-nil (sut/->grid-coordinates "10" :3x3))
      (should-be-nil (sut/->grid-coordinates "11" :3x3))
      (should-be-nil (sut/->grid-coordinates "201" :3x3)))

    (it "returns nil for strings"
      (should-be-nil (sut/->grid-coordinates "a" :3x3))
      (should-be-nil (sut/->grid-coordinates "asd" :3x3))
      (should-be-nil (sut/->grid-coordinates "a a" :3x3))
      (should-be-nil (sut/->grid-coordinates " " :3x3)))

    (it "returns nil for empty input"
      (should-be-nil (sut/->grid-coordinates "" :3x3)))

    (it "parses input string 1-9 into grid coordinates"
      (should= [0 0] (sut/->grid-coordinates "1" :3x3))
      (should= [0 1] (sut/->grid-coordinates "2" :3x3))
      (should= [0 2] (sut/->grid-coordinates "3" :3x3))
      (should= [1 0] (sut/->grid-coordinates "4" :3x3))
      (should= [1 1] (sut/->grid-coordinates "5" :3x3))
      (should= [1 2] (sut/->grid-coordinates "6" :3x3))
      (should= [2 0] (sut/->grid-coordinates "7" :3x3))
      (should= [2 1] (sut/->grid-coordinates "8" :3x3))
      (should= [2 2] (sut/->grid-coordinates "9" :3x3)))
    )

  (context "parse-user-input 4x4 board"

    (it "returns nil for 0"
      (should-be-nil (sut/->grid-coordinates "0" :4x4)))

    (it "returns nil for numbers greater than 16"
      (should-be-nil (sut/->grid-coordinates "17" :4x4)))

    (it "returns nil for strings"
      (should-be-nil (sut/->grid-coordinates "a" :4x4))
      (should-be-nil (sut/->grid-coordinates "asd" :4x4))
      (should-be-nil (sut/->grid-coordinates "a a" :4x4))
      (should-be-nil (sut/->grid-coordinates " " :4x4)))

    (it "returns nil for empty input"
      (should-be-nil (sut/->grid-coordinates "" :4x4)))

    (it "parses input string 1-16 into grid coordinates"
      (should= [0 0] (sut/->grid-coordinates "1" :4x4))
      (should= [0 1] (sut/->grid-coordinates "2" :4x4))
      (should= [0 2] (sut/->grid-coordinates "3" :4x4))
      (should= [0 3] (sut/->grid-coordinates "4" :4x4))
      (should= [1 0] (sut/->grid-coordinates "5" :4x4))
      (should= [1 1] (sut/->grid-coordinates "6" :4x4))
      (should= [2 2] (sut/->grid-coordinates "11" :4x4))
      (should= [3 3] (sut/->grid-coordinates "16" :4x4)))
    )

  (context "parse-user-input 3x3x3 board"

    (it "returns nil for 0"
      (should-be-nil (sut/->grid-coordinates "0" :3x3x3)))

    (it "returns nil for numbers greater than 27"

      (should-be-nil (sut/->grid-coordinates "28" :3x3x3))
      (should-be-nil (sut/->grid-coordinates "100" :3x3x3)))

    (it "returns nil for letters, symbols and empty"
      (should-be-nil (sut/->grid-coordinates "a" :3x3x3))
      (should-be-nil (sut/->grid-coordinates :a :3x3x3))
      (should-be-nil (sut/->grid-coordinates "a a" :3x3x3))
      (should-be-nil (sut/->grid-coordinates " " :3x3x3))
      (should-be-nil (sut/->grid-coordinates "" :3x3x3)))

    (it "parses input string 1-9 into grid coordinates"
      (should= [0 0 0] (sut/->grid-coordinates "1" :3x3x3))
      (should= [0 1 1] (sut/->grid-coordinates "5" :3x3x3))
      (should= [0 2 2] (sut/->grid-coordinates "9" :3x3x3))
      (should= [1 0 0] (sut/->grid-coordinates "10" :3x3x3))
      (should= [1 1 1] (sut/->grid-coordinates "14" :3x3x3))
      (should= [1 2 2] (sut/->grid-coordinates "18" :3x3x3))
      (should= [2 0 0] (sut/->grid-coordinates "19" :3x3x3))
      (should= [2 1 1] (sut/->grid-coordinates "23" :3x3x3))
      (should= [2 2 2] (sut/->grid-coordinates "27" :3x3x3)))
    )

  (context "get-user-move"
    (with-stubs)

    (redefs-around [output/player-prompt-3x3 (stub :output/player-prompt-3x3)
                    output/player-prompt-4x4 (stub :output/player-prompt-4x4)
                    output/player-prompt-3x3x3 (stub :output/player-prompt-3x3x3)
                    output/invalid-response (stub :output/invalid-response)])

    (it "displays player prompt 3x3"
      (with-in-str "1\n"
        (sut/get-user-move output/starting-board-3x3 :X :3x3))
      (should-have-invoked :output/player-prompt-3x3 {:with [:X]}))

    (it "displays player prompt 4x4"
      (with-in-str "1\n"
        (sut/get-user-move output/starting-board-4x4 :X :4x4))
      (should-have-invoked :output/player-prompt-4x4 {:with [:X]}))

    (it "displays player prompt 3x3x3"
      (with-in-str "1\n"
        (sut/get-user-move output/starting-board-3x3x3 :X :3x3x3))
      (should-have-invoked :output/player-prompt-3x3x3 {:with [:X]}))

    (it "returns [0 0] for 1"
      (let [test-board output/starting-board-3x3]
        (with-in-str "1\n"
          (should= [0 0] (sut/get-user-move test-board :X :3x3)))))

    (it "returns [0 1] for 2"
      (let [test-board output/starting-board-3x3]
        (with-in-str "2\n"
          (should= [0 1] (sut/get-user-move test-board :X :3x3)))
        (should-not-have-invoked :output/invalid-response)))

    (it "4x4 board returns [0 0] for 1"
      (let [test-board output/starting-board-4x4]
        (with-in-str "1\n"
          (should= [0 0] (sut/get-user-move test-board :X :4x4)))))

    (it "4x4 board returns [3 3] for 16"
      (let [test-board output/starting-board-4x4]
        (with-in-str "16\n"
          (should= [3 3] (sut/get-user-move test-board :X :4x4)))))

    (it "4x4 board returns [3 3] for 16"
      (let [test-board output/starting-board-4x4]
        (with-in-str "16\n"
          (should= [3 3] (sut/get-user-move test-board :X :4x4)))))

    (it "3x3x3 board returns [0 0 0] for 1"
      (with-in-str "1\n"
        (should= [0 0 0] (sut/get-user-move output/starting-board-3x3x3 :X :3x3x3))))

    (it "3x3x3 board returns [1 1 1] for 14"
      (with-in-str "14\n"
        (should= [1 1 1] (sut/get-user-move output/starting-board-3x3x3 :X :3x3x3))))

    (it "3x3x3 board returns [2 2 2] for 27"
      (with-in-str "27\n"
        (should= [2 2 2] (sut/get-user-move output/starting-board-3x3x3 :X :3x3x3))))

    (it "responds to invalid move"
      (with-in-str "a\n2\n"
        (sut/get-user-move output/starting-board-3x3 :X :3x3))
      (should-have-invoked :output/invalid-response)
      (should-have-invoked :output/player-prompt-3x3 {:times 2}))

    (it "accepts leading and trailing whitespace"
      (let [test-board output/starting-board-3x3]
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

  (context "when determining what grid positions to get"

    (it "returns 3x3 positions for 3x3 board size"
      (should= sut/single-digit-positions-3x3 (sut/determine-grid-coordinate-size :3x3)))

    (it "returns 4x4 positions for 4x4 board size"
      (should= sut/single-digit-positions-4x4 (sut/determine-grid-coordinate-size :4x4)))

    (it "returns 3x3x3 positions for 3x3x3 board size"
      (should= sut/single-digit-positions-3x3x3 (sut/determine-grid-coordinate-size :3x3x3)))
    )
  )