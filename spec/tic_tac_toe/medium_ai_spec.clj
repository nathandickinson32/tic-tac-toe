(ns tic-tac-toe.medium-ai-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.player-types :refer [->player-move]]
            [tic-tac-toe.test-boards-3x3-spec :as test-board]
            [tic-tac-toe.medium-ai :as sut]))

(describe "medium level AI"

  (context "chooses rand move between easy and expert AI"

    (it "returns a list of medium AI moves"
      (should= [:easy-ai :expert-ai] sut/medium-ai-moves))

    (it "one move available"
      (let [board (board/make-move test-board/full-board [0 1] "2")
            state {:X :medium-ai :O :human :board board :current-token :X :board-size :3x3}]
        (should= [0 1] (->player-move state))))

    ;(it "moves with easy ai"
    ;  (with-redefs [sut/medium-ai-moves [:easy-ai]]
    ;    (should= [0 0] nil)))
    ;
    ;(it "moves with expert ai"
    ;  (with-redefs [sut/medium-ai-moves [:expert-ai]]
    ;    (should= [0 0] nil)))
    )
  )