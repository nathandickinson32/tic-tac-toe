(ns tic-tac-toe.output-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.output :as sut]))

(describe "console output messages"

  (context "validity"

    (it "prints invalid input message"

      (let [output (str "Invalid Move. Try again\n")]
        (should= output (with-out-str (sut/invalid-response)))
        )

      )

    )

  (context "output message"

    (it "returns correct output message"

      (let [output (str "Welcome to Tic Tac Toe\n"
                        "Select position for symbol 1-9\n"
                        "-------------\n"
                        "| 1 | 2 | 3 |\n"
                        "-------------\n"
                        "| 4 | 5 | 6 |\n"
                        "-------------\n"
                        "| 7 | 8 | 9 |\n"
                        "-------------\n")]
        (should= output (with-out-str (sut/greeting))))

      (let [output (str "Player X Enter your move 1-9\n")]
        (should= output (with-out-str (sut/player-prompt \X))))

      )

    )

  (context "board output"

    (it "prints an empty board"

      (let [output (str "-------------\n"
                        "|   |   |   |\n"
                        "-------------\n"
                        "|   |   |   |\n"
                        "-------------\n"
                        "|   |   |   |\n"
                        "-------------\n")]
        (should= output (with-out-str (sut/print-board sut/starting-board)))))

    (it "prints a board after one move"

      (let [board  (assoc-in sut/starting-board [0 0] \x)
            output (str "-------------\n"
                        "| x |   |   |\n"
                        "-------------\n"
                        "|   |   |   |\n"
                        "-------------\n"
                        "|   |   |   |\n"
                        "-------------\n")]
        (should= output (with-out-str (sut/print-board board)))))

    (it "prints board when token is in first row"

      (let [board  (assoc-in sut/starting-board [0 2] \x)
            output (str "-------------\n"
                        "|   |   | x |\n"
                        "-------------\n"
                        "|   |   |   |\n"
                        "-------------\n"
                        "|   |   |   |\n"
                        "-------------\n")]
        (should= output (with-out-str (sut/print-board board)))))

    (it "prints three in a row, down the middle"

      (let [board  (-> sut/starting-board (assoc-in [0 1] \o)
                       (assoc-in [1 1] \o)
                       (assoc-in [2 1] \o))
            output (str "-------------\n"
                        "|   | o |   |\n"
                        "-------------\n"
                        "|   | o |   |\n"
                        "-------------\n"
                        "|   | o |   |\n"
                        "-------------\n")]
        (should= output (with-out-str (sut/print-board board)))))

    (it "prints three in a row, across the middle row"

      (let [board  (-> sut/starting-board (assoc-in [1 0] \o)
                       (assoc-in [1 1] \o)
                       (assoc-in [1 2] \o))
            output (str "-------------\n"
                        "|   |   |   |\n"
                        "-------------\n"
                        "| o | o | o |\n"
                        "-------------\n"
                        "|   |   |   |\n"
                        "-------------\n")]
        (should= output (with-out-str (sut/print-board board)))))

    (it "prints a full board"

      (let [board  [[\a \b \c]
                    [\d \e \f]
                    [\g \h \i]]
            output (str "-------------\n"
                        "| a | b | c |\n"
                        "-------------\n"
                        "| d | e | f |\n"
                        "-------------\n"
                        "| g | h | i |\n"
                        "-------------\n")]
        (should= output (with-out-str (sut/print-board board)))))

    )

  )
