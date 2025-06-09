(ns tic-tac-toe.game-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.ai :as ai]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.game :as sut]
            [tic-tac-toe.output :as output]))

(def no-winners-board
  [[\X \space \X]
   [\O \O \space]
   [\space \space \space]])

(def no-winners-board1
  [[\X \space \X]
   [\O \O \space]
   [\X \space \space]])

(def winning-row1
  [[\X \X \X]
   [\O \O \space]
   [\space \space \space]])

(def winning-row2
  [[\O \O \space]
   [\O \space \space]
   [\X \X \X]])

(def winning-row3
  [[\X \space \X]
   [\O \O \O]
   [\X \space \space]])

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

(def not-full-board1
  [[\X \space \X]
   [\space \space \O]
   [\X \O \O]])

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

(def state-human-v-human
  {\X :human \O :human :board output/starting-board :current-token \X})

(def state-human-v-easy-ai
  {\X :human \O :easy-ai :board output/starting-board :current-token \X})

(def state-easy-ai-v-human
  {\X :easy-ai \O :human :board output/starting-board :current-token \X})

(def state-human-v-expert-ai
  {\X :human \O :expert-ai :board output/starting-board :current-token \X})

(def state-expert-ai-v-human
  {\X :expert-ai \O :human :board output/starting-board :current-token \X})

(def take-turn-state-human-v-human
  {\X :human \O :human :board not-full-board1 :current-token \X})

(def take-turn-state-human-v-easy-ai
  {\X :human \O :easy-ai :board not-full-board1 :current-token \O})

(def take-turn-state-human-v-expert-ai
  {\X :human \O :expert-ai :board no-winners-board1 :current-token \O})

