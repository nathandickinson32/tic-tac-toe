(ns tic-tac-toe.output-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.output :as sut]))

(describe "console output messages"

  (context "greeting"

    (it "returns correct greeting message"
      (let [output (str "Welcome to Tic Tac Toe!\n")]
        (should= output (with-out-str (sut/greeting)))))

    (it "player prompt test"
      (let [output (str "Player X Enter your move 1-9\n")]
        (should= output (with-out-str (sut/player-prompt :X)))))
    )

  (context "prompt for choosing a game mode"

    (it "game mode prompt test"
      (let [output (str "Choose Game:\n"
                        "1 Human VS. Human\n"
                        "2 Human VS. Easy AI\n"
                        "3 Easy AI VS. Human\n"
                        "4 Human VS. Expert AI\n"
                        "5 Expert AI VS. Human\n")]
        (should= output (with-out-str (sut/game-mode-prompt)))))
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

  (context "validity"

    (it "prints invalid input message"
      (let [output (str "Invalid Input. Try again\n")]
        (should= output (with-out-str (sut/invalid-response)))))
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

  (context "when printing the tokens"

    #_(it "colors red"
        ;(should= "" sut/red)
        )

    (it "prints X token in green"
      (should= (str sut/green "X" sut/reset) (sut/colorize-token :X)))

    (it "prints O token in red"
      (should= (str sut/red "O" sut/reset) (sut/colorize-token :O)))
    )
  )