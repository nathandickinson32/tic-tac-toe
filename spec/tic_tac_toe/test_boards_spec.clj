(ns tic-tac-toe.test-boards-spec
  (:require [clojure.test :refer :all]))

(def x-one-move
  [[:X \space \space]
   [\space \space \space]
   [\space \space \space]])

(def no-winners-board
  [[:X \space :X]
   [:O :O \space]
   [\space \space \space]])

(def no-winners-board1
  [[:X \space :X]
   [:O :O \space]
   [:X \space \space]])

(def top-almost-winning-X
  [[:X :X \3]
   [\4 \5 \6]
   [\7 \8 \9]])

(def top-winning-row-X
  [[:X :X :X]
   [:O :O \space]
   [\space \space \space]])

(def bottom-winning-row-X
  [[:O :O \space]
   [:O \space \space]
   [:X :X :X]])

(def middle-winning-row-O
  [[:X \space :X]
   [:O :O :O]
   [:X \space \space]])

(def left-winning-col-X
  [[:X :O \space]
   [:X :O :O]
   [:X \space :X]])

(def right-winning-col-X
  [[\space :O :X]
   [:O :O :X]
   [:X \space :X]])

(def middle-winning-col-O
  [[:X :O :X]
   [\space :O \space]
   [:X :O \space]])

(def next-move-wins-X-O
  [[:X :O :X]
   [\space \space :O]
   [:X :O \space]])

(def next-move-wins-X
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

(def diagonal-dright-win-X
  [[:X :O :O]
   [:O :X :X]
   [:X :O :X]])

(def diagonal-dleft-win-X
  [[:X :O :X]
   [:O :X :X]
   [:X :O :O]])

(def diagonal-dleft-win-O
  [[:X \space :O]
   [:O :O :X]
   [:O :X :X]])

(def diagonal-dright-win-O
  [[:O \space :X]
   [:X :O :X]
   [:X :O :O]])

(def O-should-block
  [[:O \2 \3]
   [:X :X \6]
   [\7 \8 \9]])

(def choose-win-over-block
  [[:X :O \3]
   [\4 \5 \6]
   [:X :O \9]])

(def random-after-depth-6
  [[:X :O \3]
   [:O :X \6]
   [:X :O \9]])