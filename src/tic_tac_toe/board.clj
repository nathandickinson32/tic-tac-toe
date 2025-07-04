(ns tic-tac-toe.board
  (:require [clojure.string :as str]
            [tic-tac-toe.output :as output]))

(defn ->clean-user-input []
  (-> (read-line)
      str/trim
      str/upper-case))

(def all-positions-3x3
  (for [row (range 3)
        col (range 3)]
    [row col]))

(def all-positions-4x4
  (for [row (range 4)
        col (range 4)]
    [row col]))

(defn ->positions-by-board-size [board-size]
  (cond
    (= :3x3 board-size) all-positions-3x3
    (= :4x4 board-size) all-positions-4x4))

(defn switch-player [current-player]
  (if (= :X current-player)
    :O
    :X))

(defn space-available? [board move]
  (let [symbol (get-in board move)]
    (not (or (= symbol :X) (= symbol :O)))))

(defn available-moves [board board-size]
  (let [all-positions (->positions-by-board-size board-size)]
    (filter (partial space-available? board) all-positions)))

(defn make-move [board move token]
  (assoc-in board move token))

(defn full-board? [board]
  (every? #{:X :O} (flatten board)))

(defn all-matching-tokens? [row token]
  (every? #(= % token) row))

(defn diagonal-right-3x3 [board]
  [(get-in board [0 0])
   (get-in board [1 1])
   (get-in board [2 2])])

(defn diagonal-left-3x3 [board]
  [(get-in board [0 2])
   (get-in board [1 1])
   (get-in board [2 0])])

(defn diagonal-right-4x4 [board]
  [(get-in board [0 0])
   (get-in board [1 1])
   (get-in board [2 2])
   (get-in board [3 3])])

(defn diagonal-left-4x4 [board]
  [(get-in board [0 3])
   (get-in board [1 2])
   (get-in board [2 1])
   (get-in board [3 0])])

(defn winning-row? [board token]
  (some #(all-matching-tokens? % token) board))

(defn winning-col? [board token]
  (let [columns-as-rows (apply mapv vector board)]
    (winning-row? columns-as-rows token)))

(defn winning-diagonal-3x3? [board token]
  (or (all-matching-tokens? (diagonal-right-3x3 board) token)
      (all-matching-tokens? (diagonal-left-3x3 board) token)))

(defn winning-diagonal-4x4? [board token]
  (or (all-matching-tokens? (diagonal-right-4x4 board) token)
      (all-matching-tokens? (diagonal-left-4x4 board) token)))

(defn winning-diagonal? [board token board-size]
  (if (= board-size :3x3)
    (winning-diagonal-3x3? board token)
    (winning-diagonal-4x4? board token)))

(defn win? [board token board-size]
  (or (winning-row? board token)
      (winning-col? board token)
      (winning-diagonal? board token board-size)))

(defn game-over? [board token board-size]
  (cond
    (win? board token board-size) (do (output/winner-message token) true)
    (full-board? board) (do (output/draw-message) true)))