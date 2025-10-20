(ns tic-tac-toe.test-boards-3x3c-spec)

(def test-starting-board-3x3
  [["1" "2" "3"]
   ["4" "5" "6"]
   ["7" "8" "9"]])

(def no-winners-board
  [[:X "2" :X]
   [:O :O "6"]
   ["7" "8" "9"]])

(def no-winners-board1
  [[:X "2" :X]
   [:O :O "7"]
   [:X "8" "9"]])

(def top-almost-winning-X
  [[:X :X "3"]
   ["4" "5" "6"]
   ["7" "8" "9"]])

(def top-winning-row-X
  [[:X :X :X]
   [:O :O "6"]
   ["7" "8" "9"]])

(def bottom-winning-row-X
  [[:O :O "3"]
   [:O "5" "6"]
   [:X :X :X]])

(def middle-winning-row-O
  [[:X "2" :X]
   [:O :O :O]
   [:X "8" "9"]])

(def left-winning-col-X
  [[:X :O "3"]
   [:X :O :O]
   [:X "8" :X]])

(def right-winning-col-X
  [["1" :O :X]
   [:O :O :X]
   [:X "8" :X]])

(def middle-winning-col-O
  [[:X :O :X]
   ["4" :O "6"]
   [:X :O "9"]])

(def next-move-wins-X-O
  [[:X :O :X]
   ["4" "5" :O]
   [:X :O "9"]])

(def next-move-wins-X
  [[:X "2" :X]
   ["4" "5" :O]
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
  [[:X "2" :O]
   [:O :O :X]
   [:O :X :X]])

(def diagonal-dright-win-O
  [[:O "2" :X]
   [:X :O :X]
   [:X :O :O]])

(def O-should-block
  [[:O "2" "3"]
   [:X :X "6"]
   ["7" "8" "9"]])

(def choose-win-over-block
  [[:X :O "3"]
   ["4" "5" "6"]
   [:X :O "9"]])

(def move-1-for-tie
  [["1" :X :O]
   [:O :O :X]
   [:X :X :O]])