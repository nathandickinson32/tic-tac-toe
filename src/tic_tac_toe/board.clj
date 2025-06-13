(ns tic-tac-toe.board)

(defn switch-player [current-player]
  (if (= :X current-player)
    :O
    :X))

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