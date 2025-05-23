(ns tic-tac-toe.board-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.board :refer :all]))

(describe "tic tac toe"

  (context "board"

    (it "makes a grid for input length"
      (should= [] (make-board 0))

      (should= [[\space]] (make-board 1))

      (should= [[\space \space]
                [\space \space]] (make-board 2))

      (should= [[\space \space \space]
                [\space \space \space]
                [\space \space \space]] (make-board 3))

      (should= [[\space \space \space \space]
                [\space \space \space \space]
                [\space \space \space \space]
                [\space \space \space \space]] (make-board 4))

      )

    )

  )
