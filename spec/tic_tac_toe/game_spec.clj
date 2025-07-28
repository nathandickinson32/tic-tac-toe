(ns tic-tac-toe.game-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.easy-ai :as easy-ai]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.medium-ai :as medium-ai]
            [tic-tac-toe.expert-ai :as expert-ai]
            [tic-tac-toe.human :as human]
            [tic-tac-toe.human]
            [tic-tac-toe.game :as sut]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.edn-records :as records]
            [tic-tac-toe.test-boards-3x3-spec :as test-board-3x3]
            [tic-tac-toe.test-boards-4x4-spec :as test-board-4x4]
            [tic-tac-toe.test-boards-3x3x3-spec :as test-board-3x3x3]))

(def take-turn-state-human-v-human
  {:X :human :O :human :board test-board-3x3/next-move-wins-X :current-token :X :depth 0 :board-size :3x3})

(def take-turn-state-human-v-easy-ai
  {:X :human :O :easy-ai :board test-board-3x3/next-move-wins-X :current-token :O :depth 0 :board-size :3x3})

(def take-turn-state-human-v-medium-ai
  {:X :human :O :medium-ai :board test-board-3x3/no-winners-board1 :current-token :O :depth 5 :board-size :3x3})

(def take-turn-state-human-v-expert-ai
  {:X :human :O :expert-ai :board test-board-3x3/no-winners-board1 :current-token :O :depth 0 :board-size :3x3})

