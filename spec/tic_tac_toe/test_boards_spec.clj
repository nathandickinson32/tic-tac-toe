(ns tic-tac-toe.test-boards-spec
  (:require [clojure.test :refer :all]))

(def no-winners-board
  [[:X \space :X]
   [:O :O \space]
   [\space \space \space]])

(def no-winners-board1
  [[:X \space :X]
   [:O :O \space]
   [:X \space \space]])

(def winning-row1
  [[:X :X :X]
   [:O :O \space]
   [\space \space \space]])

(def winning-row2
  [[:O :O \space]
   [:O \space \space]
   [:X :X :X]])

(def winning-row3
  [[:X \space :X]
   [:O :O :O]
   [:X \space \space]])

(def winning-col1
  [[:X :O \space]
   [:X :O :O]
   [:X \space :X]])

(def winning-col2
  [[\space :O :X]
   [:O :O :X]
   [:X \space :X]])

(def winning-col3
  [[:X :O :X]
   [\space :O \space]
   [:X :O \space]])

(def not-full-board
  [[:X :O :X]
   [\space \space :O]
   [:X :O \space]])

(def not-full-board1
  [[:X \space :X]
   [\space \space :O]
   [:X :O :O]])

(def full-board
  [[:X :X :O]
   [:O :O :X]
   [:X :O :X]])

(def full-board2
  [[:O :X :O]
   [:O :X :X]
   [:X :O :X]])

(def diagonal-win1
  [[:X :O :O]
   [:O :X :X]
   [:X :O :X]])

(def diagonal-win2
  [[:X :O :X]
   [:O :X :X]
   [:X :O :O]])

(def diagonal-win3
  [[:X \space :O]
   [:O :O :X]
   [:O :X :X]])

(def diagonal-win4
  [[:O \space :X]
   [:X :O :X]
   [:X :O :O]])

(def ai-test-board1
  [[:O \2 \3]
   [:X :X \6]
   [\7 \8 \9]])

(def ai-test-board2
  [[:X :O \3]
   [\4 \5 \6]
   [:X :O \9]])