(ns tic-tac-toe.expert-ai-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.expert-ai :as sut]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.player-types :refer [->player-move]]
            [tic-tac-toe.test-boards-spec :as test-board]))

#_(defn ->expert-move-state [board]
  (assoc (get game/game-modes "5") :board board))

#_(defn ->expert-move-state-2 [board]
  (assoc (get game/game-modes "4") :board board :current-token :O))

(describe "Expert AI"

  (context "when checking for winner"

    (it "returns true if X wins"
      (should (sut/end-game? test-board/winning-row1)))

    (it "returns true if O wins"
      (should (sut/end-game? test-board/winning-row3)))

    (it "returns true if board is full"
      (should (sut/end-game? test-board/full-board)))

    (it "returns false if board is full"
      (should-not (sut/end-game? test-board/no-winners-board)))
    )

  (context "when getting a score"

    (it "returns 10 if current token wins"
      (should= 10 (sut/score test-board/winning-row1 :X)))

    (it "returns -10 if opponent token wins"
      (should= -10 (sut/score test-board/winning-row3 :X)))

    (it "returns 0 if no winner"
      (should= 0 (sut/score test-board/no-winners-board :X)))
    )

  (context "minimax"

    (it "high scoring if next move is a win"
      (let [best-score  (sut/minimax test-board/winning-col1 nil :X 1)
            tie-score   (sut/minimax test-board/full-board nil :X 1)
            worst-score (sut/minimax test-board/winning-col3 nil :X 1)]
        (should> best-score tie-score)
        (should> tie-score worst-score)))

    (it "gives higher scores to better moves"
      (letfn [(example-minimax [board maximizing-token move]
                (let [next-board (board/make-move board move maximizing-token)]
                  (sut/minimax next-board (board/switch-player maximizing-token) maximizing-token 1)))]
        (let [board          [[:X :X \3]
                              [:O :O \6]
                              [\7 \8 \9]]
              best-move      (example-minimax board :X [0 2])
              next-best-move (example-minimax board :X [1 2])
              worst-move     (example-minimax board :X [2 2])]
          (should> best-move next-best-move)
          (should> next-best-move worst-move))))

    (it "maximizes score for maximizing player"
      (let [board            [[:X :X \space]
                              [:O :O \space]
                              [\space \space \space]]
            maximizing-token :X]
        (let [score (sut/minimax board maximizing-token maximizing-token 1)]
          (should (>= score 0)))))

    (it "minimizes score when maximizing player loses"
      (let [board [[:X :X \space]
                   [:O :O \space]
                   [\space \space \space]]]
        (let [score (sut/minimax board :O :X 1)]
          (should (< score 0)))))

    (it "returns 0 for a tie"
      (let [board [[:X :X :O]
                   [:O :O :X]
                   [:X :X :O]]]
        (should= -1 (sut/minimax board :X :X 1))))
    )

  (context "when choosing the best move"

    (it "returns the only available move"
      (let [board (board/make-move test-board/full-board [0 1] \2)]
        (should= [0 1] (sut/choose-best-move board :X))))


    (it "chooses any corner on an empty board"
      (let [board   output/starting-board
            corners #{[0 0] [0 2] [2 0] [2 2]}
            move    (sut/choose-best-move board :X)]
        (should-contain move corners)))

    (it "chooses a winning move"
      (let [board test-board/ai-test-board2]
        (should= [1 0] (sut/choose-best-move board :X))))


    (it "chooses a blocking move"
      (let [board test-board/ai-test-board1]
        (should= [1 2] (sut/choose-best-move board :X))))
    )

  #_(context "expert AI ->player-move"

    (it "one move available"
      (let [board (board/make-move test-board/full-board [0 1] \2)
            state (->expert-move-state board)]
        (should= [0 1] (->player-move state))))

    (it "chooses any corner on an empty board"
      (let [state   (->expert-move-state output/starting-board)
            corners #{[0 0] [0 2] [2 0] [2 2]}
            move    (->player-move state)]
        (should-contain move corners)))

    (it "chooses a winning move"
      (let [state (->expert-move-state test-board/ai-test-board2)
            move  (->player-move state)]
        (should= [1 0] move)))

    (it "chooses a blocking move"
      (let [state (->expert-move-state-2 test-board/ai-test-board1)
            move  (->player-move state)]
        (should= [1 2] move)))
    )
  )