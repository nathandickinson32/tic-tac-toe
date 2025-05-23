(ns tic-tac-toe.core-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.core :refer :all]))

(describe "tic tac toe"

(context "output message"
  (it "returns correct output message"
    (should= "Welcome to Tic Tac Toe!" (output "Welcome to Tic Tac Toe!"))))

  )
