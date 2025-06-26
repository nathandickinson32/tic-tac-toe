(ns tic-tac-toe.output-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.output :as sut]))

(describe "console output messages"

  (context "validity"

    (it "prints invalid input message"
      (let [output (str "Invalid Input. Try again\n")]
        (should= output (with-out-str (sut/invalid-response)))))

    (it "prints invalid input message when choosing a token"
      (let [output (str "Invalid Input. Please enter X or O.\n")]
        (should= output (with-out-str (sut/invalid-token-response)))))

    (it "prints invalid input message when choosing a board size"
      (let [output (str "Invalid Input. Please enter 3 or 4.\n")]
        (should= output (with-out-str (sut/invalid-board-size-response)))))
    )

  (context "greeting"

    (it "returns correct greeting message"
      (let [output (str "Welcome to Tic Tac Toe!\n")]
        (should= output (with-out-str (sut/greeting)))))
    )

  (context "when building a game state"

    (it "asks the user what board size they want to play on"
      (let [output (str "Choose a board size:\n3 (3x3)\n4 (4x4)\n")]
        (should= output (with-out-str (sut/choose-board-size)))))

    (it "asks the user to choose a player type"
      (let [output (str "Choose a player:\n1 Human\n2 Easy-AI\n3 Medium-Difficulty-AI\n4 Expert-AI\n")]
        (should= output (with-out-str (sut/choose-player)))))

    (it "asks the user to choose a token"
      (let [output (str "Choose their token: X or O\n")]
        (should= output (with-out-str (sut/choose-token)))))

    (it "asks the user to choose first player"
      (let [output "Who will play first?\n"]
        (should= output (with-out-str (sut/choose-first-player)))))
    )

  (context "when asking a human player for their move"

    (it "player prompt test"
      (let [output (str "Player X Enter your move 1-9\n")]
        (should= output (with-out-str (sut/player-prompt :X)))))
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
      (with-redefs [sut/colorize-token identity]
        (let [board  (assoc-in sut/starting-board [0 0] \X)
              output (str "-------------\n"
                          "| X | 2 | 3 |\n"
                          "-------------\n"
                          "| 4 | 5 | 6 |\n"
                          "-------------\n"
                          "| 7 | 8 | 9 |\n"
                          "-------------\n")]
          (should= output (with-out-str (sut/print-board board))))))

    (it "prints board when token is in first row"
      (let [board  (assoc-in sut/starting-board [0 2] \X)
            output (str "-------------\n"
                        "| 1 | 2 | X |\n"
                        "-------------\n"
                        "| 4 | 5 | 6 |\n"
                        "-------------\n"
                        "| 7 | 8 | 9 |\n"
                        "-------------\n")]
        (should= output (with-out-str (sut/print-board board)))))

    (it "prints three in a row, down the middle"
      (let [board  (-> sut/starting-board (assoc-in [0 1] \O)
                       (assoc-in [1 1] \O)
                       (assoc-in [2 1] \O))
            output (str "-------------\n"
                        "| 1 | O | 3 |\n"
                        "-------------\n"
                        "| 4 | O | 6 |\n"
                        "-------------\n"
                        "| 7 | O | 9 |\n"
                        "-------------\n")]
        (should= output (with-out-str (sut/print-board board)))))

    (it "prints three in a row, across the middle row"
      (let [board  (-> sut/starting-board
                       (assoc-in [1 0] \O)
                       (assoc-in [1 1] \O)
                       (assoc-in [1 2] \O))
            output (str "-------------\n"
                        "| 1 | 2 | 3 |\n"
                        "-------------\n"
                        "| O | O | O |\n"
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

  (context "game-over"

    (it "returns winner message for X"
      (let [output (str sut/green "X" sut/reset " wins!\n")]
        (with-redefs [sut/print-board (fn [_] nil)]
          (should= output (with-out-str (sut/winner-message nil :X))))))

    (it "returns winner message for O"
      (let [output (str sut/red "O" sut/reset " wins!\n")]
        (with-redefs [sut/print-board (fn [_] nil)]
          (should= output (with-out-str (sut/winner-message nil :O))))))

    (it "returns draw message"
      (with-redefs [sut/colorize-token identity]
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
          (should= output (with-out-str (sut/draw-message board))))))
    )

  (context "colors"

    (it "colors red"
      (should= "\u001b[31m" sut/red))

    (it "colors green"
      (should= "\u001B[32m" sut/green))

    (it "resets the color"
      (should= "\u001B[0m" sut/reset))
    )

  (context "when printing the tokens"

    (it "prints X token in green"
      (should= (str sut/green "X" sut/reset) (sut/colorize-token :X)))

    (it "prints O token in red"
      (should= (str sut/red "O" sut/reset) (sut/colorize-token :O)))
    )

  (context "play again?"

    (it "asks the user if they want to play again"
      (let [output (str "Would you like to play again? Y/N\n")]
        (should= output (with-out-str (sut/play-again?)))))
    )

  )