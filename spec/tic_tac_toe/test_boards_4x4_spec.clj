(ns tic-tac-toe.test-boards-4x4-spec
  (:require [speclj.core :refer :all]))

(def test-starting-board-4x4
  [["1" "2" "3" "4"]
   ["5" "6" "7" "8"]
   ["9" "10" "11" "12"]
   ["13" "14" "15" "16"]])

(def full-board
  [[:X :X :X :O]
   [:O :O :X :O]
   [:X :X :O :O]
   [:X :O :O :X]])