(ns tic-tac-toe.medium-ai-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.player-types :refer [->player-move]]
            [tic-tac-toe.test-boards-spec :as test-board]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.medium-ai :as sut]))

(describe "medium level AI"

  (context "difficulty expert-ai -> easy-ai"

    (it "one move available"
      (let [board (board/make-move test-board/full-board [0 1] \2)
            state {:X :medium-ai :O :human :board board :current-token :X :depth 8}]
        (should= [0 1] (->player-move state))))

    (it "chooses any corner on an empty board"
      (let [state   {:X :medium-ai :O :human :board output/starting-board :current-token :X :depth 0}
            corners #{[0 0] [0 2] [2 0] [2 2]}
            move    (->player-move state)]
        (should-contain move corners)))

    (it "chooses a blocking move when depth < 6"
      (let [state {:X :medium-ai :O :human :board test-board/O-should-block :current-token :X :depth 3}]
        (should= [1 2] (->player-move state))))

    (it "chooses random move when depth > 6"
      (with-redefs [rand-nth (constantly [1 2])]
        (should= [1 2] (sut/best-or-rand-move test-board/random-after-depth-6 :X 7))))
    )
  )
