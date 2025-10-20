(ns tic-tac-toe.boardc-spec
  (:require [speclj.core :refer [it describe context should= should-be-nil should-not-contain should-not should]]
            [tic-tac-toe.boardc :as sut]
            [tic-tac-toe.test-boards-3x3c-spec :as test-board-3x3]
            [tic-tac-toe.test-boards-3x3x3c-spec :as test-board-3x3x3]
            [tic-tac-toe.test-boards-4x4c-spec :as test-board-4x4]))

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

    (it "gets all 27 board positions for 3x3x3 board"
      (should= [[0 0 0] [0 0 1] [0 0 2]
                [0 1 0] [0 1 1] [0 1 2]
                [0 2 0] [0 2 1] [0 2 2]
                [1 0 0] [1 0 1] [1 0 2]
                [1 1 0] [1 1 1] [1 1 2]
                [1 2 0] [1 2 1] [1 2 2]
                [2 0 0] [2 0 1] [2 0 2]
                [2 1 0] [2 1 1] [2 1 2]
                [2 2 0] [2 2 1] [2 2 2]]
               (sort sut/all-positions-3x3x3)))
    )

  (context "when determining what grid positions to get"

    (it "returns 3x3 positions for 3x3 board size"
      (should= sut/str-positions-3x3 (sut/determine-positions :3x3)))

    (it "returns 4x4 positions for 4x4 board size"
      (should= sut/str-positions-4x4 (sut/determine-positions :4x4)))

    (it "returns 3x3x3 positions for 3x3x3 board size"
      (should= sut/str-positions-3x3x3 (sut/determine-positions :3x3x3)))
    )

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

  (context "getting available 3x3 moves"

    (it "gets all positions when board-size is 3x3"
      (should= sut/all-positions-3x3 (sut/->positions-by-board-size :3x3)))

    (it "gets one available move 3x3"
      (let [test-board
            [[:O :X :O]
             [:X :X :O]
             [:X :O "9"]]]
        (should= [[2 2]] (sut/available-moves test-board :3x3))))

    (it "gets all available moves for 3x3"
      (let [test-board
            [[:O :X :O]
             ["4" :X "6"]
             [:X :O "9"]]]
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
            [[:O "2" :O :X]
             ["5" :X :O :X]
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
        (should-not-contain [3 3] (sut/available-moves test-board :4x4))))
    )

  (context "getting available 3x3x3 moves"

    (it "gets all positions when board-size is 3x3x3"
      (should= sut/all-positions-3x3x3 (sut/->positions-by-board-size :3x3x3)))

    (it "gets one available move 3x3x3"
      (let [test-board
            [[[:O :X :O]
              [:X :X :O]
              [:X :O "9"]]

             [[:O :X :O]
              [:X :X :O]
              [:X :O :X]]

             [[:O :X :O]
              [:X :X :O]
              [:X :O :X]]]]
        (should= [[0 2 2]] (sut/available-moves test-board :3x3x3))))

    (it "gets all available moves for 3x3x3"
      (let [test-board
            [[[:O :X :O]
              ["4" :X "6"]
              [:X :O "9"]]

             [[:O :X :O]
              [:O :X "15"]
              [:X :O :X]]

             [[:O :X :O]
              [:O :X "24"]
              [:X :O "27"]]]]
        (should= [[0 1 0] [0 1 2] [0 2 2]
                  [1 1 2] [2 1 2] [2 2 2]] (sort (sut/available-moves test-board :3x3x3)))))

    (it "does not contain moves that are taken for 3x3x3"
      (let [test-board
            [[[:X "2" "3"]
              ["4" "5" "6"]
              [:X "8" :O]]

             [["10" "11" "12"]
              ["13" "14" "15"]
              [:X "17" :O]]

             [["19" "20" "21"]
              ["22" "23" "24"]
              [:X "26" :O]]]]
        (should-not-contain [0 0 0] (sut/available-moves test-board :3x3x3))
        (should-not-contain [0 2 0] (sut/available-moves test-board :3x3x3))
        (should-not-contain [0 2 2] (sut/available-moves test-board :3x3x3))
        (should-not-contain [1 2 0] (sut/available-moves test-board :3x3x3))
        (should-not-contain [1 2 2] (sut/available-moves test-board :3x3x3))
        (should-not-contain [2 2 0] (sut/available-moves test-board :3x3x3))
        (should-not-contain [2 2 2] (sut/available-moves test-board :3x3x3))))
    )

  (context "make-move"

    (it "marks 3x3 grid with X"
      (let [test-board [["1" "2" "3"]
                        ["4" :X "6"]
                        ["7" "8" "9"]]
            move       [1 1]]
        (should= test-board (sut/make-move sut/starting-board-3x3 move :X))))

    (it "marks 3x3 grid with O"
      (let [test-board [[:O "2" "3"]
                        ["4" "5" "6"]
                        ["7" "8" "9"]]
            move       [0 0]]
        (should= test-board (sut/make-move sut/starting-board-3x3 move :O))))

    (it "marks 4x4 grid with X"
      (let [test-board [["1" "2" "3" "4"]
                        ["5" "6" "7" "8"]
                        ["9" "10" "11" "12"]
                        ["13" "14" "15" :X]]
            move       [3 3]]
        (should= test-board (sut/make-move sut/starting-board-4x4 move :X))))

    (it "marks 4x4 grid with O"
      (let [test-board [[:O "2" "3" "4"]
                        ["5" "6" "7" "8"]
                        ["9" "10" "11" "12"]
                        ["13" "14" "15" "16"]]
            move       [0 0]]
        (should= test-board (sut/make-move sut/starting-board-4x4 move :O))))

    (it "marks 3x3x3 grid with X"
      (let [test-board [[["1" "2" "3"]
                         ["4" :X "6"]
                         ["7" "8" "9"]]

                        [["10" "11" "12"]
                         ["13" "14" "15"]
                         ["16" "17" "18"]]

                        [["19" "20" "21"]
                         ["22" "23" "24"]
                         ["25" "26" "27"]]]
            move       [0 1 1]]
        (should= test-board (sut/make-move sut/starting-board-3x3x3 move :X))))

    (it "marks 3x3x3 grid with O"
      (let [test-board [[[:O "2" "3"]
                         ["4" "5" "6"]
                         ["7" "8" "9"]]

                        [["10" "11" "12"]
                         ["13" "14" "15"]
                         ["16" "17" "18"]]

                        [["19" "20" "21"]
                         ["22" "23" "24"]
                         ["25" "26" "27"]]]
            move       [0 0 0]]
        (should= test-board (sut/make-move sut/starting-board-3x3x3 move :O))))
    )

  (context "draw/tie game"

    (it "returns false when the 3x3 board has available spaces"
      (should-not (sut/full-board? test-board-3x3/next-move-wins-X-O :3x3))
      (should-not (sut/full-board? test-board-3x3/left-winning-col-X :3x3))
      (should-not (sut/full-board? test-board-3x3/top-winning-row-X :3x3)))

    (it "returns true when the 3x3 board is full with no winner"
      (should (sut/full-board? test-board-3x3/full-board :3x3))
      (should (sut/full-board? test-board-3x3/full-board2 :3x3)))

    (it "returns false when the 4x4 board has available spaces"
      (should-not (sut/full-board? test-board-4x4/test-starting-board-4x4 :4x4)))

    (it "returns true when the 4x4 board is full with no winner"
      (should (sut/full-board? test-board-4x4/full-board :4x4)))

    (it "returns false when the 3x3x3 board has available spaces"
      (should-not (sut/full-board? test-board-3x3x3/test-starting-board-3x3x3 :3x3x3)))

    (it "returns true when the 3x3x3 board is full with no winner"
      (should (sut/full-board? test-board-3x3x3/full-board :3x3x3)))
    )

  (context "2d rows"

    (it "returns false when no rows have all matching symbols"
      (should-not (sut/all-matching-tokens? (first test-board-3x3/top-winning-row-X) :O))
      (should-not (sut/all-matching-tokens? (nth test-board-3x3/top-winning-row-X 2) :O))
      (should-not (sut/all-matching-tokens? (second test-board-3x3/bottom-winning-row-X) :O))
      (should-not (sut/all-matching-tokens? (nth test-board-3x3/middle-winning-row-O 1) :X))
      (should-not (sut/all-matching-tokens? (nth test-board-3x3/middle-winning-row-O 2) :X))
      (should-not (sut/all-matching-tokens? (nth test-board-4x4/x-wins-with-1 2) :X)))

    (it "returns true for a single row of matching symbols"
      (should (sut/all-matching-tokens? (first test-board-3x3/top-winning-row-X) :X))
      (should (sut/all-matching-tokens? (nth test-board-3x3/bottom-winning-row-X 2) :X))
      (should (sut/all-matching-tokens? (second test-board-3x3/middle-winning-row-O) :O))
      (should (sut/all-matching-tokens? (first test-board-4x4/x-wins-top-row) :X)))

    (it "is a winning row"
      (should (sut/winning-row-2d? test-board-3x3/top-winning-row-X :X))
      (should (sut/winning-row-2d? test-board-3x3/bottom-winning-row-X :X))
      (should (sut/winning-row-2d? test-board-3x3/middle-winning-row-O :O))
      (should (sut/winning-row-2d? test-board-4x4/x-wins-top-row :X)))
    )

  (context "2d columns"

    (it "returns false when no cols have all matching symbols"
      (should-not (sut/winning-col-2d? test-board-3x3/left-winning-col-X :O))
      (should-not (sut/winning-col-2d? test-board-3x3/right-winning-col-X :O))
      (should-not (sut/winning-col-2d? test-board-3x3/left-winning-col-X :O))
      (should-not (sut/winning-col-2d? test-board-4x4/x-wins-with-1 :O)))

    (it "is a winning column"
      (should (sut/winning-col-2d? test-board-3x3/left-winning-col-X :X))
      (should (sut/winning-col-2d? test-board-3x3/right-winning-col-X :X))
      (should (sut/winning-col-2d? test-board-3x3/middle-winning-col-O :O))
      (should (sut/winning-col-2d? test-board-4x4/x-wins-left-col :X)))
    )

  (context "2d diagonals"

    (it "gets diagonal left for 3x3 board"
      (should= [:X :X :X] (sut/diagonal-right-3x3 test-board-3x3/diagonal-dright-win-X)))

    (it "gets diagonal left for 3x3 board"
      (should= [:O :O :O] (sut/diagonal-left-3x3 test-board-3x3/diagonal-dleft-win-O)))

    (it "gets diagonal left for 4x4 board"
      (should= [:X :X :X :X] (sut/diagonal-right-4x4 test-board-4x4/diagonal-dright-win-X-4x4)))

    (it "gets diagonal left for 4x4 board"
      (should= [:O :O :O :O] (sut/diagonal-left-4x4 test-board-4x4/diagonal-dleft-win-O-4x4)))

    (it "false for not same symbol diagonal 3x3"
      (should-not (sut/winning-diagonal? test-board-3x3/next-move-wins-X-O :X :3x3))
      (should-not (sut/winning-diagonal? test-board-3x3/no-winners-board :X :3x3))
      (should-not (sut/winning-diagonal? test-board-3x3/next-move-wins-X-O :O :3x3))
      (should-not (sut/winning-diagonal? test-board-3x3/no-winners-board :O :3x3))
      (should-not (sut/winning-diagonal? test-board-3x3/diagonal-dright-win-X :O :3x3))
      (should-not (sut/winning-diagonal? test-board-3x3/diagonal-dleft-win-O :X :3x3)))

    (it "true for same symbol diagonal 3x3"
      (should (sut/winning-diagonal? test-board-3x3/diagonal-dright-win-X :X :3x3))
      (should (sut/winning-diagonal? test-board-3x3/diagonal-dleft-win-X :X :3x3))
      (should (sut/winning-diagonal? test-board-3x3/diagonal-dleft-win-O :O :3x3))
      (should (sut/winning-diagonal? test-board-3x3/diagonal-dright-win-O :O :3x3)))

    (it "determines winning diagonal by board size"
      (should (sut/winning-diagonal? test-board-4x4/diagonal-dright-win-X-4x4 :X :4x4)))

    (it "true for same symbol diagonal 4x4"
      (should (sut/winning-diagonal? test-board-4x4/diagonal-dleft-win-O-4x4 :O :4x4)))
    )

  (context "2D win conditions for 3D board"

    (context "3d rows"

      (it "returns false when no rows have all matching symbols"
        (let [board (assoc-in test-board-3x3x3/O-wins-with-27 [2 2 2] :O)]
          (should-not (sut/winning-row-3d? board :X))))

      (it "returns true for a single row of matching symbols in 1st layer"
        (should (sut/winning-row-3d? test-board-3x3x3/x-wins-top-row-top-layer :X)))

      (it "returns true for a single row of matching symbols in 2nd layer"
        (let [board (assoc-in test-board-3x3x3/x-wins-with-14 [1 1 1] :X)]
          (should (sut/winning-row-3d? board :X))))

      (it "returns true for a single row of matching symbols in 3rd layer"
        (let [board (assoc-in test-board-3x3x3/O-wins-with-27 [2 2 2] :O)]
          (should (sut/winning-row-3d? board :O))))
      )

    (context "3d columns"

      (it "returns false when no columns have all matching symbols"
        (let [board (assoc-in test-board-3x3x3/O-wins-with-27 [2 2 2] :O)]
          (should-not (sut/winning-col-3d? board :X))))

      (it "returns true for a single row of matching symbols in 1st layer"
        (let [board (assoc-in test-board-3x3x3/x-wins-top-row-top-layer [1 2 0] :O)]
          (should (sut/winning-col-3d? board :O))))

      (it "returns true for a single row of matching symbols in 2nd layer"
        (let [board (assoc-in test-board-3x3x3/x-wins-with-14 [1 1 1] :X)]
          (should (sut/winning-col-3d? board :X))))

      (it "returns true for a single row of matching symbols in 3rd layer"
        (let [board (assoc-in test-board-3x3x3/O-wins-with-27 [2 0 1] :O)]
          (should (sut/winning-col-3d? board :O))))
      )

    (context "3d diagonals"

      (it "false for not same symbol diagonal"
        (should-not (sut/winning-diagonal-3d? test-board-3x3x3/O-wins-with-27 :O)))

      (it "returns true for diagonal down right of matching symbols in 1st layer"
        (let [board (assoc-in test-board-3x3x3/x-wins-top-row-top-layer [0 2 2] :X)]
          (should (sut/winning-diagonal-3d? board :X))))

      (it "returns true for diagonal down right of matching symbols in 2nd layer"
        (let [board (assoc-in test-board-3x3x3/x-wins-top-row-top-layer [1 2 2] :O)]
          (should (sut/winning-diagonal-3d? board :O))))

      (it "returns true for diagonal down right of matching symbols in 3rd layer"
        (let [board (assoc-in test-board-3x3x3/O-wins-with-27 [2 2 2] :O)]
          (should (sut/winning-diagonal-3d? board :O))))
      )
    )

  (context "wins across 3 dimensions"

    (context "pillar wins"

      (it "false for no winner"
        (let [board test-board-3x3x3/test-starting-board-3x3x3]
          (should-not (sut/winning-line-3d? board :X))))

      (it "X wins top left pillar"
        (let [board test-board-3x3x3/x-wins-pillar-1]
          (should (sut/winning-line-3d? board :X))))

      (it "O wins top middle pillar"
        (let [board [[["1" :O "6"]
                      ["4" "5" "6"]
                      ["7" "8" "9"]]

                     [["10" :O "12"]
                      ["13" "14" "15"]
                      ["16" "17" "18"]]

                     [["19" :O "21"]
                      ["22" "23" "24"]
                      ["25" "26" "27"]]]]
          (should (sut/winning-line-3d? board :O))))

      (it "X wins top right pillar"
        (let [board [[["1" "2" :X]
                      ["4" "5" "6"]
                      ["7" "8" "9"]]

                     [["10" "11" :X]
                      ["13" "14" "15"]
                      ["16" "17" "18"]]

                     [["19" "20" :X]
                      ["22" "23" "24"]
                      ["25" "26" "27"]]]]
          (should (sut/winning-line-3d? board :X))))

      (it "X wins middle left pillar"
        (let [board [[["1" "2" "3"]
                      [:X "5" "6"]
                      ["7" "8" "9"]]

                     [["10" "11" "12"]
                      [:X "14" "15"]
                      ["16" "17" "18"]]

                     [["19" "20" "21"]
                      [:X "23" "24"]
                      ["25" "26" "27"]]]]
          (should (sut/winning-line-3d? board :X))))

      (it "X wins bottom right pillar"
        (let [board [[["1" "2" "3"]
                      ["4" "5" "6"]
                      ["7" "8" :X]]

                     [["10" "11" "12"]
                      ["13" "14" "15"]
                      ["16" "17" :X]]

                     [["19" "20" "21"]
                      ["22" "23" "24"]
                      ["25" "26" :X]]]]
          (should (sut/winning-line-3d? board :X))))
      )

    (context "diagonal wins through middle"

      (it "x wins from [0 0 0]"
        (let [board test-board-3x3x3/x-wins-center-diagR-3d]
          (should (sut/winning-diag-line-3d? board :X))))

      (it "x wins from [0 0 2]"
        (let [board [[["1" "2" :X]
                      ["4" "5" "6"]
                      ["7" "8" "9"]]

                     [["10" "11" "12"]
                      ["13" :X "15"]
                      ["16" "17" "18"]]

                     [["19" "20" "21"]
                      ["22" "23" "24"]
                      [:X "26" "27"]]]]
          (should (sut/winning-diag-line-3d? board :X))))

      (it "x wins from [0 2 0]"
        (let [board [[["1" "2" "3"]
                      ["4" "5" "6"]
                      [:X "8" "9"]]

                     [["10" "11" "12"]
                      ["13" :X "15"]
                      ["16" "17" "18"]]

                     [["19" "20" :X]
                      ["22" "23" "24"]
                      ["25" "26" "27"]]]]
          (should (sut/winning-diag-line-3d? board :X))))

      (it "x wins from [0 2 2]"
        (let [board [[["1" "2" "3"]
                      ["4" "5" "6"]
                      ["7" "8" :X]]

                     [["10" "11" "12"]
                      ["13" :X "15"]
                      ["16" "17" "18"]]

                     [[:X "20" "21"]
                      ["22" "23" "24"]
                      ["25" "26" "27"]]]]
          (should (sut/winning-diag-line-3d? board :X))))
      )

    (context "diagonal wins not through center"

      (it "x wins from [0 0 0]"
        (let [board [[[:X "2" "3"]
                      ["4" "5" "6"]
                      ["7" "8" "9"]]

                     [["10" :X "12"]
                      ["13" "14" "15"]
                      ["16" "17" "18"]]

                     [["19" "20" :X]
                      ["22" "23" "24"]
                      ["25" "26" "27"]]]]
          (should (sut/winning-diag-line-3d? board :X))))

      (it "x wins from [0 0 2]"
        (let [board [[["1" "2" :X]
                      ["4" "5" "6"]
                      ["7" "8" "9"]]

                     [["10" :X "12"]
                      ["13" "14" "15"]
                      ["16" "17" "18"]]

                     [[:X "20" "21"]
                      ["22" "23" "24"]
                      ["25" "26" "27"]]]]
          (should (sut/winning-diag-line-3d? board :X))))

      (it "x wins from x plane diagonal"
        (let [board test-board-3x3x3/x-wins-x-plane-diag-3d]
          (should (sut/winning-diag-line-3d? board :X))))

      (it "x wins from y plane diagonal"
        (let [board test-board-3x3x3/x-wins-y-plane-diag-3d]
          (should (sut/winning-diag-line-3d? board :X))))
      )
    )

  (context "win?"

    (it "no row, column or diagonal is filled by X"
      (should-not (sut/win? test-board-3x3/no-winners-board :X :3x3))
      (should-not (sut/win? test-board-4x4/x-wins-with-1 :X :4x4))
      (should-not (sut/win? test-board-3x3x3/x-wins-with-14 :X :3x3x3)))

    (it "no row, column or diagonal is filled by O"
      (should-not (sut/win? test-board-3x3/no-winners-board :O :3x3))
      (should-not (sut/win? test-board-4x4/x-wins-with-1 :O :4x4))
      (should-not (sut/win? test-board-3x3x3/x-wins-top-row-top-layer :O :3x3x3)))

    (it "a row is filled by same player symbol"
      (should (sut/win? test-board-3x3/top-winning-row-X :X :3x3))
      (should (sut/win? test-board-3x3/bottom-winning-row-X :X :3x3))
      (should (sut/win? test-board-3x3/middle-winning-row-O :O :3x3))
      (should (sut/win? test-board-4x4/x-wins-top-row :X :4x4))
      (should (sut/win? test-board-3x3x3/x-wins-top-row-top-layer :X :3x3x3)))

    (it "a column is filled by same player symbol"
      (should (sut/win? test-board-3x3/left-winning-col-X :X :3x3))
      (should (sut/win? test-board-3x3/right-winning-col-X :X :3x3))
      (should (sut/win? test-board-3x3/middle-winning-col-O :O :3x3))
      (should (sut/win? test-board-4x4/x-wins-left-col :X :4x4))
      (should (sut/win? test-board-3x3x3/O-wins-left-column-middle-layer :O :3x3x3)))

    (it "a diagonal is filled by same player symbol"
      (should (sut/win? test-board-3x3/diagonal-dright-win-X :X :3x3))
      (should (sut/win? test-board-3x3/diagonal-dleft-win-X :X :3x3))
      (should (sut/win? test-board-3x3/diagonal-dleft-win-O :O :3x3))
      (should (sut/win? test-board-3x3/diagonal-dright-win-O :O :3x3))
      (should (sut/win? test-board-4x4/diagonal-dright-win-X-4x4 :X :4x4)))

    (it "checks for 3D wins"
      (should (sut/win? test-board-3x3x3/x-wins-pillar-1 :X :3x3x3))
      (should (sut/win? test-board-3x3x3/x-wins-center-diagR-3d :X :3x3x3))
      (should (sut/win? test-board-3x3x3/x-wins-y-plane-diag-3d :X :3x3x3))
      (should (sut/win? test-board-3x3x3/o-wins-y-plane-diag-3d :O :3x3x3))
      (should (sut/win? test-board-3x3x3/x-wins-x-plane-diag-3d :X :3x3x3))
      (should (sut/win? test-board-3x3x3/o-wins-x-plane-diag-3d :O :3x3x3)))
    )

  (context "switching player"

    (it "switches from player X to player O"
      (should= :O (sut/switch-player :X)))

    (it "switches from player O to player X"
      (should= :X (sut/switch-player :O)))
    )

  (context "game-over?"

    (it "returns false if there is no winners for X"
      (should-not (sut/game-over? test-board-3x3/no-winners-board :X :3x3))
      (should-not (sut/game-over? test-board-4x4/x-wins-with-1 :X :4x4)))

    (it "returns false if there is no winners for O"
      (should-not (sut/game-over? test-board-3x3/no-winners-board :O :3x3))
      (should-not (sut/game-over? test-board-4x4/x-wins-with-1 :O :4x4)))

    (it "returns true if there is a winning row"
      (should (sut/game-over? test-board-3x3/top-winning-row-X :X :3x3))
      (should (sut/game-over? test-board-3x3/bottom-winning-row-X :X :3x3))
      (should (sut/game-over? test-board-3x3/middle-winning-row-O :O :3x3))
      (should (sut/game-over? test-board-4x4/x-wins-top-row :X :4x4)))

    (it "returns true if there is a winning column"
      (should (sut/game-over? test-board-3x3/left-winning-col-X :X :3x3))
      (should (sut/game-over? test-board-3x3/right-winning-col-X :X :3x3))
      (should (sut/game-over? test-board-3x3/middle-winning-col-O :O :3x3))
      (should (sut/game-over? test-board-4x4/x-wins-left-col :X :4x4)))

    (it "returns true if there is a winning diagonal"
      (should (sut/game-over? test-board-3x3/diagonal-dright-win-X :X :3x3))
      (should (sut/game-over? test-board-3x3/diagonal-dleft-win-X :X :3x3))
      (should (sut/game-over? test-board-3x3/diagonal-dleft-win-O :O :3x3))
      (should (sut/game-over? test-board-3x3/diagonal-dright-win-O :O :3x3))
      (should (sut/game-over? test-board-4x4/diagonal-dleft-win-O-4x4 :O :4x4)))
    )
  )