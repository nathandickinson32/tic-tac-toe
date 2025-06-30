(ns tic-tac-toe.output-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.output :as sut]
            [tic-tac-toe.test-boards-3x3-spec :as test-boards-3x3]
            [tic-tac-toe.test-boards-4x4-spec :as test-boards-4x4]))

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

    (it "returns 3x3 player prompt"
      (let [output (str "Player X Enter your move 1-9\n")]
        (should= output (with-out-str (sut/player-prompt-3x3 :X)))))

    (it "returns 4x4 player prompt"
      (let [output (str "Player X Enter your move 1-16\n")]
        (should= output (with-out-str (sut/player-prompt-4x4 :X)))))
    )

  (context "printing 3x3 formatted boards"

    (it "returns correct starting board for 3x3"
      (should= test-boards-3x3/test-starting-board-3x3 sut/starting-board-3x3))

    (it "prints an empty board"
      (let [output (str "-------------\n"
                        "| 1 | 2 | 3 |\n"
                        "-------------\n"
                        "| 4 | 5 | 6 |\n"
                        "-------------\n"
                        "| 7 | 8 | 9 |\n"
                        "-------------\n")]
        (should= output (with-out-str (sut/print-board-3x3 sut/starting-board-3x3)))))

    (it "prints a 3x3 board after one move"
      (with-redefs [sut/colorize-3x3-token identity]
        (let [board  (assoc-in sut/starting-board-3x3 [0 0] \X)
              output (str "-------------\n"
                          "| X | 2 | 3 |\n"
                          "-------------\n"
                          "| 4 | 5 | 6 |\n"
                          "-------------\n"
                          "| 7 | 8 | 9 |\n"
                          "-------------\n")]
          (should= output (with-out-str (sut/print-board-3x3 board))))))

    (it "prints a 3x3 board when token is in first row"
      (let [board  (assoc-in sut/starting-board-3x3 [0 2] \X)
            output (str "-------------\n"
                        "| 1 | 2 | X |\n"
                        "-------------\n"
                        "| 4 | 5 | 6 |\n"
                        "-------------\n"
                        "| 7 | 8 | 9 |\n"
                        "-------------\n")]
        (should= output (with-out-str (sut/print-board-3x3 board)))))

    (it "prints a 3x3 board with three in a row, down the middle"
      (let [board  (-> sut/starting-board-3x3 (assoc-in [0 1] \O)
                       (assoc-in [1 1] \O)
                       (assoc-in [2 1] \O))
            output (str "-------------\n"
                        "| 1 | O | 3 |\n"
                        "-------------\n"
                        "| 4 | O | 6 |\n"
                        "-------------\n"
                        "| 7 | O | 9 |\n"
                        "-------------\n")]
        (should= output (with-out-str (sut/print-board-3x3 board)))))

    (it "prints a 3x3 board with three in a row, across the middle row"
      (let [board  (-> sut/starting-board-3x3
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
        (should= output (with-out-str (sut/print-board-3x3 board)))))

    (it "prints a full 3x3 board"
      (let [board  [[\X \O \X]
                    [\X \O \O]
                    [\O \X \X]]
            output (str "-------------\n"
                        "| X | O | X |\n"
                        "-------------\n"
                        "| X | O | O |\n"
                        "-------------\n"
                        "| O | X | X |\n"
                        "-------------\n")]
        (should= output (with-out-str (sut/print-board-3x3 board)))))
    )

  (context "printing 4x4 formatted boards"

    (redefs-around [sut/format-4x4-board-space identity])

    (it "returns correct starting board for 4x4"
      (should= test-boards-4x4/test-starting-board-4x4 sut/starting-board-4x4))

    (it "prints an empty board"
      (let [output (str "-----------------------------\n"
                        "|   1  |   2  |   3  |   4  |\n"
                        "-----------------------------\n"
                        "|   5  |   6  |   7  |   8  |\n"
                        "-----------------------------\n"
                        "|   9  |  10  |  11  |  12  |\n"
                        "-----------------------------\n"
                        "|  13  |  14  |  15  |  16  |\n"
                        "-----------------------------\n")]
        (should= output (with-out-str (sut/print-board-4x4 sut/starting-board-4x4)))))

    (it "prints a 4x4 board after one move"
      (let [board  [[\X "2" "3" "4"]
                    ["5" "6" "7" "8"]
                    ["9" "10" "11" "12"]
                    ["13" "14" "15" "16"]]
            output (str "-----------------------------\n"
                        "|   X  |   2  |   3  |   4  |\n"
                        "-----------------------------\n"
                        "|   5  |   6  |   7  |   8  |\n"
                        "-----------------------------\n"
                        "|   9  |  10  |  11  |  12  |\n"
                        "-----------------------------\n"
                        "|  13  |  14  |  15  |  16  |\n"
                        "-----------------------------\n")]
        (should= output (with-out-str (sut/print-board-4x4 board)))))

    (it "prints a 4x4 board when token is in first row"
      (let [board  (assoc-in sut/starting-board-4x4 [0 3] \X)
            output (str "-----------------------------\n"
                        "|   1  |   2  |   3  |   X  |\n"
                        "-----------------------------\n"
                        "|   5  |   6  |   7  |   8  |\n"
                        "-----------------------------\n"
                        "|   9  |  10  |  11  |  12  |\n"
                        "-----------------------------\n"
                        "|  13  |  14  |  15  |  16  |\n"
                        "-----------------------------\n")]
        (should= output (with-out-str (sut/print-board-4x4 board)))))

    (it "prints a 4x4 board with three in a row, down left middle row"
      (let [board  (-> sut/starting-board-4x4 (assoc-in [0 1] \O)
                       (assoc-in [1 1] \O)
                       (assoc-in [2 1] \O)
                       (assoc-in [3 1] \O))
            output (str "-----------------------------\n"
                        "|   1  |   O  |   3  |   4  |\n"
                        "-----------------------------\n"
                        "|   5  |   O  |   7  |   8  |\n"
                        "-----------------------------\n"
                        "|   9  |   O  |  11  |  12  |\n"
                        "-----------------------------\n"
                        "|  13  |   O  |  15  |  16  |\n"
                        "-----------------------------\n")]
        (should= output (with-out-str (sut/print-board-4x4 board)))))

    (it "prints a 4x4 board with three in a row, across the upper middle row"
      (let [board  (-> sut/starting-board-4x4
                       (assoc-in [1 0] \O)
                       (assoc-in [1 1] \O)
                       (assoc-in [1 2] \O)
                       (assoc-in [1 3] \O))
            output (str "-----------------------------\n"
                        "|   1  |   2  |   3  |   4  |\n"
                        "-----------------------------\n"
                        "|   O  |   O  |   O  |   O  |\n"
                        "-----------------------------\n"
                        "|   9  |  10  |  11  |  12  |\n"
                        "-----------------------------\n"
                        "|  13  |  14  |  15  |  16  |\n"
                        "-----------------------------\n")]
        (should= output (with-out-str (sut/print-board-4x4 board)))))

    (it "prints a full 4x4 board"
      (let [board  [[\X \X \X \O]
                    [\O \O \X \O]
                    [\X \X \O \O]
                    [\X \O \O \X]]
            output (str "-----------------------------\n"
                        "|   X  |   X  |   X  |   O  |\n"
                        "-----------------------------\n"
                        "|   O  |   O  |   X  |   O  |\n"
                        "-----------------------------\n"
                        "|   X  |   X  |   O  |   O  |\n"
                        "-----------------------------\n"
                        "|   X  |   O  |   O  |   X  |\n"
                        "-----------------------------\n")]
        (should= output (with-out-str (sut/print-board-4x4 board)))))
    )

  (context "game-over"

    (it "returns winner message for X"
      (let [output (str sut/green "X" sut/reset " wins!\n")]
        (with-redefs [sut/print-board-3x3 (fn [_] nil)]
          (should= output (with-out-str (sut/winner-message :X))))))

    (it "returns winner message for O"
      (let [output (str sut/red "O" sut/reset " wins!\n")]
        (with-redefs [sut/print-board-3x3 (fn [_] nil)]
          (should= output (with-out-str (sut/winner-message :O))))))

    (it "returns draw message"
      (with-redefs [sut/colorize-3x3-token identity]
        (let [output (str "It's a tie!\n")]
          (should= output (with-out-str (sut/draw-message))))))
    )

  (context "colors"

    (it "colors red"
      (should= "\u001b[31m" sut/red))

    (it "colors green"
      (should= "\u001B[32m" sut/green))

    (it "resets the color"
      (should= "\u001B[0m" sut/reset))
    )

  (context "when printing the tokens on 3x3 board"

    (it "prints X token in green"
      (should= (str sut/green "X" sut/reset) (sut/colorize-3x3-token :X)))

    (it "prints O token in red"
      (should= (str sut/red "O" sut/reset) (sut/colorize-3x3-token :O)))
    )

  (context "when printing the tokens on 4x4 board"

    (it "prints padded X token in green"
      (should= (str sut/green "  X" sut/reset) (sut/format-4x4-board-space :X)))

    (it "prints padded X token in green"
      (should= (str sut/red "  O" sut/reset) (sut/format-4x4-board-space :O)))
    )

  (context "when determining what board to print"
    (with-stubs)

    (redefs-around [sut/print-board-3x3 (stub :print-board-3x3)
                    sut/print-board-4x4 (stub :print-board-4x4)])

    (it "calls print-board-3x3 when board-size is 3x3"
      (sut/determine-board-to-print :3x3 sut/starting-board-3x3)
      (should-have-invoked :print-board-3x3 {:with [sut/starting-board-3x3]}))

    (it "calls print-board-4x4 when board-size is 4x4"
      (sut/determine-board-to-print :4x4 sut/starting-board-4x4)
      (should-have-invoked :print-board-4x4 {:with [sut/starting-board-4x4]}))
    )

  (context "when determining what player prompt to print"
    (with-stubs)

    (redefs-around [sut/player-prompt-3x3 (stub :player-prompt-3x3)
                    sut/player-prompt-4x4 (stub :player-prompt-4x4)])

    (it "calls player-prompt-3x3 when board-size is 3x3"
      (sut/determine-player-prompt-to-print :3x3 :X)
      (should-have-invoked :player-prompt-3x3 {:with [:X]}))

    (it "calls player-prompt-4x4 when board-size is 4x4"
      (sut/determine-player-prompt-to-print :4x4 :X)
      (should-have-invoked :player-prompt-4x4 {:with [:X]}))
    )

  (context "play again?"

    (it "asks the user if they want to play again"
      (let [output (str "Would you like to play again? Y/N\n")]
        (should= output (with-out-str (sut/play-again?)))))
    )
  )