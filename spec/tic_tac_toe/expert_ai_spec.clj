(ns tic-tac-toe.expert-ai-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.expert-ai :as sut]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.player-types :refer [->player-move]]
            [tic-tac-toe.test-boards-spec :as test-board]))

(describe "Expert AI"

  (context "when checking for winner"

    (it "returns true if X wins"
      (should (sut/end-game? test-board/top-winning-row-X)))

    (it "returns true if O wins"
      (should (sut/end-game? test-board/middle-winning-row-O)))

    (it "returns true if board is full"
      (should (sut/end-game? test-board/full-board)))

    (it "returns false if board is full"
      (should-not (sut/end-game? test-board/no-winners-board)))
    )

  (context "when getting a score"

    (it "returns 10 if current token wins"
      (should= 10 (sut/score test-board/top-winning-row-X :X)))

    (it "returns -10 if opponent token wins"
      (should= -10 (sut/score test-board/middle-winning-row-O :X)))

    (it "returns 0 if no winner"
      (should= 0 (sut/score test-board/no-winners-board :X)))
    )

  (context "minimax"

    (it "high scoring if next move is a win"
      (let [best-score  (sut/minimax test-board/left-winning-col-X nil :X 1)
            tie-score   (sut/minimax test-board/full-board nil :X 1)
            worst-score (sut/minimax test-board/middle-winning-col-O nil :X 1)]
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
        (should= [0 1] (sut/choose-best-move board :X 8))))

    (it "chooses any corner on an empty board"
      (let [board   output/starting-board
            corners #{[0 0] [0 2] [2 0] [2 2]}
            move    (sut/choose-best-move board :X 5)]
        (should-contain move corners)))

    (it "chooses a winning move"
      (let [board test-board/choose-win-over-block]
        (should= [1 0] (sut/choose-best-move board :X 4))))

    (it "chooses a blocking move"
      (let [board test-board/O-should-block]
        (should= [1 2] (sut/choose-best-move board :X 3))))

    (it "chooses the best available move for O"
      (let [board [[:X :O :X]
                   [\space :O \space]
                   [\space :X \space]]]
        (should-contain (sut/choose-best-move board :O 7) [[1 0] [1 2]])))

    (it "chooses the best available move when values are even for x and o"
      (let [board [[:X :O :X]
                   [\space \space \space]
                   [:O :X \space]]]
        (should-contain (sut/choose-best-move board :O 7) [[1 2] [2 2]])))

    (it "AI never loses as X playing first"
      (let [all-finished-games (loop [unfinished-games [(board/make-move output/starting-board (sut/choose-best-move output/starting-board :X 0) :X)]
                                      finished-games   []]
                                 (if (empty? unfinished-games)

                                   finished-games

                                   (let [opponent-boards (mapcat (fn [board]
                                                                   (map (fn [move]
                                                                          (board/make-move board move :O))
                                                                        (board/available-moves board)))
                                                                 unfinished-games)
                                         next-ai-boards  (map #(board/make-move % (sut/choose-best-move % :X 0) :X) opponent-boards)
                                         {finished true unfinished false} (group-by (comp boolean sut/end-game?) next-ai-boards)]
                                     (recur unfinished (concat finished-games finished)))))]
        (should (every? #(cond
                           (board/win? % :X) true
                           (and (board/full-board? %)
                                (not (board/win? % :O))) true
                           :else false)
                        all-finished-games))))

    (it "AI never loses as O playing second"
      (let [all-finished-games (loop [unfinished-games (map #(board/make-move output/starting-board % :X) (board/available-moves output/starting-board))
                                      finished-games   []]
                                 (if (empty? unfinished-games)
                                   finished-games
                                   (let [next-ai-boards  (map #(board/make-move % (sut/choose-best-move % :O 0) :O) unfinished-games)
                                         opponent-boards (mapcat (fn [board]
                                                                   (map (fn [move]
                                                                          (board/make-move board move :O))
                                                                        (board/available-moves board)))
                                                                 next-ai-boards)
                                         {finished true unfinished false} (group-by (comp boolean sut/end-game?) opponent-boards)]
                                     (recur unfinished (concat finished-games finished)))))]
        (should (every? #(cond
                           (board/win? % :O) true
                           (and (board/full-board? %)
                                (not (board/win? % :X))) true
                           :else false)
                        all-finished-games))))
    )

  (context "expert AI ->player-move"

    (it "one move available"
      (let [board (board/make-move test-board/full-board [0 1] \2)
            state {:X :expert-ai :O :human :board board :current-token :X :depth 8}]
        (should= [0 1] (->player-move state))))

    (it "chooses any corner on an empty board"
      (let [state   {:X :expert-ai :O :human :board output/starting-board :current-token :X :depth 0}
            corners #{[0 0] [0 2] [2 0] [2 2]}
            move    (->player-move state)]
        (should-contain move corners)))

    (it "chooses a winning move"
      (let [state {:X :expert-ai :O :human :board test-board/choose-win-over-block :current-token :X :depth 4}
            move  (->player-move state)]
        (should= [1 0] move)))

    (it "chooses a blocking move"
      (let [state {:X :expert-ai :O :human :board test-board/O-should-block :current-token :X :depth 3}]
        (should= [1 2] (->player-move state))))
    )

  (context "memoized-minimax"

    (it "high scoring if next move is a win"
      (let [best-score  (sut/memoized-minimax test-board/left-winning-col-X nil :X 1)
            tie-score   (sut/memoized-minimax test-board/full-board nil :X 1)
            worst-score (sut/memoized-minimax test-board/middle-winning-col-O nil :X 1)]
        (should> best-score tie-score)
        (should> tie-score worst-score)))

    (it "gives higher scores to better moves"
      (letfn [(example-minimax [board maximizing-token move]
                (let [next-board (board/make-move board move maximizing-token)]
                  (sut/memoized-minimax next-board (board/switch-player maximizing-token) maximizing-token 1)))]
        (let [board          [[:X :X \3]
                              [:O :O \6]
                              [\7 \8 \9]]
              best-move      (example-minimax board :X [0 2])
              next-best-move (example-minimax board :X [1 2])
              worst-move     (example-minimax board :X [2 2])]
          (should> best-move next-best-move)
          (should> next-best-move worst-move))))

    (it "returns 0 for a tie"
      (let [board [[:X :X :O]
                   [:O :O :X]
                   [:X :X :O]]]
        (should= -1 (sut/memoized-minimax board :X :X 1))))
    )
  )