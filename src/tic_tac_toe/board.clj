(ns tic-tac-toe.board
  (:require [clojure.string :as str]))

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

(def all-positions-3x3x3
  (for [layer (range 3)
        row   (range 3)
        col   (range 3)]
    [layer row col]))

(defn ->positions-by-board-size [board-size]
  (condp = board-size
    :3x3 all-positions-3x3
    :4x4 all-positions-4x4
    :3x3x3 all-positions-3x3x3))

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

(defn full-board? [board board-size]
  (if (= :3x3x3 board-size)
    (every? #(contains? #{:X :O} %)
            (flatten (mapcat flatten board)))
    (every? #(contains? #{:X :O} %) (flatten board))))

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

(def center-line-diagonals
  [[[0 0 0] [1 1 1] [2 2 2]]
   [[0 0 2] [1 1 1] [2 2 0]]
   [[0 2 0] [1 1 1] [2 0 2]]
   [[0 2 2] [1 1 1] [2 0 0]]])

(defn ->diagonals-from-x [x]
  [[[0 x 0] [1 x 1] [2 x 2]]
   [[2 x 0] [1 x 1] [0 x 2]]])

(defn ->diagonals-from-y [y]
  [[[0 0 y] [1 1 y] [2 2 y]]
   [[2 0 y] [1 1 y] [0 2 y]]])

(defn ->x-plane-diags []
  (for [x         (range 3)
        diagonals (->diagonals-from-x x)]
    diagonals))

(defn ->y-plane-diags []
  (for [y         (range 3)
        diagonals (->diagonals-from-y y)]
    diagonals))

(defn ->all-diagonals []
  (concat
    (->x-plane-diags)
    (->y-plane-diags)
    center-line-diagonals))

(defn winning-row-2d? [board token]
  (some #(all-matching-tokens? % token) board))

(defn winning-col-2d? [board token]
  (let [columns-as-rows (apply mapv vector board)]
    (winning-row-2d? columns-as-rows token)))

(defn winning-row-3d? [board token]
  (some #(winning-row-2d? % token) board))

(defn winning-col-3d? [board token]
  (some #(winning-col-2d? % token) board))

(defn winning-diagonal-3x3? [board token]
  (or (all-matching-tokens? (diagonal-right-3x3 board) token)
      (all-matching-tokens? (diagonal-left-3x3 board) token)))

(defn winning-diagonal-3d? [board token]
  (some #(winning-diagonal-3x3? % token) board))

(defn winning-diagonal-4x4? [board token]
  (or (all-matching-tokens? (diagonal-right-4x4 board) token)
      (all-matching-tokens? (diagonal-left-4x4 board) token)))

(defn winning-diagonal? [board token board-size]
  (if (= board-size :3x3)
    (winning-diagonal-3x3? board token)
    (winning-diagonal-4x4? board token)))

(defn ->board-values [board line]
  (map #(get-in board %) line))

(defn winning-3d-line [board token [x y]]
  (let [line   (for [z (range 3)] [z x y])
        values (->board-values board line)]
    (all-matching-tokens? values token)))

(defn winning-line-3d? [board token]
  (some (fn [[x y]]
          (winning-3d-line board token [x y]))
        all-positions-3x3))

(defn winning-diag-line [board token line]
  (let [values (->board-values board line)]
    (all-matching-tokens? values token)))

(defn winning-diag-line-3d? [board token]
  (let [all-diagonals (->all-diagonals)]
    (some (fn [line]
            (winning-diag-line board token line))
          all-diagonals)))

(defn winning-3d-options [board token]
  (or (winning-row-3d? board token)
      (winning-col-3d? board token)
      (winning-line-3d? board token)
      (winning-diagonal-3d? board token)
      (winning-diag-line-3d? board token)))

(defn winning-2d-options [board token board-size]
  (or (winning-row-2d? board token)
      (winning-col-2d? board token)
      (winning-diagonal? board token board-size)))

(defn win? [board token board-size]
  (if (= board-size :3x3x3)
    (winning-3d-options board token)
    (winning-2d-options board token board-size)))

(defn game-over? [board token board-size]
  (or (win? board token board-size)
      (full-board? board board-size)))