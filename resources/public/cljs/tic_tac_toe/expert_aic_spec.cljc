(ns tic-tac-toe.expert-aic-spec
  (:require [speclj.core :refer [it describe context should-contain should> should-be should= should-not should]]
            [tic-tac-toe.expert-aic :as sut]
            [tic-tac-toe.boardc :as board]
            [tic-tac-toe.player-typesc :refer [->player-move]]
            [tic-tac-toe.test-boards-3x3c-spec :as test-board-3x3]
            [tic-tac-toe.test-boards-4x4c-spec :as test-board-4x4]))

(defn opponent-moves [[board depth] token board-size]
  (let [available-moves (board/available-moves board board-size)]
    (map #(vector (board/make-move board % token)
                  (inc depth))
         available-moves)))

(defn simulate-opponent-moves [unfinished-games opponent-token board-size]
  (mapcat #(opponent-moves % opponent-token board-size) unfinished-games))

(defn ai-make-move [[board depth] ai-token board-size]
  [(board/make-move board (sut/choose-best-move board ai-token board-size) ai-token)
   (inc depth)])

(defn simulate-ai-moves [opponent-boards ai-token board-size]
  (map #(ai-make-move % ai-token board-size) opponent-boards))

(defn ->finished-unfinished-map [board-depth-pairs board-size]
  (group-by #(board/end-game? (first %) board-size) board-depth-pairs))

(defn simulate-next-boards [unfinished-games finished-games ai-token opponent-token board-size]
  (let [opponent-boards (simulate-opponent-moves unfinished-games opponent-token board-size)
        {opponent-finished true
         unfinished        false} (->finished-unfinished-map opponent-boards board-size)
        next-ai-boards  (simulate-ai-moves unfinished ai-token board-size)
        {ai-finished true
         unfinished  false} (->finished-unfinished-map next-ai-boards board-size)]
    {:unfinished unfinished
     :finished   (concat finished-games ai-finished opponent-finished)}))

(defn all-finished-games
  ([starting-boards ai-token opponent-token board-size]
   (all-finished-games starting-boards [] ai-token opponent-token board-size))
  ([unfinished-games finished-games ai-token opponent-token board-size]
   (if (empty? unfinished-games)
     finished-games
     (let [{:keys [unfinished finished]}
           (simulate-next-boards unfinished-games finished-games ai-token opponent-token board-size)]
       (all-finished-games unfinished finished ai-token opponent-token board-size)))))

(defn finished-games-ai-plays-first [board-size]
  (let [ai-first-move (ai-make-move [board/starting-board-3x3 0] :X board-size)]
    (all-finished-games [ai-first-move] :X :O board-size)))

(defn finished-games-ai-plays-second [board-size]
  (let [x-starting-boards (simulate-opponent-moves [[board/starting-board-3x3 0]] :X board-size)
        o-response-boards (simulate-ai-moves x-starting-boards :O board-size)]
    (all-finished-games o-response-boards :O :X board-size)))

(defn ai-win-every-game [all-finished-games token board-size]
  (every? #(or (board/win? (first %) token board-size)
               (board/full-board? (first %) board-size))
          all-finished-games))

(describe "Expert AI"

  (context "when checking to end minimax"

    (it "returns true if X wins"
      (should (board/end-game? test-board-3x3/top-winning-row-X :3x3)))

    (it "returns true if O wins"
      (should (board/end-game? test-board-3x3/middle-winning-row-O :3x3)))

    (it "returns true if board is full"
      (should (board/end-game? test-board-3x3/full-board :3x3)))

    (it "returns false if board is full"
      (should-not (board/end-game? test-board-3x3/no-winners-board :3x3)))

    (it "returns false if depth is 3 with 4x4 board"
      (should-not (sut/game-over? test-board-4x4/x-wins-with-1 :4x4 3)))

    (it "returns true if depth is 7 with 4x4 board"
      (should (sut/game-over? test-board-4x4/x-wins-with-1 :4x4 7)))
    )

  (context "when getting a score"

    (it "return positive for winner negative for loser"
      (let [winning-score (sut/score test-board-3x3/top-winning-row-X :X :3x3)
            losing-score  (sut/score test-board-3x3/middle-winning-row-O :X :3x3)]
        (should= winning-score (abs losing-score))
        (should-be neg? losing-score)))

    (it "returns 0 if no winner"
      (should= 0 (sut/score test-board-3x3/no-winners-board :X :3x3)))
    )

  (context "minimax"

    (it "high scoring if next move is a win 3x3"
      (let [best-score  (sut/minimax test-board-3x3/left-winning-col-X nil :X 1 :3x3)
            tie-score   (sut/minimax test-board-3x3/full-board nil :X 1 :3x3)
            worst-score (sut/minimax test-board-3x3/middle-winning-col-O nil :X 1 :3x3)]
        (should> best-score tie-score)
        (should> tie-score worst-score)))

    (it "high scoring if next move is a win 4x4"
      (let [best-score  (sut/minimax test-board-4x4/x-wins-top-row nil :X 1 :4x4)
            tie-score   (sut/minimax test-board-4x4/full-board nil :X 1 :4x4)
            worst-score (sut/minimax test-board-4x4/diagonal-dleft-win-O-4x4 nil :X 1 :4x4)]
        (should> best-score tie-score)
        (should> tie-score worst-score)))

    (it "gives higher scores to better moves"
      (letfn [(example-minimax [board maximizing-token move]
                (let [next-board (board/make-move board move maximizing-token)]
                  (sut/minimax next-board (board/switch-player maximizing-token) maximizing-token 1 :3x3)))]
        (let [board          [[:X :X "3"]
                              [:O :O "6"]
                              ["7" "8" "9"]]
              best-move      (example-minimax board :X [0 2])
              next-best-move (example-minimax board :X [1 2])
              worst-move     (example-minimax board :X [2 2])]
          (should> best-move next-best-move)
          (should> next-best-move worst-move))))

    (it "maximizes score for maximizing player"
      (let [board            [[:X :X "3"]
                              [:O :O "6"]
                              ["7" "8" "9"]]
            maximizing-token :X
            score            (sut/minimax board maximizing-token maximizing-token 1 :3x3)]
        (should (>= score 0))))

    (it "minimizes score when maximizing player loses"
      (let [board [[:X :X "3"]
                   [:O :O "6"]
                   ["7" "8" "9"]]
            score (sut/minimax board :O :X 1 :3x3)]
        (should (< score 0))))

    (it "returns 0 for a tie"
      (let [board [[:X :X :O]
                   [:O :O :X]
                   [:X :X :O]]]
        (should= -1 (sut/minimax board :X :X 1 :3x3))))
    )

  (context "when choosing the best move 3x3"

    (it "returns the only available move"
      (let [board (board/make-move test-board-3x3/full-board [0 1] "2")]
        (should= [0 1] (sut/choose-best-move board :X :3x3))))

    (it "chooses any corner on an empty board"
      (let [board   board/starting-board-3x3
            corners #{[0 0] [0 2] [2 0] [2 2]}
            move    (sut/choose-best-move board :X :3x3)]
        (should-contain move corners)))

    (it "chooses a winning move"
      (let [board test-board-3x3/choose-win-over-block]
        (should= [1 0] (sut/choose-best-move board :X :3x3))))

    (it "chooses a blocking move"
      (let [board test-board-3x3/O-should-block]
        (should= [1 2] (sut/choose-best-move board :X :3x3))))

    (it "chooses the best available move for O"
      (let [board [[:X :O :X]
                   ["4" :O "6"]
                   ["7" :X "9"]]]
        (should-contain (sut/choose-best-move board :O :3x3) [[1 0] [1 2]])))

    (it "chooses the best available move when values are even for x and o"
      (let [board [[:X :O :X]
                   ["4" "5" "6"]
                   [:O :X "9"]]]
        (should-contain (sut/choose-best-move board :O :3x3) [[1 2] [2 2]])))

    (it "AI never loses as X playing first"
      (let [all-finished-games (finished-games-ai-plays-first :3x3)]
        (should (ai-win-every-game all-finished-games :X :3x3))))

    (it "AI never loses as O playing second"
      (let [all-finished-games (finished-games-ai-plays-second :3x3)]
        (should (ai-win-every-game all-finished-games :O :3x3))))
    )

  (context "4x4 expert-ai"

    (it "chooses a blocking move 4x4"
      (let [board
            [[:X :X :X "4"]
             ["5" "6" "7" "8"]
             ["9" "10" "11" "12"]
             ["13" "14" :O :O]]]
        (should= [0 3] (sut/choose-best-move board :O :4x4))))

    (it "chooses a winning over blocking 4x4"
      (let [board
            [[:X :X :X "4"]
             ["5" "6" "7" "8"]
             ["9" "10" "11" "12"]
             ["13" :O :O :O]]]
        (should= [3 0] (sut/choose-best-move board :O :4x4))))
    )

  (context "3x3x3 expert-ai"

    (it "chooses a blocking move 3x3x3"
      (let [board [[[:X :X "3"]
                    ["4" "5" "6"]
                    ["7" "8" "9"]]

                   [["10" "11" "12"]
                    ["13" "14" "15"]
                    ["16" "17" "18"]]

                   [["19" "20" "21"]
                    ["22" "23" "24"]
                    ["25" :O :O]]]]
        (should= [2 2 0] (sut/choose-best-move board :O :3x3x3))))

    (it "chooses winning over blocking 3x3x3"
      (let [board [[[:X :X "3"]
                    ["4" "5" "6"]
                    ["7" "8" "9"]]

                   [["10" "11" "12"]
                    ["13" "14" "15"]
                    ["16" "17" "18"]]

                   [["19" "20" "21"]
                    ["22" "23" "24"]
                    ["25" "26" :O]]]]
        (should= [0 0 2] (sut/choose-best-move board :O :3x3x3))))
    )

  (context "expert AI ->player-move"

    (it "one move available"
      (let [board (board/make-move test-board-3x3/full-board [0 1] "2")
            state {:X :expert-ai :O :human :board board :current-token :X :depth 8 :board-size :3x3}]
        (should= [0 1] (->player-move state))))

    (it "chooses any corner on an empty board"
      (let [state   {:X :expert-ai :O :human :board board/starting-board-3x3 :current-token :X :depth 0 :board-size :3x3}
            corners #{[0 0] [0 2] [2 0] [2 2]}
            move    (->player-move state)]
        (should-contain move corners)))

    (it "chooses a winning move"
      (let [state {:X :expert-ai :O :human :board test-board-3x3/choose-win-over-block :current-token :X :depth 4 :board-size :3x3}
            move  (->player-move state)]
        (should= [1 0] move)))

    (it "chooses a blocking move"
      (let [state {:X :expert-ai :O :human :board test-board-3x3/O-should-block :current-token :X :depth 3 :board-size :3x3}]
        (should= [1 2] (->player-move state))))
    )

  (context "memoized-minimax"

    (it "high scoring if next move is a win"
      (let [best-score  (sut/memoized-minimax test-board-3x3/left-winning-col-X nil :X 1 :3x3)
            tie-score   (sut/memoized-minimax test-board-3x3/full-board nil :X 1 :3x3)
            worst-score (sut/memoized-minimax test-board-3x3/middle-winning-col-O nil :X 1 :3x3)]
        (should> best-score tie-score)
        (should> tie-score worst-score)))

    (it "gives higher scores to better moves"
      (letfn [(example-minimax [board maximizing-token move board-size]
                (let [next-board (board/make-move board move maximizing-token)]
                  (sut/memoized-minimax next-board (board/switch-player maximizing-token) maximizing-token 1 board-size)))]
        (let [board          [[:X :X "3"]
                              [:O :O "6"]
                              ["7" "8" "9"]]
              best-move      (example-minimax board :X [0 2] :3x3)
              next-best-move (example-minimax board :X [1 2] :3x3)
              worst-move     (example-minimax board :X [2 2] :3x3)]
          (should> best-move next-best-move)
          (should> next-best-move worst-move))))

    (it "returns 0 for a tie"
      (let [board [[:X :X :O]
                   [:O :O :X]
                   [:X :X :O]]]
        (should= -1 (sut/memoized-minimax board :X :X 1 :3x3))))
    )
  )