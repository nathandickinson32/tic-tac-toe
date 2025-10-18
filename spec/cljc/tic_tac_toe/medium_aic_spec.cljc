(ns tic-tac-toe.medium-aic-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.player-typesc :refer [->player-move]]
            [tic-tac-toe.test-boards-3x3c-spec :as test-board]
            [tic-tac-toe.medium-aic :as sut]))

(describe "medium level AI"

  (context "chooses rand move between easy and expert AI"
    (with-stubs)

    (it "returns a list of medium AI moves"
      (should= [:easy-ai :expert-ai] sut/medium-ai-moves))

    (it "moves with expert ai"
      (with-redefs [sut/medium-ai-moves [:expert-ai]]
        (let [board test-board/move-1-for-tie
              state {:X :medium-ai :O :human :board board :current-token :X :board-size :3x3}]
          (should= [0 0] (->player-move state)))))

    (it "moves with easy ai"
      (with-redefs [sut/medium-ai-moves [:easy-ai]]
        (let [board test-board/move-1-for-tie
              state {:X :medium-ai :O :human :board board :current-token :X :board-size :3x3}]
          (should= [0 0] (->player-move state)))))
    )
  )