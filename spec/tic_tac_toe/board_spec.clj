(ns tic-tac-toe.board-spec
  (:require [tic-tac-toe.board :as sut]
            [speclj.core :refer :all]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.test-boards-3x3-spec :as test-board-3x3]))

(describe "board conditions"

  (context "getting all positions"

    (it "gets all 9 board positions for 3x3 board"
      (should= [[0 0] [0 1] [0 2]
                [1 0] [1 1] [1 2]
                [2 0] [2 1] [2 2]]
               (sort sut/all-positions-3x3)))

    (it "gets all 16 board positions for 4x4 board"
      (should= [[0 0] [0 1] [0 2] [0 3]
                [1 0] [1 1] [1 2] [1 3]
                [2 0] [2 1] [2 2] [2 3]
                [3 0] [3 1] [3 2] [3 3]]
               (sort sut/all-positions-4x4)))
    )

  (context "getting available 3x3 moves"

    (it "gets all positions when board-size is 3x3"
      (should= sut/all-positions-3x3 (sut/->positions-by-board-size :3x3)))

    (it "gets one available move 3x3"
      (let [test-board
            [[:O :X :O]
             [:X :X :O]
             [:X :O \9]]]
        (should= [[2 2]] (sut/available-moves test-board :3x3))))

    (it "gets all available moves for 3x3"
      (let [test-board
            [[:O :X :O]
             [\4 :X \6]
             [:X :O \9]]]
        (should= [[1 0] [1 2] [2 2]] (sort (sut/available-moves test-board :3x3)))))

    (it "does not contain moves that are taken for 3x3"
      (let [test-board
            [[:O :X :O]
             [\4 :X \6]
             [:X :O \9]]]
        (should-not-contain [0 0] (sut/available-moves test-board :3x3))
        (should-not-contain [0 1] (sut/available-moves test-board :3x3))
        (should-not-contain [0 2] (sut/available-moves test-board :3x3))
        (should-not-contain [1 1] (sut/available-moves test-board :3x3))
        (should-not-contain [2 0] (sut/available-moves test-board :3x3))
        (should-not-contain [2 1] (sut/available-moves test-board :3x3))))
    )

  (context "getting available 4x4 moves"

    (it "gets all positions when board-size is 4x4"
      (should= sut/all-positions-4x4 (sut/->positions-by-board-size :4x4)))

    (it "gets one available move 4x4"
      (let [test-board
            [[:O :X :O :X]
             [:X :X :O :X]
             [:X :O :O :O]
             [:O :X :O "16"]]]
        (should= [[3 3]] (sut/available-moves test-board :4x4))))

    (it "gets all available moves for 4x4"
      (let [test-board
            [[:O \2 :O :X]
             [\5 :X :O :X]
             [:X :O "11" :O]
             [:O :X :O "16"]]]
        (should= [[0 1] [1 0] [2 2] [3 3]] (sort (sut/available-moves test-board :4x4)))))

    (it "does not contain moves that are taken for 3x3"
      (let [test-board
            [[:O "2" "3" :X]
             ["5" "6" "7" "8"]
             ["9" "10" "11" "12"]
             [:O "14" "15" :X]]]
        (should-not-contain [0 0] (sut/available-moves test-board :4x4))
        (should-not-contain [0 3] (sut/available-moves test-board :4x4))
        (should-not-contain [3 0] (sut/available-moves test-board :4x4))
        (should-not-contain [3 3] (sut/available-moves test-board :4x4)))
      )
    )

  (context "make-move"

    (it "marks grid with X"
      (let [test-board [[\1 \2 \3]
                        [\4 :X \6]
                        [\7 \8 \9]]
            move       [1 1]]
        (should= test-board (sut/make-move output/starting-board-3x3 move :X)))

      (let [test-board [[:X \2 \3]
                        [\4 \5 \6]
                        [\7 \8 \9]]
            move       [0 0]]
        (should= test-board (sut/make-move output/starting-board-3x3 move :X))))

    (it "marks grid with O"
      (let [test-board [[:O \2 \3]
                        [\4 \5 \6]
                        [\7 \8 \9]]
            move       [0 0]]
        (should= test-board (sut/make-move output/starting-board-3x3 move :O)))

      (let [test-board [[\1 \2 \3]
                        [\4 \5 \6]
                        [\7 \8 :O]]
            move       [2 2]]
        (should= test-board (sut/make-move output/starting-board-3x3 move :O))))
    )

  (context "draw/tie game"

    (it "returns false when the board has available spaces"
      (should-not (sut/full-board? test-board-3x3/next-move-wins-X-O))
      (should-not (sut/full-board? test-board-3x3/left-winning-col-X))
      (should-not (sut/full-board? test-board-3x3/top-winning-row-X)))

    (it "returns true when the board is full with no winner"
      (should (sut/full-board? test-board-3x3/full-board))
      (should (sut/full-board? test-board-3x3/full-board2)))
    )

  (context "rows"

    (it "returns false when no rows have all matching symbols"
      (should-not (sut/all-matching-tokens? (first test-board-3x3/top-winning-row-X) :O))
      (should-not (sut/all-matching-tokens? (nth test-board-3x3/top-winning-row-X 2) :O))
      (should-not (sut/all-matching-tokens? (second test-board-3x3/bottom-winning-row-X) :O))
      (should-not (sut/all-matching-tokens? (nth test-board-3x3/middle-winning-row-O 1) :X))
      (should-not (sut/all-matching-tokens? (nth test-board-3x3/middle-winning-row-O 2) :X)))

    (it "returns true for a single row of matching symbols"
      (should (sut/all-matching-tokens? (first test-board-3x3/top-winning-row-X) :X))
      (should (sut/all-matching-tokens? (nth test-board-3x3/bottom-winning-row-X 2) :X))
      (should (sut/all-matching-tokens? (second test-board-3x3/middle-winning-row-O) :O)))

    (it "is a winning row"
      (should (sut/winning-row? test-board-3x3/top-winning-row-X :X))
      (should (sut/winning-row? test-board-3x3/bottom-winning-row-X :X))
      (should (sut/winning-row? test-board-3x3/middle-winning-row-O :O)))
    )

  (context "columns"

    (it "returns false when no cols have all matching symbols"
      (should-not (sut/winning-col? test-board-3x3/left-winning-col-X :O))
      (should-not (sut/winning-col? test-board-3x3/right-winning-col-X :O))
      (should-not (sut/winning-col? test-board-3x3/left-winning-col-X :O)))

    (it "is a winning column"
      (should (sut/winning-col? test-board-3x3/left-winning-col-X :X))
      (should (sut/winning-col? test-board-3x3/right-winning-col-X :X))
      (should (sut/winning-col? test-board-3x3/middle-winning-col-O :O)))
    )

  (context "diagonals"

    (it "false for same symbol diagonal"
      (should-not (sut/winning-diagonal? test-board-3x3/next-move-wins-X-O :X))
      (should-not (sut/winning-diagonal? test-board-3x3/no-winners-board :X))
      (should-not (sut/winning-diagonal? test-board-3x3/next-move-wins-X-O :O))
      (should-not (sut/winning-diagonal? test-board-3x3/no-winners-board :O))
      (should-not (sut/winning-diagonal? test-board-3x3/diagonal-dright-win-X :O))
      (should-not (sut/winning-diagonal? test-board-3x3/diagonal-dleft-win-O :X)))

    (it "true for same symbol diagonal"
      (should (sut/winning-diagonal? test-board-3x3/diagonal-dright-win-X :X))
      (should (sut/winning-diagonal? test-board-3x3/diagonal-dleft-win-X :X))
      (should (sut/winning-diagonal? test-board-3x3/diagonal-dleft-win-O :O))
      (should (sut/winning-diagonal? test-board-3x3/diagonal-dright-win-O :O)))
    )

  (context "win?"

    (it "no row, column or diagonal is filled by X"
      (should-not (sut/win? test-board-3x3/no-winners-board :X)))

    (it "no row, column or diagonal is filled by O"
      (should-not (sut/win? test-board-3x3/no-winners-board :O)))

    (it "a row is filled by same player symbol"
      (should (sut/win? test-board-3x3/top-winning-row-X :X))
      (should (sut/win? test-board-3x3/bottom-winning-row-X :X))
      (should (sut/win? test-board-3x3/middle-winning-row-O :O)))

    (it "a column is filled by same player symbol"
      (should (sut/win? test-board-3x3/left-winning-col-X :X))
      (should (sut/win? test-board-3x3/right-winning-col-X :X))
      (should (sut/win? test-board-3x3/middle-winning-col-O :O)))

    (it "a diagonal is filled by same player symbol"
      (should (sut/win? test-board-3x3/diagonal-dright-win-X :X))
      (should (sut/win? test-board-3x3/diagonal-dleft-win-X :X))
      (should (sut/win? test-board-3x3/diagonal-dleft-win-O :O))
      (should (sut/win? test-board-3x3/diagonal-dright-win-O :O)))
    )

  (context "switching player"

    (it "switches from player X to player O"
      (should= :O (sut/switch-player :X)))

    (it "switches from player O to player X"
      (should= :X (sut/switch-player :O)))
    )

  (context "game-over?"

    (it "returns false if there is no winners for X"
      (should-not (sut/game-over? test-board-3x3/no-winners-board :X)))

    (it "returns false if there is no winners for O"
      (should-not (sut/game-over? test-board-3x3/no-winners-board :O)))

    (it "returns true if there is a winning row"
      (should (sut/game-over? test-board-3x3/top-winning-row-X :X))
      (should (sut/game-over? test-board-3x3/bottom-winning-row-X :X))
      (should (sut/game-over? test-board-3x3/middle-winning-row-O :O)))

    (it "returns true if there is a winning column"
      (should (sut/game-over? test-board-3x3/left-winning-col-X :X))
      (should (sut/game-over? test-board-3x3/right-winning-col-X :X))
      (should (sut/game-over? test-board-3x3/middle-winning-col-O :O)))

    (it "returns true if there is a winning diagonal"
      (should (sut/game-over? test-board-3x3/diagonal-dright-win-X :X))
      (should (sut/game-over? test-board-3x3/diagonal-dleft-win-X :X))
      (should (sut/game-over? test-board-3x3/diagonal-dleft-win-O :O))
      (should (sut/game-over? test-board-3x3/diagonal-dright-win-O :O)))
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