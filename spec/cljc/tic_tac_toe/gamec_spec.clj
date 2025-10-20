(ns tic-tac-toe.gamec-spec
  (:require [tic-tac-toe.game :as sut]
            [speclj.core :refer [it describe context should=]]))

(describe "common game functions"

  (context "board sizes"

         (it "returns a map of potential board sizes"
             (should= {"9" :3x3 "16" :4x4 "27" :3x3x3} sut/board-sizes))
         )

  (context "tokens"

    (it "returns a map of available tokens"
      (should= {"X" :X "O" :O} sut/tokens))
    )

  (context "players"

    (it "returns a map of potential players"
      (should= {"1" :human "2" :easy-ai "3" :medium-ai "4" :expert-ai} sut/players))
    )
  )