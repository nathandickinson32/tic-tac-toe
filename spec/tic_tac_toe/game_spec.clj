(ns tic-tac-toe.game-spec
  (:require [speclj.core :refer :all]
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
      (should= {"human" :human "easy-ai" :easy-ai "expert-ai" :expert-ai} sut/opponents))
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
        (with-in-str "human\n" (sut/ask-for-opponent)
          (should-have-invoked :choose-opponent))))

    (it "returns :human for Human"
      (with-in-str "human\n"
        (should= :human (sut/ask-for-opponent))))

    (it "returns :expert-ai for EXPERT-AI"
      (with-in-str "EXPERT-AI\n"
        (should= :expert-ai (sut/ask-for-opponent))))

    (it "returns :human for human with leading and trailing whitespace"
      (with-in-str "  human  \n"
        (should= :human (sut/ask-for-opponent))))

    (it "responds to invalid input"
      (with-redefs [output/choose-opponent           (stub :choose-opponent)
                    output/invalid-opponent-response (stub :invalid-opponent-response)]
        (with-in-str "bad\n1\n*\n \nXx\nhuman\n"
          (should= :human (sut/ask-for-opponent)))
        (should-have-invoked :invalid-opponent-response {:times 5})
        (should-have-invoked :choose-opponent {:times 6})))
    )
  )