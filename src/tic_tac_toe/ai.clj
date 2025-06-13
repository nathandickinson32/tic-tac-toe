(ns tic-tac-toe.ai
  (:require [tic-tac-toe.human :as human]
            [tic-tac-toe.player-types :refer [->player-move]]
            [tic-tac-toe.board :as board]))

(def all-positions
  (for [row (range 3)
        col (range 3)]
    [row col]))

(defn available-moves [board]
  (filter (partial human/space-available? board) all-positions))

(defn choose-random-move [board]
  (rand-nth (available-moves board)))

(defn end-game? [board]
  (or (board/win? board :X)
      (board/win? board :O)
      (board/full-board? board)))

(defn score [board token]
  (cond
    (board/win? board token) 10
    (board/win? board (board/switch-player token)) -10
    :else 0))

(defn score-end-game [board max-token depth]
  (- (score board max-token) depth))

(defn ->score-one-move [next-board token max-token depth minimax]
  (minimax next-board (board/switch-player token) max-token (inc depth)))

(defn ->score-moves [board token max-token depth minimax moves]
  (map #(let [next-board (board/make-move board % token)
              score      (->score-one-move next-board token max-token depth minimax)]
          score)
       moves))

(defn ->best-score [scores maximizing?]
  (if maximizing?
    (apply max scores)
    (apply min scores)))

(defn minimax [board token max-token depth]
  (if (end-game? board)
    (score-end-game board max-token depth)
    (let [moves       (available-moves board)
          scores      (->score-moves board token max-token depth minimax moves)
          maximizing? (= token max-token)]
      (->best-score scores maximizing?))))


(defn choose-best-move [board token]
  (->> (available-moves board)
       (map (fn [move]
              (let [next-board (board/make-move board move token)
                    score (->score-one-move next-board token token 1 minimax)]
                {:move move :score score})))
       (apply max-key :score)
       :move))

(defmethod ->player-move :easy-ai [{:keys [board]}]
  (choose-random-move board))

(defmethod ->player-move :expert-ai [{:keys [board current-token]}]
  (choose-best-move board current-token))