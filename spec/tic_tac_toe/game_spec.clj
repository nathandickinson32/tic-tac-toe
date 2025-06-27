(ns tic-tac-toe.game-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.easy-ai :as easy-ai]
            [tic-tac-toe.medium-ai :as medium-ai]
            [tic-tac-toe.expert-ai :as expert-ai]
            [tic-tac-toe.human :as human]
            [tic-tac-toe.human]
            [tic-tac-toe.game :as sut]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.test-boards-3x3-spec :as test-board]))

(def take-turn-state-human-v-human
  {:X :human :O :human :board test-board/next-move-wins-X :current-token :X :depth 0})

(def take-turn-state-human-v-easy-ai
  {:X :human :O :easy-ai :board test-board/next-move-wins-X :current-token :O :depth 0})

(def take-turn-state-human-v-medium-ai
  {:X :human :O :medium-ai :board test-board/no-winners-board1 :current-token :O :depth 5})

(def take-turn-state-human-v-expert-ai
  {:X :human :O :expert-ai :board test-board/no-winners-board1 :current-token :O :depth 0})

(describe "game conditions"

  (around [context] (with-out-str (context)))

  (context "tokens"

    (it "returns a map of available tokens"
      (should= {"X" :X "O" :O} sut/tokens))
    )

  (context "board sizes"

    (it "returns a map of potential board sizes"
      (should= {"3" :3x3 "4" :4x4} sut/board-sizes)))

  (context "players"

    (it "returns a map of potential players"
      (should= {"1" :human "2" :easy-ai "3" :medium-ai "4" :expert-ai} sut/players))
    )

  (context "end of game messages"
    (with-stubs)

    (redefs-around [output/winner-message (stub :output/winner-message)
                    output/draw-message (stub :output/draw-message)])

    (it "responds to output winner message"
      (board/game-over? test-board/top-winning-row-X :X)
      (should-have-invoked :output/winner-message {:with [test-board/top-winning-row-X :X]}))

    (it "does not respond with winner message"
      (should-not (board/game-over? test-board/top-winning-row-X :O)))

    (it "responds to a tie game with draw message"
      (board/game-over? test-board/full-board :X)
      (should-have-invoked :output/draw-message {:with [test-board/full-board]}))
    )

  (context "take-turns"
    (with-stubs)

    (redefs-around [output/print-board (stub :print-board)])

    (it "displays board before each turn"
      (with-in-str "2\n" (sut/take-turns {:board test-board/no-winners-board :current-token :X :X :human :O :human :depth 0}))
      (should-have-invoked :print-board {:with [test-board/no-winners-board]}))

    (it "ends the game"
      (with-redefs [output/winner-message (stub :winner-message)]
        (with-in-str "2\n" (sut/take-turns {:board test-board/no-winners-board :current-token :X :X :human :O :human :depth 0}))
        (should-have-invoked :winner-message {:with [test-board/top-winning-row-X :X]})))

    (it "repeats until game ends"
      (with-redefs [output/winner-message (stub :winner-message)]
        (with-in-str "7\n6\n" (sut/take-turns {:board test-board/no-winners-board :current-token :X :X :human :O :human :depth 0}))
        (should-have-invoked :winner-message {:with [test-board/middle-winning-row-O :O]})))

    (it "gets user input for game mode"
      (with-redefs [tic-tac-toe.human/get-user-move (stub :user {:return [0 1]})
                    easy-ai/choose-random-move      (stub :easy-ai {:return [1 0]})]

        (sut/take-turns take-turn-state-human-v-human)
        (should-have-invoked :user)
        (should-not-have-invoked :easy-ai)))

    (it "gets random easy-ai input for easy-ai game mode on easy-ai turn"
      (with-redefs [human/get-user-move        (stub :user {:return [0 1]})
                    easy-ai/choose-random-move (stub :easy-ai {:return [2 0]})]

        (sut/take-turns take-turn-state-human-v-easy-ai)
        (should-have-invoked :easy-ai)
        (should-not-have-invoked :user)))

    (it "gets medium-ai input for medium-ai game mode on medium-ai turn"
      (with-redefs [human/get-user-move         (stub :user {:return [0 1]})
                    medium-ai/best-or-rand-move (stub :medium-ai {:return [1 2]})]

        (sut/take-turns take-turn-state-human-v-medium-ai)
        (should-have-invoked :medium-ai)
        (should-not-have-invoked :user)))

    (it "gets expert-ai input for expert-ai game mode on expert-ai turn"
      (with-redefs [human/get-user-move        (stub :user {:return [0 1]})
                    expert-ai/choose-best-move (stub :expert-ai {:return [1 2]})]

        (sut/take-turns take-turn-state-human-v-expert-ai)
        (should-have-invoked :expert-ai)
        (should-not-have-invoked :user)))

    (it "increases depth after every turn"
      (with-redefs [human/get-user-move (stub :user-move {:return [0 2]})]
        (let [state (sut/take-turns {:board         test-board/top-almost-winning-X
                                     :current-token :X
                                     :X             :human
                                     :O             :human
                                     :depth         2})]
          (should= 3 (:depth state)))))
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

  (context "when asking to choose a board size"
    (with-stubs)

    (it "asks the user to choose a board size"
      (with-redefs [output/choose-board-size (stub :choose-board-size)]
        (with-in-str "3\n" (sut/ask-for-board-size)
          (should-have-invoked :choose-board-size))))

    (it "returns :3x3 for 3"
      (with-in-str "3\n" (should= :3x3 (sut/ask-for-board-size))))

    (it "returns :4x4 for 4"
      (with-in-str "4\n" (should= :4x4 (sut/ask-for-board-size))))

    (it "responds to invalid input"
      (with-redefs [output/choose-board-size           (stub :choose-board-size)
                    output/invalid-board-size-response (stub :invalid-board-size-response)]
        (with-in-str "bad\n*\n \nXx\n3\n"
          (should= :3x3 (sut/ask-for-board-size)))
        (should-have-invoked :invalid-board-size-response {:times 4})
        (should-have-invoked :choose-board-size {:times 5})))
    )

  (context "when asking to choose a player"
    (with-stubs)

    (it "asks the user to choose a player"
      (with-redefs [output/choose-player (stub :choose-player)]
        (with-in-str "1\n" (sut/ask-for-player)
          (should-have-invoked :choose-player))))

    (it "returns :human for 1"
      (with-in-str "1\n"
        (should= :human (sut/ask-for-player))))

    (it "returns :easy-ai for 2"
      (with-in-str "2\n"
        (should= :easy-ai (sut/ask-for-player))))

    (it "returns :medium-ai for 3"
      (with-in-str "3\n"
        (should= :medium-ai (sut/ask-for-player))))

    (it "returns :expert-ai for 4"
      (with-in-str "4\n"
        (should= :expert-ai (sut/ask-for-player))))

    (it "returns :human for 1 with leading and trailing whitespace"
      (with-in-str "  1  \n"
        (should= :human (sut/ask-for-player))))

    (it "responds to invalid input"
      (with-redefs [output/choose-player    (stub :choose-player)
                    output/invalid-response (stub :invalid-response)]
        (with-in-str "bad\n*\n \nXx\n1\n"
          (should= :human (sut/ask-for-player)))
        (should-have-invoked :invalid-response {:times 4})
        (should-have-invoked :choose-player {:times 5})))
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

  (context "when user is asked to play again"
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
                    sut/ask-for-first-player (stub :ask-for-first-player {:return :X})
                    sut/take-turns (stub :take-turns)
                    sut/play-again? (stub :play-again {:return nil})])

    (it "calls all input functions and builds correct game state"
      (with-in-str "3\n4\n2\n" (sut/build-game-state)
        (should-have-invoked :take-turns {:with
                                          [{:board-size    :3x3
                                            :X             :easy-ai
                                            :O             :expert-ai
                                            :board         output/starting-board-3x3
                                            :current-token :X
                                            :depth         0}]})))

    (it "asks the user if they want to play again"
      (with-redefs [sut/ask-for-board-size (stub :ask-for-board-size {:return :3x3})
                    output/play-again?     (stub :play-again-test)
                    sut/ask-for-player     (stub :expert-ai)]
        (with-in-str "N\n" (sut/build-game-state)
          (should-have-invoked :play-again-test))))

    (it "calls play-again? after a game finishes"
      (with-redefs [sut/ask-for-board-size   (stub :ask-for-board-size {:return :3x3})
                    sut/play-again?          (stub :sut/play-again {:return nil})
                    sut/take-turns           (stub :take-turns)
                    sut/ask-for-token        (stub :ask-for-token {:return :O})
                    sut/ask-for-player       (stub :ask-for-player {:return :expert-ai})
                    sut/ask-for-first-player (stub :ask-for-first-player {:return :X})
                    output/play-again?       (stub :output/play-again {:return nil})]
        (sut/build-game-state)
        (should-have-invoked :sut/play-again)))

    (it "determines starting board 3x3"
      (should= output/starting-board-3x3 (sut/determine-starting-board :3x3)))

    (it "determines starting board 4x4"
      (should= output/starting-board-4x4 (sut/determine-starting-board :4x4)))
    )
  )