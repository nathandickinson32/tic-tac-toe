(ns tic-tac-toe.test-boards-4x4c-spec
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

(def x-wins-with-1
  [["1" :X :X :X]
   [:O :O :O "8"]
   ["9" "10" "11" "12"]
   ["13" "14" "15" "16"]])

(def x-wins-top-row
  [[:X :X :X :X]
   [:O :O :O "8"]
   ["9" "10" "11" "12"]
   ["13" "14" "15" "16"]])

(def x-wins-left-col
  [[:X :O :O :O]
   [:X "6" "7" "8"]
   [:X "10" "11" "12"]
   [:X "14" "15" "16"]])

(def diagonal-dright-win-X-4x4
  [[:X "2" :O "4"]
   [:O :X :O "8"]
   ["9" "10" :X "12"]
   ["13" "14" "15" :X]])

(def diagonal-dleft-win-O-4x4
  [[:X :X "3" :O]
   [:X :X :O "8"]
   ["9" :O "11" "12"]
   [:O "14" "15" "16"]])