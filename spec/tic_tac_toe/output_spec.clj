(ns tic-tac-toe.output-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.output :as sut]))

(describe "console output messages"

  (context "greeting"

    (it "returns correct greeting message"
      (let [output (str "Welcome to Tic Tac Toe\n"
                        "Select position for symbol 1-9\n")]
        (should= output (with-out-str (sut/greeting)))))

    (it "player prompt test"
      (let [output (str "Player X Enter your move 1-9\n")]
        (should= output (with-out-str (sut/player-prompt \X)))))
    )

  (context "board output"

    (it "prints an empty board"
      (let [output (str "-------------\n"
                        "| 1 | 2 | 3 |\n"
                        "-------------\n"
                        "| 4 | 5 | 6 |\n"
                        "-------------\n"
                        "| 7 | 8 | 9 |\n"
                        "-------------\n")]
        (should= output (with-out-str (sut/print-board sut/starting-board)))))

    (it "prints a board after one move"
      (let [board  (assoc-in sut/starting-board [0 0] \X)
            output (str "-------------\n"
                        "| X | 2 | 3 |\n"
                        "-------------\n"
                        "| 4 | 5 | 6 |\n"
                        "-------------\n"
                        "| 7 | 8 | 9 |\n"
                        "-------------\n")]
        (should= output (with-out-str (sut/print-board board)))))

    (it "prints board when token is in first row"
      (let [board  (assoc-in sut/starting-board [0 2] \x)
            output (str "-------------\n"
                        "| 1 | 2 | x |\n"
                        "-------------\n"
                        "| 4 | 5 | 6 |\n"
                        "-------------\n"
                        "| 7 | 8 | 9 |\n"
                        "-------------\n")]
        (should= output (with-out-str (sut/print-board board)))))

    (it "prints three in a row, down the middle"
      (let [board  (-> sut/starting-board (assoc-in [0 1] \o)
                       (assoc-in [1 1] \o)
                       (assoc-in [2 1] \o))
            output (str "-------------\n"
                        "| 1 | o | 3 |\n"
                        "-------------\n"
                        "| 4 | o | 6 |\n"
                        "-------------\n"
                        "| 7 | o | 9 |\n"
                        "-------------\n")]
        (should= output (with-out-str (sut/print-board board)))))

    (it "prints three in a row, across the middle row"
      (let [board  (-> sut/starting-board
                       (assoc-in [1 0] \o)
                       (assoc-in [1 1] \o)
                       (assoc-in [1 2] \o))
            output (str "-------------\n"
                        "| 1 | 2 | 3 |\n"
                        "-------------\n"
                        "| o | o | o |\n"
                        "-------------\n"
                        "| 7 | 8 | 9 |\n"
                        "-------------\n")]
        (should= output (with-out-str (sut/print-board board)))))

    (it "prints a full board"
      (let [board  [[\1 \2 \3]
                    [\4 \5 \6]
                    [\7 \8 \9]]
            output (str "-------------\n"
                        "| 1 | 2 | 3 |\n"
                        "-------------\n"
                        "| 4 | 5 | 6 |\n"
                        "-------------\n"
                        "| 7 | 8 | 9 |\n"
                        "-------------\n")]
        (should= output (with-out-str (sut/print-board board)))))

    )

  (context "validity"

    (it "prints invalid input message"
      (let [output (str "Invalid Move. Try again\n")]
        (should= output (with-out-str (sut/invalid-response)))))

    )

  (context "game-over"

    (it "returns winner message for X"
      (let [board  [[\X \X \X]
                    [\O \O \6]
                    [\7 \8 \9]]
            output (str "X wins!\n"
                        "-------------\n"
                        "| X | X | X |\n"
                        "-------------\n"
                        "| O | O | 6 |\n"
                        "-------------\n"
                        "| 7 | 8 | 9 |\n"
                        "-------------\n")]
        (should= output (with-out-str (sut/winner-message board \X)))))

    (it "returns winner message for O"
      (let [board  [[\X \X \3]
                    [\O \O \O]
                    [\X \8 \9]]
            output (str "O wins!\n"
                        "-------------\n"
                        "| X | X | 3 |\n"
                        "-------------\n"
                        "| O | O | O |\n"
                        "-------------\n"
                        "| X | 8 | 9 |\n"
                        "-------------\n")]
        (should= output (with-out-str (sut/winner-message board \O)))))

    (it "returns draw message"
      (let [board  [[\X \X \O]
                    [\O \O \X]
                    [\X \O \X]]
            output (str "It's a tie!\n"
                        "-------------\n"
                        "| X | X | O |\n"
                        "-------------\n"
                        "| O | O | X |\n"
                        "-------------\n"
                        "| X | O | X |\n"
                        "-------------\n")]
        (should= output (with-out-str (sut/draw-message board)))))
    )

  )
