(ns tic-tac-toe.board-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.board :as sut]))

(describe "tic tac toe"

  (context "printing"

    (it "prints an empty board"
      (let
        [output
         (str
           "-------------\n"
           "|   |   |   |\n"
           "-------------\n"
           "|   |   |   |\n"
           "-------------\n"
           "|   |   |   |\n"
           "-------------\n")]
        (should= output (with-out-str (sut/print-board sut/starting-board)))))

    (it "prints a board after one move"
      (let
        [board
         (assoc-in sut/starting-board [0 0] \x)
         output
         (str
           "-------------\n"
           "| x |   |   |\n"
           "-------------\n"
           "|   |   |   |\n"
           "-------------\n"
           "|   |   |   |\n"
           "-------------\n")]
        (should= output (with-out-str (sut/print-board board)))))

    (it "prints board when token is in first row"
      (let
        [board
         (assoc-in sut/starting-board [0 2] \x)
         output
         (str
           "-------------\n"
           "|   |   | x |\n"
           "-------------\n"
           "|   |   |   |\n"
           "-------------\n"
           "|   |   |   |\n"
           "-------------\n")]
        (should= output (with-out-str (sut/print-board board)))))

    (it "prints three in a row, down the middle"
      (let
        [board
         (-> sut/starting-board
             (assoc-in [0 1] \o)
             (assoc-in [1 1] \o)
             (assoc-in [2 1] \o))
         output
         (str
           "-------------\n"
           "|   | o |   |\n"
           "-------------\n"
           "|   | o |   |\n"
           "-------------\n"
           "|   | o |   |\n"
           "-------------\n")]
        (should= output (with-out-str (sut/print-board board)))))

    (it "prints three in a row, across the middle row"
      (let
        [board
         (-> sut/starting-board
             (assoc-in [1 0] \o)
             (assoc-in [1 1] \o)
             (assoc-in [1 2] \o))
         output
         (str
           "-------------\n"
           "|   |   |   |\n"
           "-------------\n"
           "| o | o | o |\n"
           "-------------\n"
           "|   |   |   |\n"
           "-------------\n")]
        (should= output (with-out-str (sut/print-board board)))))

    (it "prints a full board"
      (let
        [board
         [[\a \b \c]
          [\d \e \f]
          [\g \h \i]]
         output
         (str
           "-------------\n"
           "| a | b | c |\n"
           "-------------\n"
           "| d | e | f |\n"
           "-------------\n"
           "| g | h | i |\n"
           "-------------\n")]
        (should= output (with-out-str (sut/print-board board)))))

    )

  (context "make-move"

    (it "marks grid with X"

      (let [test-board [
                        [\space \space \space]
                        [\space \X \space]
                        [\space \space \space]]
            move       [1 1]]
        (should= test-board (sut/make-move sut/starting-board move \X)))

      (let [test-board [
                        [\X \space \space]
                        [\space \space \space]
                        [\space \space \space]]
            move       [0 0]]
        (should= test-board (sut/make-move sut/starting-board move \X)))

      )

    (it "marks grid with O"

      (let [test-board [
                        [\O \space \space]
                        [\space \space \space]
                        [\space \space \space]]
            move       [0 0]]
        (should= test-board (sut/make-move sut/starting-board move \O)))

      (let [test-board [
                        [\space \space \space]
                        [\space \space \space]
                        [\space \space \O]]
            move       [2 2]]
        (should= test-board (sut/make-move sut/starting-board move \O)))

      )

    (it "prints invalid response"

      (let
        [output
         (str
           "Please enter valid move as two numbers between 0 and 2\n")]
        (should= output (with-out-str (sut/invalid-response)))))

    )

  (context "parse-user-input"

    (it "parses '0 1' into [0 1]"

      (should= [0 1] (sut/parse-user-input "0 1")))

    (it "parses '2 2' into [2 2]"

      (should= [2 2] (sut/parse-user-input "2 2")))

    )

  (context "get-user-move"

    (it "parses input from the console"

      (let [test-board [
                        [\space \space \space]
                        [\space \space \space]
                        [\space \space \space]]] (with-in-str "1 0\n"
                                                              (should= [1 0] (sut/get-user-move test-board)))

                                                 (with-in-str "2 2\n"
                                                              (should= [2 2] (sut/get-user-move test-board))))

      )

    )

  (context "valid input"

    (it "returns false for no input"

      (should= false (sut/valid-move-count? nil))
      (should= false (sut/valid-move-count? []))
      )

    (it "returns false for one input value"

      (should= false (sut/valid-move-count? [1]))
      (should= false (sut/valid-move-count? [2]))
      )

    (it "returns true for input count of two"

      (should= true (sut/valid-move-count? [1 2]))
      (should= true (sut/valid-move-count? [0 1]))
      )


    (it "returns false for number of inputs greater than two"

      (should= false (sut/valid-move-count? [0 1 1]))
      (should= false (sut/valid-move-count? [0 1 2 2]))
      (should= false (sut/valid-move-count? [0 1 2 2 1]))
      )

    (it "returns false when digits are out of range of game grid"

      (should= false (sut/valid-integer? [-1 -1]))
      (should= false (sut/valid-integer? [3 1]))
      (should= false (sut/valid-integer? [1 3]))
      (should= false (sut/valid-integer? [3 4]))
      )

    (it "returns true when digits are in range of game grid"

      (should= true (sut/valid-integer? [0 0]))
      (should= true (sut/valid-integer? [1 2]))
      (should= true (sut/valid-integer? [2 1]))
      )

    (it "returns true when grid point is empty"

      (let [test-board [
                        [\space \X \O]
                        [\X \space \space]
                        [\O \X \space]]]
        (should= true (sut/space-available? test-board [0 0]))
        (should= true (sut/space-available? test-board [2 2]))
        (should= true (sut/space-available? test-board [1 1]))
        (should= true (sut/space-available? test-board [1 2]))
        )

      )

    (it "returns false when grid point is taken"

      (let [test-board [
                        [\space \X \O]
                        [\X \space \space]
                        [\O \X \space]]]
        (should= false (sut/space-available? test-board [0 1]))
        (should= false (sut/space-available? test-board [0 2]))
        (should= false (sut/space-available? test-board [1 0]))
        (should= false (sut/space-available? test-board [2 0]))
        (should= false (sut/space-available? test-board [2 1]))
        )

      )

    )

  )

