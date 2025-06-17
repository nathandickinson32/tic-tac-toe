(ns tic-tac-toe.board
  (:require [clojure.string :as str]))

(defn ->clean-user-input []
  (-> (read-line)
      (str/trim)
      (str/upper-case)))

(def all-positions
  (for [row (range 3)
        col (range 3)]
    [row col]))

(defn switch-player [current-player]
  (if (= :X current-player)
    :O
    :X))

(defn space-available? [board move]
  (let [symbol (get-in board move)]
    (not (or (= symbol :X) (= symbol :O)))))

(defn available-moves [board]
  (filter (partial space-available? board) all-positions))

(defn make-move [board move token]
  (assoc-in board move token))

(defn full-board? [board]
  (every? #{:X :O} (flatten board)))

(defn three-matches? [row token]
  (every? #(= % token) row))

(defn diagonal-right [board]
  [(get-in board [0 0])
   (get-in board [1 1])
   (get-in board [2 2])])

(defn diagonal-left [board]
  [(get-in board [0 2])
   (get-in board [1 1])
   (get-in board [2 0])])

(defn winning-row? [board token]
  (some #(three-matches? % token) board))

(defn winning-col? [board token]
  (let [columns-as-rows (apply mapv vector board)]
    (winning-row? columns-as-rows token)))

(defn winning-diagonal? [board token]
  (or (three-matches? (diagonal-right board) token)
      (three-matches? (diagonal-left board) token)))

(defn win? [board token]
  (or (winning-row? board token)
      (winning-col? board token)
      (winning-diagonal? board token)))