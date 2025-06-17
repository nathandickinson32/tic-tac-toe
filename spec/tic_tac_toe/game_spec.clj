(ns tic-tac-toe.game-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.easy-ai :as ai]
            [tic-tac-toe.expert-ai :as expert-ai]
            [tic-tac-toe.human :as human]
            [tic-tac-toe.human]
            [tic-tac-toe.game :as sut]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.test-boards-spec :as test-board]))

(def state-human-v-human
  {:X :human :O :human :board output/starting-board :current-token :X})

(def state-human-v-easy-ai
  {:X :human :O :easy-ai :board output/starting-board :current-token :X})

(def state-easy-ai-v-human
  {:X :easy-ai :O :human :board output/starting-board :current-token :X})

(def state-human-v-expert-ai
  {:X :human :O :expert-ai :board output/starting-board :current-token :X})

(def state-expert-ai-v-human
  {:X :expert-ai :O :human :board output/starting-board :current-token :X})

(def take-turn-state-human-v-human
  {:X :human :O :human :board test-board/not-full-board1 :current-token :X})

(def take-turn-state-human-v-easy-ai
  {:X :human :O :easy-ai :board test-board/not-full-board1 :current-token :O})

(def take-turn-state-human-v-expert-ai
  {:X :human :O :expert-ai :board test-board/no-winners-board1 :current-token :O})

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

    (it "returns human vs easy tic-tac-toe.easy-ai state for 2"
      (should= state-human-v-easy-ai
               (sut/game-modes "2")))

    (it "returns easy tic-tac-toe.easy-ai vs human state for 3"
      (should= state-easy-ai-v-human
               (sut/game-modes "3")))

    (it "returns human vs expert tic-tac-toe.easy-ai state for 4"
      (should= state-human-v-expert-ai
               (sut/game-modes "4")))

    (it "returns expert tic-tac-toe.easy-ai vs human state for 5"
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
      (should-be-nil (sut/maybe-valid-game-mode "-1")))

    (it "returns human vs human state for 1"
      (should= state-human-v-human
               (sut/maybe-valid-game-mode "1")))

    (it "returns human vs tic-tac-toe.easy-ai state for 2"
      (should= state-human-v-easy-ai
               (sut/maybe-valid-game-mode "2")))

    (it "returns human vs tic-tac-toe.easy-ai state for 3"
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
        (should-have-invoked :take-turns {:with [(get sut/game-modes "1")]})))
    )

  (context "game-over?"

    (it "returns false if there is no winners for X"
      (should-not (sut/game-over? test-board/no-winners-board :X)))

    (it "returns false if there is no winners for O"
      (should-not (sut/game-over? test-board/no-winners-board :O)))

    (it "returns true if there is a winning row"
      (should (sut/game-over? test-board/winning-row1 :X))
      (should (sut/game-over? test-board/winning-row2 :X))
      (should (sut/game-over? test-board/winning-row3 :O)))

    (it "returns true if there is a winning column"
      (should (sut/game-over? test-board/winning-col1 :X))
      (should (sut/game-over? test-board/winning-col2 :X))
      (should (sut/game-over? test-board/winning-col3 :O)))

    (it "returns true if there is a winning diagonal"
      (should (sut/game-over? test-board/diagonal-win1 :X))
      (should (sut/game-over? test-board/diagonal-win2 :X))
      (should (sut/game-over? test-board/diagonal-win3 :O))
      (should (sut/game-over? test-board/diagonal-win4 :O)))
    )

  (context "winner-message"
    (with-stubs)

    (redefs-around [output/winner-message (stub :output/winner-message)
                    output/draw-message (stub :output/draw-message)])

    (it "responds to output winner message"
      (sut/game-over? test-board/winning-row1 :X)
      (should-have-invoked :output/winner-message {:with [test-board/winning-row1 :X]}))

    (it "does not respond with winner message"
      (should-not (sut/game-over? test-board/winning-row1 :O)))

    (it "responds to a tie game with draw message"
      (sut/game-over? test-board/full-board :X)
      (should-have-invoked :output/draw-message {:with [test-board/full-board]}))
    )

  (context "take-turns"
    (with-stubs)

    (redefs-around [output/print-board (stub :print-board)])

    (it "displays board before each turn"
      (with-in-str "2\n" (sut/take-turns {:board test-board/no-winners-board :current-token :X :X :human :O :human}))
      (should-have-invoked :print-board {:with [test-board/no-winners-board]}))

    (it "ends the game"
      (with-redefs [output/winner-message (stub :winner-message)]
        (with-in-str "2\n" (sut/take-turns {:board test-board/no-winners-board :current-token :X :X :human :O :human}))
        (should-have-invoked :winner-message {:with [test-board/winning-row1 :X]})))

    (it "repeats until game ends"
      (with-redefs [output/winner-message (stub :winner-message)]
        (with-in-str "7\n6\n" (sut/take-turns {:board test-board/no-winners-board :current-token :X :X :human :O :human}))
        (should-have-invoked :winner-message {:with [test-board/winning-row3 :O]})))

    (it "gets user input for game mode"
      (with-redefs [tic-tac-toe.human/get-user-move (stub :user {:return [0 1]})
                    ai/choose-random-move           (stub :easy-ai {:return [1 0]})]

        (sut/take-turns take-turn-state-human-v-human)
        (should-have-invoked :user)
        (should-not-have-invoked :easy-ai)))

    (it "gets random tic-tac-toe.easy-ai input for easy tic-tac-toe.easy-ai game mode on tic-tac-toe.easy-ai turn"
      (with-redefs [human/get-user-move   (stub :user {:return [0 1]})
                    ai/choose-random-move (stub :easy-ai {:return [2 0]})]

        (sut/take-turns take-turn-state-human-v-easy-ai)
        (should-have-invoked :easy-ai)
        (should-not-have-invoked :user)))

    (it "gets expert tic-tac-toe.easy-ai input for expert tic-tac-toe.easy-ai game mode on tic-tac-toe.easy-ai turn"
      (with-redefs [human/get-user-move        (stub :user {:return [0 1]})
                    expert-ai/choose-best-move (stub :expert-ai {:return [1 2]})]

        (sut/take-turns take-turn-state-human-v-expert-ai)
        (should-have-invoked :expert-ai)
        (should-not-have-invoked :user)))
    )
  )