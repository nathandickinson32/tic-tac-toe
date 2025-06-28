(ns tic-tac-toe.medium-ai-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.board-3x3 :as board-3x3]
            [tic-tac-toe.player-types :refer [->player-move]]
            [tic-tac-toe.test-boards-3x3-spec :as test-board]
            [tic-tac-toe.medium-ai :as sut]))

(describe "medium level AI"

  (context "chooses rand move between easy and expert AI"

    (it "returns a list of medium AI moves"
      (should= [:easy-ai :expert-ai] sut/medium-ai-moves))

    (it "one move available"
      (let [board (board-3x3/make-move test-board/full-board [0 1] \2)
            state {:X :medium-ai :O :human :board board :current-token :X :depth 8 :board-size :3x3}]
        (should= [0 1] (->player-move state))))
    )
  )
