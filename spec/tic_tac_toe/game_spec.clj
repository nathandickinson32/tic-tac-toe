(ns tic-tac-toe.game-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.easy-ai :as ai]
            [tic-tac-toe.expert-ai :as expert-ai]
            [tic-tac-toe.human :as human]
            [tic-tac-toe.human]
            [tic-tac-toe.game :as sut]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.test-boards-spec :as test-board]))

(def take-turn-state-human-v-human
  {:X :human :O :human :board test-board/not-full-board1 :current-token :X})

(def take-turn-state-human-v-easy-ai
  {:X :human :O :easy-ai :board test-board/not-full-board1 :current-token :O})

(def take-turn-state-human-v-expert-ai
  {:X :human :O :expert-ai :board test-board/no-winners-board1 :current-token :O})

(describe "game conditions"

  (around [context] (with-out-str (context)))

  (context "tokens"

    (it "returns a map of available tokens"
      (should= {"X" :X "O" :O} sut/tokens))
    )

  (context "opponents"

    (it "returns a map of potential opponents"
      (should= {"1" :human "2" :easy-ai "3" :expert-ai} sut/opponents))
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

    (it "gets random easy-ai input for easy easy-ai game mode on easy-ai turn"
      (with-redefs [human/get-user-move   (stub :user {:return [0 1]})
                    ai/choose-random-move (stub :easy-ai {:return [2 0]})]

        (sut/take-turns take-turn-state-human-v-easy-ai)
        (should-have-invoked :easy-ai)
        (should-not-have-invoked :user)))

    (it "gets expert easy-ai input for expert easy-ai game mode on easy-ai turn"
      (with-redefs [human/get-user-move        (stub :user {:return [0 1]})
                    expert-ai/choose-best-move (stub :expert-ai {:return [1 2]})]

        (sut/take-turns take-turn-state-human-v-expert-ai)
        (should-have-invoked :expert-ai)
        (should-not-have-invoked :user)))
    )

  (context "when asking to choose a token"
    (with-stubs)

    (it "asks the user to select a token X/O"
      (with-redefs [output/choose-token (stub :choose-token)]
        (with-in-str "X" (sut/ask-for-token))
        (should-have-invoked :choose-token)))

    (it "returns :X for X"
      (with-in-str "X\n"
        (should= :X (sut/ask-for-token))))

    (it "returns :O for O"
      (with-in-str "O\n"
        (should= :O (sut/ask-for-token))))

    (it "returns :O for o"
      (with-in-str "o\n"
        (should= :O (sut/ask-for-token))))

    (it "returns :O for O with leading and trailing whitespace"
      (with-in-str "  o  \n"
        (should= :O (sut/ask-for-token))))

    (it "responds to invalid input"
      (with-redefs [output/choose-token           (stub :choose-token)
                    output/invalid-token-response (stub :invalid-token-response)]
        (with-in-str "bad\n1\n*\n \nXx\nx\n"
          (should= :X (sut/ask-for-token)))
        (should-have-invoked :invalid-token-response {:times 5})
        (should-have-invoked :choose-token {:times 6})))
    )

  (context "when asking to choose an opponent"
    (with-stubs)

    (it "asks the user to choose an opponent"
      (with-redefs [output/choose-opponent (stub :choose-opponent)]
        (with-in-str "1\n" (sut/ask-for-opponent)
          (should-have-invoked :choose-opponent))))

    (it "returns :human for 1"
      (with-in-str "1\n"
        (should= :human (sut/ask-for-opponent))))

    (it "returns :easy-ai for 2"
      (with-in-str "2\n"
        (should= :easy-ai (sut/ask-for-opponent))))

    (it "returns :expert-ai for 3"
      (with-in-str "3\n"
        (should= :expert-ai (sut/ask-for-opponent))))

    (it "returns :human for 1 with leading and trailing whitespace"
      (with-in-str "  1  \n"
        (should= :human (sut/ask-for-opponent))))

    (it "responds to invalid input"
      (with-redefs [output/choose-opponent           (stub :choose-opponent)
                    output/invalid-opponent-response (stub :invalid-opponent-response)]
        (with-in-str "bad\n*\n \nXx\n1\n"
          (should= :human (sut/ask-for-opponent)))
        (should-have-invoked :invalid-opponent-response {:times 4})
        (should-have-invoked :choose-opponent {:times 5})))
    )

  (context "when asking for first player"
    (with-stubs)

    (it "asks the user to choose who goes first"
      (with-redefs [output/choose-first-player (stub :choose-first-player)]
        (with-in-str "X\n" (sut/ask-for-first-player)
          (should-have-invoked :choose-first-player))))

    (it "returns :X for X"
      (with-in-str "X\n"
        (should= :X (sut/ask-for-first-player))))

    (it "asks for token"
      (with-redefs [output/choose-first-player (stub :choose-first-player)
                    output/choose-token        (stub :choose-token)]
        (with-in-str "X\n" (sut/ask-for-first-player)
          (should-have-invoked :choose-first-player)
          (should-have-invoked :choose-token))))
    )

  (context "when uer is asked to play again"
    (with-stubs)

    (it "calls build-game-state when the user inputs Y"
      (with-redefs [sut/build-game-state (stub :build-game-state)]
        (with-in-str "Y\n"
          (sut/play-again? sut/build-game-state)
          (should-have-invoked :build-game-state))))

    (it "does not call build-game-state when the user inputs N"
      (with-redefs [sut/build-game-state (stub :build-game-state)]
        (with-in-str "N\n"
          (sut/play-again? sut/build-game-state)
          (should-not-have-invoked :build-game-state))))
    )

  (context "when building a game state"
    (with-stubs)

    (redefs-around [sut/ask-for-token (stub :ask-for-token {:return :O})
                    sut/ask-for-opponent (stub :ask-for-opponent {:return :expert-ai})
                    sut/ask-for-first-player (stub :ask-for-first-player {:return :X})
                    sut/take-turns (stub :take-turns)
                    sut/play-again? (stub :play-again {:return nil})])

    (it "calls all input functions and builds correct game state"
      (sut/build-game-state)
      (should-have-invoked :take-turns {:with
                                        [{:X             :expert-ai
                                          :O             :human
                                          :board         output/starting-board
                                          :current-token :X}]}))

    (it "asks the user if they want to play again"
      (with-redefs [output/play-again? (stub :play-again-test)]
        (with-in-str "N\n" (sut/build-game-state)
          (should-have-invoked :play-again-test))))

    (it "calls play-again? after a game finishes"
      (with-redefs [sut/play-again?          (stub :sut/play-again {:return nil})
                    sut/take-turns           (stub :take-turns)
                    sut/ask-for-token        (stub :ask-for-token {:return :O})
                    sut/ask-for-opponent     (stub :ask-for-opponent {:return :expert-ai})
                    sut/ask-for-first-player (stub :ask-for-first-player {:return :X})
                    output/play-again?       (stub :output/play-again {:return nil})]
        (sut/build-game-state)
        (should-have-invoked :sut/play-again)))
    )
  )