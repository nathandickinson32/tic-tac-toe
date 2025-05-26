(ns tic-tac-toe.core-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.core :as core]
            [tic-tac-toe.main :as main]))

(describe "tic tac toe"

  (context "output message"

    (it "returns correct output message"
      (let
        [output
         (str
           "Welcome to Tic Tac Toe\n"
           "Select grid coordinates for symbol [0-2] [row col]\n"
           "Example: 1 1 places symbol in middle row middle column.\n")]
        (should= output (with-out-str (core/greeting))))

      )

    )

  )