(describe "game conditions"

  (around [context] (with-out-str (context)))

  (context "game modes"

    (it "returns nil for anything outside of game-modes map"
      (should-be-nil (sut/game-modes "0"))
      (should-be-nil (sut/game-modes "100"))
      (should-be-nil (sut/game-modes "*"))
      (should-be-nil (sut/game-modes ""))
      (should-be-nil (sut/game-modes " "))
      (should-be-nil (sut/game-modes "-1")))

    (it "returns human vs human state for 1"
      (should= state-human-v-human
               (sut/game-modes "1")))

    (it "returns human vs easy ai state for 2"
      (should= state-human-v-easy-ai
               (sut/game-modes "2")))

    (it "returns easy ai vs human state for 3"
      (should= state-easy-ai-v-human
               (sut/game-modes "3")))

    (it "returns human vs expert ai state for 4"
      (should= state-human-v-expert-ai
               (sut/game-modes "4")))

    (it "returns expert ai vs human state for 5"
      (should= state-expert-ai-v-human
               (sut/game-modes "5")))

    )

  (context "maybe-valid-input"

    (it "returns nil for anything outside of game-modes map"
      (should-be-nil (sut/maybe-valid-game-mode "0"))
      (should-be-nil (sut/maybe-valid-game-mode "100"))
      (should-be-nil (sut/maybe-valid-game-mode "*"))
      (should-be-nil (sut/maybe-valid-game-mode ""))
      (should-be-nil (sut/maybe-valid-game-mode " "))
      (should-be-nil (sut/maybe-valid-game-mode "-1"))
      )

    (it "returns human vs human state for 1"
      (should= state-human-v-human
               (sut/maybe-valid-game-mode "1")))

    (it "returns human vs ai state for 2"
      (should= state-human-v-easy-ai
               (sut/maybe-valid-game-mode "2")))

    (it "returns human vs ai state for 3"
      (should= state-easy-ai-v-human
               (sut/maybe-valid-game-mode "3")))
    )

  (context "when choosing a game mode"
    (with-stubs)

    (it "displays game-mode-prompt"
      (with-redefs [output/game-mode-prompt (stub :game-mode-prompt)
                    sut/take-turns          (stub :take-turns)]
        (with-in-str "1\n" (sut/play-game))
        (should-have-invoked :game-mode-prompt)))

    (it "continues to accept user input until valid mode is selected"
      (with-redefs [output/invalid-response (stub :invalid-response)
                    sut/take-turns          (stub :take-turns)]
        (with-in-str ":\nHuman\n*\\n\n21\n1\n" (sut/play-game))
        (should-have-invoked :invalid-response)
        (should-have-invoked :take-turns)))

    (it "accepts leading and trailing whitespace whitespace"
      (with-redefs [output/game-mode-prompt (stub :game-mode-prompt)
                    sut/take-turns          (stub :take-turns)]
        (with-in-str " 1 \n" (sut/play-game))
        (should-have-invoked :game-mode-prompt)))
    )

  (context "switching player"

    (it "switches from player X to player O"
      (should= \O (sut/switch-player \X)))

    (it "switches from player O to player X"
      (should= \X (sut/switch-player \O)))
    )

  (context "draw/tie game"

    (it "returns false when the board has available spaces"
      (should-not (sut/full-board? not-full-board))
      (should-not (sut/full-board? winning-col1))
      (should-not (sut/full-board? winning-row1)))

    (it "returns true when the board is full with no winner"
      (should (sut/full-board? full-board))
      (should (sut/full-board? full-board2)))
    )

  (context "rows"

    (it "returns false when no rows have all matching symbols"
      (should-not (sut/three-matches? (first winning-row1) \O))
      (should-not (sut/three-matches? (nth winning-row1 2) \O))
      (should-not (sut/three-matches? (second winning-row2) \O))
      (should-not (sut/three-matches? (nth winning-row3 1) \X))
      (should-not (sut/three-matches? (nth winning-row3 2) \X)))

    (it "returns true for a single row of matching symbols"
      (should (sut/three-matches? (first winning-row1) \X))
      (should (sut/three-matches? (nth winning-row2 2) \X))
      (should (sut/three-matches? (second winning-row3) \O)))

    (it "is a winning row"
      (should (sut/winning-row? winning-row1 \X))
      (should (sut/winning-row? winning-row2 \X))
      (should (sut/winning-row? winning-row3 \O)))
    )

  (context "columns"

    (it "returns false when no cols have all matching symbols"
      (should-not (sut/winning-col? winning-col1 \O))
      (should-not (sut/winning-col? winning-col2 \O))
      (should-not (sut/winning-col? winning-col1 \O)))

    (it "is a winning column"
      (should (sut/winning-col? winning-col1 \X))
      (should (sut/winning-col? winning-col2 \X))
      (should (sut/winning-col? winning-col3 \O)))
    )

  (context "diagonals"

    (it "false for same symbol diagonal"
      (should-not (sut/winning-diagonal? not-full-board \X))
      (should-not (sut/winning-diagonal? no-winners-board \X))
      (should-not (sut/winning-diagonal? not-full-board \O))
      (should-not (sut/winning-diagonal? no-winners-board \O))
      (should-not (sut/winning-diagonal? diagonal-win1 \O))
      (should-not (sut/winning-diagonal? diagonal-win3 \X)))

    (it "true for same symbol diagonal"
      (should (sut/winning-diagonal? diagonal-win1 \X))
      (should (sut/winning-diagonal? diagonal-win2 \X))
      (should (sut/winning-diagonal? diagonal-win3 \O))
      (should (sut/winning-diagonal? diagonal-win4 \O)))
    )

  (context "win?"

    (it "no row, column or diagonal is filled by X"
      (should-not (sut/win? no-winners-board \X)))

    (it "no row, column or diagonal is filled by O"
      (should-not (sut/win? no-winners-board \O)))

    (it "a row is filled by same player symbol"
      (should (sut/win? winning-row1 \X))
      (should (sut/win? winning-row2 \X))
      (should (sut/win? winning-row3 \O)))

    (it "a column is filled by same player symbol"
      (should (sut/win? winning-col1 \X))
      (should (sut/win? winning-col2 \X))
      (should (sut/win? winning-col3 \O)))

    (it "a diagonal is filled by same player symbol"
      (should (sut/win? diagonal-win1 \X))
      (should (sut/win? diagonal-win2 \X))
      (should (sut/win? diagonal-win3 \O))
      (should (sut/win? diagonal-win4 \O)))
    )

  (context "game-over?"

    (it "returns false if there is no winners for X"
      (should-not (sut/game-over? no-winners-board \X)))

    (it "returns false if there is no winners for O"
      (should-not (sut/game-over? no-winners-board \O)))

    (it "returns true if there is a winning row"
      (should (sut/game-over? winning-row1 \X))
      (should (sut/game-over? winning-row2 \X))
      (should (sut/game-over? winning-row3 \O)))

    (it "returns true if there is a winning column"
      (should (sut/game-over? winning-col1 \X))
      (should (sut/game-over? winning-col2 \X))
      (should (sut/game-over? winning-col3 \O)))

    (it "returns true if there is a winning diagonal"
      (should (sut/game-over? diagonal-win1 \X))
      (should (sut/game-over? diagonal-win2 \X))
      (should (sut/game-over? diagonal-win3 \O))
      (should (sut/game-over? diagonal-win4 \O)))
    )

  (context "winner-message"
    (with-stubs)

    (redefs-around [output/winner-message (stub :output/winner-message)
                    output/draw-message (stub :output/draw-message)])

    (it "responds to output winner message"
      (sut/game-over? winning-row1 \X)
      (should-have-invoked :output/winner-message {:with [winning-row1 \X]}))

    (it "does not respond with winner message"
      (should-not (sut/game-over? winning-row1 \O)))

    (it "responds to a tie game with draw message"
      (sut/game-over? full-board \X)
      (should-have-invoked :output/draw-message {:with [full-board]}))
    )

  (context "take-turns"
    (with-stubs)

    (redefs-around [output/print-board (stub :print-board)])

    (it "displays board before each turn"
      (with-in-str "2\n" (sut/take-turns {:board no-winners-board :current-token \X}))
      (should-have-invoked :print-board {:with [no-winners-board]}))

    (it "ends the game"
      (with-redefs [output/winner-message (stub :winner-message)]
        (with-in-str "2\n" (sut/take-turns {:board no-winners-board :current-token \X \X :human \O :human}))
        (should-have-invoked :winner-message {:with [winning-row1 \X]})))

    (it "repeats until game ends"
      (with-redefs [output/winner-message (stub :winner-message)]
        (with-in-str "7\n6\n" (sut/take-turns {:board no-winners-board :current-token \X \X :human \O :human}))
        (should-have-invoked :winner-message {:with [winning-row3 \O]})))

    (it "gets user input for game mode"
      (with-redefs [board/get-user-move   (stub :user {:return [0 1]})
                    ai/choose-random-move (stub :easy-ai {:return [1 0]})]

        (sut/take-turns take-turn-state-human-v-human)
        (should-have-invoked :user)
        (should-not-have-invoked :easy-ai)))

    (it "gets random ai input for easy ai game mode on ai turn"
      (with-redefs [board/get-user-move   (stub :user {:return [0 1]})
                    ai/choose-random-move (stub :easy-ai {:return [2 0]})]

        (sut/take-turns take-turn-state-human-v-easy-ai)
        (should-have-invoked :easy-ai)
        (should-not-have-invoked :user)))

    (it "gets expert ai input for expert ai game mode on ai turn"
      (with-redefs [board/get-user-move (stub :user {:return [0 1]})
                    ai/choose-best-move (stub :expert-ai {:return [1 2]})]

        (sut/take-turns take-turn-state-human-v-expert-ai)
        (should-have-invoked :expert-ai)
        (should-not-have-invoked :user)))
    )
  )