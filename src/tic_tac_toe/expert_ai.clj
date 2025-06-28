(ns tic-tac-toe.expert-ai
  (:require [tic-tac-toe.player-types :refer [->player-move]]
            [tic-tac-toe.board-3x3 :as board-3x3]))

(defn end-game? [board]
  (or (board-3x3/win? board :X)
      (board-3x3/win? board :O)
      (board-3x3/full-board? board)))

(defn score [board token]
  (cond
    (board-3x3/win? board token) 10
    (board-3x3/win? board (board-3x3/switch-player token)) -10
    :else 0))

(defn score-end-game [board max-token depth]
  (- (score board max-token) depth))

(declare memoized-minimax)

(defn ->score-one-move [next-board token max-token depth board-size]
  (memoized-minimax next-board (board-3x3/switch-player token) max-token (inc depth) board-size))

(defn ->score-moves [board token max-token depth moves board-size]
  (->> moves
       (map #(let [next-board (board-3x3/make-move board % token)]
               (->score-one-move next-board token max-token depth board-size)))))

(defn negative-scores? [scores]
  (if (some neg? scores)
    (apply max scores)
    (apply max scores)))

(defn positive-scores? [scores depth]
  (if (some pos? scores)
    (apply min scores)
    (/ (apply + scores) depth)))

(defn ->best-score [scores maximizing? depth]
  (if maximizing?
    (negative-scores? scores)
    (positive-scores? scores depth)))

(defn minimax [board token max-token depth board-size]
  (if (end-game? board)
    (score-end-game board max-token depth)
    (let [moves       (board-3x3/available-moves board board-size)
          scores      (->score-moves board token max-token depth moves board-size)
          maximizing? (= token max-token)]
      (->best-score scores maximizing? depth))))

(def memoized-minimax
  (memoize minimax))

(defn evaluate-move [board token move depth board-size]
  (let [next-board (board-3x3/make-move board move token)
        score      (->score-one-move next-board token token depth board-size)]
    {:move move :score score}))

(defn choose-best-move [board token depth board-size]
  (->> (board-3x3/available-moves board board-size)
       (map #(evaluate-move board token % depth board-size))
       (apply max-key :score)
       :move))

(defmethod ->player-move :expert-ai [{:keys [board current-token depth board-size]}]
  (choose-best-move board current-token depth board-size))