(describe "game conditions"

  (around [context] (with-out-str (context)))

  (context "tokens"

    (it "returns a map of available tokens"
      (should= {"X" :X "O" :O} sut/tokens))
    )

  (context "board sizes"

    (it "returns a map of potential board sizes"
      (should= {"9" :3x3 "16" :4x4 "27" :3x3x3} sut/board-sizes))
    )

  (context "players"

    (it "returns a map of potential players"
      (should= {"1" :human "2" :easy-ai "3" :medium-ai "4" :expert-ai} sut/players))
    )

  (context "take-turns"
    (with-stubs)

    (redefs-around [output/print-board-3x3 (stub :print-board-3x3)
                    output/print-board-4x4 (stub :print-board-4x4)
                    output/print-board-3x3x3 (stub :print-board-3x3x3)
                    records/record-move (stub :record-move)
                    random-uuid (stub :uuid {:return "123"})])

    (it "displays 3x3 board before each turn"
      (with-in-str "2\n" (sut/take-turn {:board test-board-3x3/no-winners-board :current-token :X :X :human :O :human :board-size :3x3}))
      (should-have-invoked :print-board-3x3 {:with [test-board-3x3/no-winners-board]}))

    (it "displays 4x4 board before each turn"
      (with-in-str "1\n" (sut/take-turn {:board test-board-4x4/x-wins-with-1 :current-token :X :X :human :O :human :board-size :4x4}))
      (should-have-invoked :print-board-4x4 {:with [test-board-4x4/x-wins-with-1]}))

    (it "displays 3x3x3 board before each turn"
      (with-in-str "14\n" (sut/take-turn {:board test-board-3x3x3/x-wins-with-14 :current-token :X :X :human :O :human :board-size :3x3x3}))
      (should-have-invoked :print-board-3x3x3 {:with [test-board-3x3x3/x-wins-with-14]}))

    (it "ends the game on a win"
      (with-redefs [output/winner-message (stub :winner-message)]
        (with-in-str "2\n" (sut/take-turn {:board test-board-3x3/no-winners-board :current-token :X :X :human :O :human :board-size :3x3}))
        (should-have-invoked :winner-message {:with [:X]})))

    (it "ends the game on a tie"
      (with-redefs [output/tie-game-message (stub :draw-message)]
        (with-in-str "1\n" (sut/take-turn {:board test-board-3x3/move-1-for-tie :current-token :X :X :human :O :human :board-size :3x3}))
        (should-have-invoked :draw-message)))

    (it "repeats until game ends"
      (with-redefs [output/winner-message (stub :winner-message)]
        (with-in-str "7\n6\n" (sut/take-turn {:board test-board-3x3/no-winners-board :current-token :X :X :human :O :human :board-size :3x3}))
        (should-have-invoked :winner-message {:with [:O]})))

    (it "gets user input for game mode"
      (with-redefs [tic-tac-toe.human/get-user-move (stub :user {:return [0 1]})
                    easy-ai/choose-random-move      (stub :easy-ai {:return [1 0]})]

        (sut/take-turn take-turn-state-human-v-human)
        (should-have-invoked :user)
        (should-not-have-invoked :easy-ai)))

    (it "gets random easy-ai input for easy-ai game mode on easy-ai turn"
      (with-redefs [human/get-user-move        (stub :user {:return [0 1]})
                    easy-ai/choose-random-move (stub :easy-ai {:return [2 0]})]

        (sut/take-turn take-turn-state-human-v-easy-ai)
        (should-have-invoked :easy-ai)
        (should-not-have-invoked :user)))

    (it "gets medium-ai input for medium-ai game mode on medium-ai turn"
      (with-redefs [human/get-user-move         (stub :user {:return [0 1]})
                    medium-ai/best-or-rand-move (stub :medium-ai {:return [1 2]})]

        (sut/take-turn take-turn-state-human-v-medium-ai)
        (should-have-invoked :medium-ai)
        (should-not-have-invoked :user)))

    (it "gets expert-ai input for expert-ai game mode on expert-ai turn"
      (with-redefs [human/get-user-move        (stub :user {:return [0 1]})
                    expert-ai/choose-best-move (stub :expert-ai {:return [1 2]})]

        (sut/take-turn take-turn-state-human-v-expert-ai)
        (should-have-invoked :expert-ai)
        (should-not-have-invoked :user)))

    (it "calls record-move after win"
      (with-in-str "4\n3\n"
        (sut/take-turn {:board         test-board-3x3/top-almost-winning-X
                        :current-token :O
                        :X             :human
                        :O             :human
                        :board-size    :3x3}))
      (should-have-invoked :record-move {:times 2}))
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
        (with-in-str "9\n" (sut/ask-for-board-size)
          (should-have-invoked :choose-board-size))))

    (it "returns :3x3 for 9"
      (with-in-str "9\n" (should= :3x3 (sut/ask-for-board-size))))

    (it "returns :4x4 for 16"
      (with-in-str "16\n" (should= :4x4 (sut/ask-for-board-size))))

    (it "returns :3x3x3 for 27"
      (with-in-str "27\n" (should= :3x3x3 (sut/ask-for-board-size))))

    (it "responds to invalid input"
      (with-redefs [output/choose-board-size           (stub :choose-board-size)
                    output/invalid-board-size-response (stub :invalid-board-size-response)]
        (with-in-str "bad\n*\n \nXx\n9\n"
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
      (with-redefs [output/choose-first-player (stub :choose-first-player)]
        (with-in-str "X\n" (sut/ask-for-first-player)
          (should-have-invoked :choose-first-player))))

    (it "responds to invalid input"
      (with-redefs [output/choose-first-player (stub :choose-first-player)
                    output/invalid-response    (stub :invalid-response)]
        (with-in-str "bad\n*\n \nBb\nx\n"
          (should= :X (sut/ask-for-first-player)))
        (should-have-invoked :invalid-response {:times 4})
        (should-have-invoked :choose-first-player {:times 5})))
    )

  (describe "ask-to-finish-last-game"
    (with-stubs)

    (it "invokes unfinished game prompt"
      (with-redefs [output/finish-last-game? (stub :finish-last-game?)]
        (with-in-str "n\n"
          (sut/Y-or-N)
          (should-have-invoked :finish-last-game?))))

    (it "returns Y for y"
      (with-in-str "y\n"
        (should= "Y" (sut/Y-or-N))))

    (it "returns N for n"
      (with-in-str "n\n"
        (should= "N" (sut/Y-or-N))))

    (it "responds to invalid input"
      (with-redefs [output/finish-last-game? (stub :finish-last-game?)
                    output/invalid-response  (stub :invalid-response)]
        (with-in-str "bad\nX\n \nBb\nn\n"
          (should= "N" (sut/Y-or-N)))
        (should-have-invoked :invalid-response {:times 4})
        (should-have-invoked :finish-last-game? {:times 5})))
    )

  (context "when user is asked to play again"
    (with-stubs)

    (it "calls start-new-game when the user inputs Y"
      (with-redefs [sut/start-new-game (stub :build-game-state)]
        (with-in-str "Y\n"
          (sut/play-again? sut/start-new-game)
          (should-have-invoked :build-game-state))))

    (it "does not call build-game-state when the user inputs N"
      (with-redefs [sut/start-new-game (stub :build-game-state)]
        (with-in-str "N\n"
          (sut/play-again? sut/start-new-game)
          (should-not-have-invoked :build-game-state))))
    )

  (context "when starting a new game"
    (with-stubs)

    (redefs-around [sut/ask-for-token (stub :ask-for-token {:return :O})
                    sut/ask-for-first-player (stub :ask-for-first-player {:return :X})
                    sut/take-turn (stub :take-turns)
                    sut/play-again? (stub :play-again {:return nil})
                    random-uuid (stub :uuid {:return "123"})])

    (it "calls all input functions and builds correct 3x3 game state"
      (with-in-str "9\n4\n2\n" (sut/start-new-game)
        (should-have-invoked :take-turns {:with
                                          [{:board-size    :3x3
                                            :X             :easy-ai
                                            :O             :expert-ai
                                            :board         output/starting-board-3x3
                                            :current-token :X
                                            :game-id       "123"}]})))

    (it "calls all input functions and builds correct 4x4 game state"
      (with-in-str "16\n4\n2\n" (sut/start-new-game)
        (should-have-invoked :take-turns {:with
                                          [{:board-size    :4x4
                                            :X             :easy-ai
                                            :O             :expert-ai
                                            :board         output/starting-board-4x4
                                            :current-token :X
                                            :game-id       "123"}]})))

    (it "determines starting board 3x3"
      (should= output/starting-board-3x3 (sut/determine-starting-board :3x3)))

    (it "determines starting board 4x4"
      (should= output/starting-board-4x4 (sut/determine-starting-board :4x4)))

    (it "determines starting board 3x3x3"
      (should= output/starting-board-3x3x3 (sut/determine-starting-board :3x3x3)))
    )

  (context "build-game-state"
    (with-stubs)

    (redefs-around
      [sut/ask-for-token (stub :ask-for-token {:return :O})
       sut/ask-for-first-player (stub :ask-for-first-player {:return :X})
       sut/ask-for-player (stub :ask-for-player {:return :expert-ai})
       sut/ask-for-board-size (stub :ask-for-board-size {:return :3x3})
       sut/take-turn (stub :take-turns)
       sut/play-again? (stub :sut/play-again {:return nil})
       output/play-again? (stub :output/play-again {:return nil})
       random-uuid (stub :uuid {:return "123"})])

    (it "starts a new game when no previous record exists"
      (with-redefs [records/read-last-record (constantly nil)
                    game/start-new-game      (stub :new-game)]
        (sut/start-game)
        (should-have-invoked :new-game)))

    (it "starts a new game when last record is finished game"
      (let [finished-game {:board-size    :3x3
                           :board         [[1 2 3] [4 5 6] [7 8 9]]
                           :X             :human
                           :O             :easy-ai
                           :current-token :X
                           :game-id       "123"}]
        (with-redefs [records/read-last-record (constantly finished-game)
                      board/game-over?         (constantly true)
                      game/start-new-game      (stub :new-game)]
          (sut/start-game)
          (should-have-invoked :new-game))))

    (it "starts a new game when last record is unfinished and user chooses not to resume"
      (let [unfinished-game {:board-size    :3x3
                             :board         [[1 2 3] [4 5 6] [7 8 9]]
                             :X             :human
                             :O             :easy-ai
                             :current-token :X
                             :game-id       "123"}]
        (with-redefs [records/read-last-record (constantly unfinished-game)
                      board/game-over?         (constantly false)
                      sut/Y-or-N               (constantly "N")
                      game/start-new-game      (stub :new-game)]
          (sut/start-game)
          (should-have-invoked :new-game))))

    (it "starts taking turns with last record data when user chooses to resume"
      (let [unfinished-game {:board-size    :3x3
                             :X             :human
                             :O             :easy-ai
                             :board         [[1 2 3] [4 5 6] [7 8 9]]
                             :current-token :X
                             :game-id       "123"}]
        (with-redefs [records/read-last-record (constantly unfinished-game)
                      board/game-over?         (constantly false)
                      sut/Y-or-N               (constantly "Y")]
          (sut/start-game)
          (should-have-invoked :take-turns {:with [{:board-size    :3x3
                                                    :X             :human
                                                    :O             :easy-ai
                                                    :board         [[1 2 3] [4 5 6] [7 8 9]]
                                                    :current-token :X
                                                    :game-id       "123"}]}))))

    (it "asks the user if they want to play again"
      (with-redefs [output/play-again?       (stub :play-again)
                    records/read-last-record (constantly nil)]
        (with-in-str "N\n"
          (sut/start-game)
          (should-have-invoked :play-again))))

    (it "calls play-again? after a 3x3 game finishes"
      (with-redefs [records/read-last-record (constantly nil)]
        (with-in-str "N\n"
          (sut/start-game)
          (should-have-invoked :sut/play-again))))
    )
  )