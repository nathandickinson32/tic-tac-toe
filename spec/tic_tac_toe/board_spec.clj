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
        (should= output (with-out-str (sut/print-board sut/start-board)))))

    (it "prints a board after one move"
      (let
        [board
         (assoc-in sut/start-board [0 0] \x)
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
         (assoc-in sut/start-board [0 2] \x)
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
         (-> sut/start-board
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
         (-> sut/start-board
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

  )
