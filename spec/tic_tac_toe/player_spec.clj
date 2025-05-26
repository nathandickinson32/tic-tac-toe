(ns tic-tac-toe.player-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.player :as sut]))

(describe "player"



  (context "switching player"

    (it "switches from player X to player O"

      (should= \O (sut/switch-player \X))
      )

    (it "switches from player O to player"

      (should= \X (sut/switch-player \O)))

    )

  )
