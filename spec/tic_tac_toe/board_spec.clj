(ns tic-tac-toe.board-spec
  (:require [tic-tac-toe.board :as sut]
            [speclj.core :refer :all]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.test-boards-spec :as test-board]))

(describe "core functions"

  (context "getting all positions"

    (it "gets all 9 board positions"
      (should= [[0 0] [0 1] [0 2]
                [1 0] [1 1] [1 2]
                [2 0] [2 1] [2 2]]
               (sort sut/all-positions)))
    )

  (context "getting available moves"

    (it "gets one available move"
      (let [test-board
            [[:O :X :O]
             [:X :X :O]
             [:X :O \9]]]
        (should= [[2 2]] (sut/available-moves test-board))))

    (it "gets all available moves"
      (let [test-board
            [[:O :X :O]
             [\4 :X \6]
             [:X :O \9]]]
        (should= [[1 0] [1 2] [2 2]] (sort (sut/available-moves test-board)))))

    (it "does not contain moves that are taken"
      (let [test-board
            [[:O :X :O]
             [\4 :X \6]
             [:X :O \9]]]
        (should-not-contain [0 0] (sut/available-moves test-board))
        (should-not-contain [0 1] (sut/available-moves test-board))
        (should-not-contain [0 2] (sut/available-moves test-board))
        (should-not-contain [1 1] (sut/available-moves test-board))
        (should-not-contain [2 0] (sut/available-moves test-board))
        (should-not-contain [2 1] (sut/available-moves test-board))))
    )

  (context "make-move"

    (it "marks grid with X"
      (let [test-board [[\1 \2 \3]
                        [\4 :X \6]
                        [\7 \8 \9]]
            move       [1 1]]
        (should= test-board (sut/make-move output/starting-board move :X)))

      (let [test-board [[:X \2 \3]
                        [\4 \5 \6]
                        [\7 \8 \9]]
            move       [0 0]]
        (should= test-board (sut/make-move output/starting-board move :X))))

    (it "marks grid with O"
      (let [test-board [[:O \2 \3]
                        [\4 \5 \6]
                        [\7 \8 \9]]
            move       [0 0]]
        (should= test-board (sut/make-move output/starting-board move :O)))

      (let [test-board [[\1 \2 \3]
                        [\4 \5 \6]
                        [\7 \8 :O]]
            move       [2 2]]
        (should= test-board (sut/make-move output/starting-board move :O))))
    )

  (context "draw/tie game"

    (it "returns false when the board has available spaces"
      (should-not (sut/full-board? test-board/not-full-board))
      (should-not (sut/full-board? test-board/winning-col1))
      (should-not (sut/full-board? test-board/winning-row1)))

    (it "returns true when the board is full with no winner"
      (should (sut/full-board? test-board/full-board))
      (should (sut/full-board? test-board/full-board2)))
    )

  (context "rows"

    (it "returns false when no rows have all matching symbols"
      (should-not (sut/three-matches? (first test-board/winning-row1) :O))
      (should-not (sut/three-matches? (nth test-board/winning-row1 2) :O))
      (should-not (sut/three-matches? (second test-board/winning-row2) :O))
      (should-not (sut/three-matches? (nth test-board/winning-row3 1) :X))
      (should-not (sut/three-matches? (nth test-board/winning-row3 2) :X)))

    (it "returns true for a single row of matching symbols"
      (should (sut/three-matches? (first test-board/winning-row1) :X))
      (should (sut/three-matches? (nth test-board/winning-row2 2) :X))
      (should (sut/three-matches? (second test-board/winning-row3) :O)))

    (it "is a winning row"
      (should (sut/winning-row? test-board/winning-row1 :X))
      (should (sut/winning-row? test-board/winning-row2 :X))
      (should (sut/winning-row? test-board/winning-row3 :O)))
    )

  (context "columns"

    (it "returns false when no cols have all matching symbols"
      (should-not (sut/winning-col? test-board/winning-col1 :O))
      (should-not (sut/winning-col? test-board/winning-col2 :O))
      (should-not (sut/winning-col? test-board/winning-col1 :O)))

    (it "is a winning column"
      (should (sut/winning-col? test-board/winning-col1 :X))
      (should (sut/winning-col? test-board/winning-col2 :X))
      (should (sut/winning-col? test-board/winning-col3 :O)))
    )

  (context "diagonals"

    (it "false for same symbol diagonal"
      (should-not (sut/winning-diagonal? test-board/not-full-board :X))
      (should-not (sut/winning-diagonal? test-board/no-winners-board :X))
      (should-not (sut/winning-diagonal? test-board/not-full-board :O))
      (should-not (sut/winning-diagonal? test-board/no-winners-board :O))
      (should-not (sut/winning-diagonal? test-board/diagonal-win1 :O))
      (should-not (sut/winning-diagonal? test-board/diagonal-win3 :X)))

    (it "true for same symbol diagonal"
      (should (sut/winning-diagonal? test-board/diagonal-win1 :X))
      (should (sut/winning-diagonal? test-board/diagonal-win2 :X))
      (should (sut/winning-diagonal? test-board/diagonal-win3 :O))
      (should (sut/winning-diagonal? test-board/diagonal-win4 :O)))
    )

  (context "win?"

    (it "no row, column or diagonal is filled by X"
      (should-not (sut/win? test-board/no-winners-board :X)))

    (it "no row, column or diagonal is filled by O"
      (should-not (sut/win? test-board/no-winners-board :O)))

    (it "a row is filled by same player symbol"
      (should (sut/win? test-board/winning-row1 :X))
      (should (sut/win? test-board/winning-row2 :X))
      (should (sut/win? test-board/winning-row3 :O)))

    (it "a column is filled by same player symbol"
      (should (sut/win? test-board/winning-col1 :X))
      (should (sut/win? test-board/winning-col2 :X))
      (should (sut/win? test-board/winning-col3 :O)))

    (it "a diagonal is filled by same player symbol"
      (should (sut/win? test-board/diagonal-win1 :X))
      (should (sut/win? test-board/diagonal-win2 :X))
      (should (sut/win? test-board/diagonal-win3 :O))
      (should (sut/win? test-board/diagonal-win4 :O)))
    )

  (context "switching player"

    (it "switches from player X to player O"
      (should= :O (sut/switch-player :X)))

    (it "switches from player O to player X"
      (should= :X (sut/switch-player :O)))
    )

  (context "->clean-user-input"

    (it "returns a string with trimmed whitespace"
      (with-in-str "  1  " (should= "1" (sut/->clean-user-input))))

    (it "returns a string in all uppercase"
      (with-in-str "testing" (should= "TESTING" (sut/->clean-user-input))))

    (it "returns a string in all uppercase without whitespace"
      (with-in-str "   testing   " (should= "TESTING" (sut/->clean-user-input))))
    )
  )