(ns tic-tac-toe.game-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.game :as sut]))

(def no-winners-board
  [[\X \space \X]
   [\O \O \space]
   [\space \space \space]])

(def winning-row1
  [[\X \X \X]
   [\O \O \space]
   [\O \space \space]])

(def winning-row2
  [[\O \O \space]
   [\O \space \space]
   [\X \X \X]])

(def winning-row3
  [[\X \X \space]
   [\O \O \O]
   [\X \space \X]])

(def winning-col1
  [[\X \O \space]
   [\X \O \O]
   [\X \space \X]])

(def winning-col2
  [[\space \O \X]
   [\O \O \X]
   [\X \space \X]])

(def winning-col3
  [[\X \O \X]
   [\space \O \space]
   [\X \O \space]])

(def not-full-board
  [[\X \O \X]
   [\space \space \O]
   [\X \O \space]])

(def full-board
  [[\X \X \O]
   [\O \O \X]
   [\X \O \X]])

(def full-board2
  [[\O \X \O]
   [\O \X \X]
   [\X \O \X]])

(def diagonal-win1
  [[\X \O \O]
   [\O \X \X]
   [\X \O \X]])

(def diagonal-win2
  [[\X \O \X]
   [\O \X \X]
   [\X \O \O]])

(def diagonal-win3
  [[\X \space \O]
   [\O \O \X]
   [\O \X \X]])

(def diagonal-win4
  [[\O \space \X]
   [\X \O \X]
   [\X \O \O]])


(describe "game conditions"

  (context "switching player"

    (it "switches from player X to player O"

      (should= \O (sut/switch-player \X)))

    (it "switches from player O to player X"

      (should= \X (sut/switch-player \O)))

    )

  (context "draw/tie game"

    (it "returns false when the board has available spaces"

      (should= false (sut/full-board? not-full-board))
      (should= false (sut/full-board? winning-col1))
      (should= false (sut/full-board? winning-row1))
      )

    (it "returns true when the board is full with no winner"

      (should= true (sut/full-board? full-board))
      (should= true (sut/full-board? full-board2))
      )

    )

  (context "rows"

    (it "returns false when no rows have all matching symbols"

      (should= false (sut/three-matches? (first winning-row1) \O))
      (should= false (sut/three-matches? (nth winning-row1 2) \O))
      (should= false (sut/three-matches? (second winning-row2) \O))
      (should= false (sut/three-matches? (nth winning-row3 1) \X))
      (should= false (sut/three-matches? (nth winning-row3 2) \X))
      )

    (it "returns true for a single row of matching symbols"

      (should= true (sut/three-matches? (first winning-row1) \X))
      (should= true (sut/three-matches? (nth winning-row2 2) \X))
      (should= true (sut/three-matches? (second winning-row3) \O))
      )

    (it "defines a winning row"

      (should= true (sut/winning-row? winning-row1 \X))
      (should= true (sut/winning-row? winning-row2 \X))
      (should= true (sut/winning-row? winning-row3 \O))
      )

    )

  (context "columns"

    (it "returns false when no cols have all matching symbols"

      (should= false (sut/winning-col? winning-col1 \O))
      (should= false (sut/winning-col? winning-col2 \O))
      (should= false (sut/winning-col? winning-col1 \O))
      )

    (it "defines a winning column"

      (should= true (sut/winning-col? winning-col1 \X))
      (should= true (sut/winning-col? winning-col2 \X))
      (should= true (sut/winning-col? winning-col3 \O))
      )

    )

  (context "diagonals"

    (it "false for same symbol diagonal"

      (should= false (sut/winning-diagonal? not-full-board \X))
      (should= false (sut/winning-diagonal? no-winners-board \X))
      (should= false (sut/winning-diagonal? not-full-board \O))
      (should= false (sut/winning-diagonal? no-winners-board \O))
      (should= false (sut/winning-diagonal? diagonal-win1 \O))
      (should= false (sut/winning-diagonal? diagonal-win3 \X))
      )

    (it "true for same symbol diagonal"

      (should= true (sut/winning-diagonal? diagonal-win1 \X))
      (should= true (sut/winning-diagonal? diagonal-win2 \X))
      (should= true (sut/winning-diagonal? diagonal-win3 \O))
      (should= true (sut/winning-diagonal? diagonal-win4 \O))
      )

    )

  (context "win?"

    (it "returns false if no row, column or diagonal is filled by same player symbol"

      (should= false (sut/win? no-winners-board \X))
      (should= false (sut/win? no-winners-board \O))
      )

    (it "returns true if a row, column or diagonal is filled by same player symbol"

      (should= true (sut/win? winning-row1 \X))
      (should= true (sut/win? winning-row2 \X))
      (should= true (sut/win? winning-row3 \O))
      (should= true (sut/win? winning-col1 \X))
      (should= true (sut/win? winning-col2 \X))
      (should= true (sut/win? winning-col3 \O))
      (should= true (sut/win? diagonal-win1 \X))
      (should= true (sut/win? diagonal-win2 \X))
      (should= true (sut/win? diagonal-win3 \O))
      (should= true (sut/win? diagonal-win4 \O))
      )

    )

  (context "game-over?"

    (it "returns false if there is no winners"

      (should= false (sut/game-over? no-winners-board \X))
      (should= false (sut/game-over? no-winners-board \O))
      )

    (it "returns true if there is a winner"

      (should= true (sut/game-over? winning-col1 \X))
      (should= true (sut/game-over? winning-col2 \X))
      (should= true (sut/game-over? winning-col3 \O))
      (should= true (sut/game-over? winning-row1 \X))
      (should= true (sut/game-over? winning-row3 \O))
      (should= true (sut/game-over? diagonal-win1 \X))
      (should= true (sut/game-over? diagonal-win2 \X))
      (should= true (sut/game-over? diagonal-win3 \O))
      (should= true (sut/game-over? diagonal-win4 \O))
      )

    )

  )
