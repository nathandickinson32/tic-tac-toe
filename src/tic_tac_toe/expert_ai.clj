(ns tic-tac-toe.expert-ai
  (:require [tic-tac-toe.player-types :refer [->player-move]]
            [tic-tac-toe.board :as board]))

(defn end-game? [board board-size]
  (or (board/win? board :X board-size)
      (board/win? board :O board-size)
      (board/full-board? board board-size)))

(defn game-over? [board board-size depth]
  (cond
    (= board-size :3x3) (end-game? board board-size)
    (= board-size :4x4) (or (end-game? board board-size)
                            (= depth 4))))

(defn score [board token board-size]
  (cond
    (board/win? board token board-size) 10
    (board/win? board (board/switch-player token) board-size) -10
    :else 0))

(defn score-end-game [board max-token depth board-size]
  (- (score board max-token board-size) depth))

(declare memoized-minimax)

(defn ->score-one-move [next-board token max-token depth board-size]
  (memoized-minimax next-board (board/switch-player token) max-token (inc depth) board-size))

(defn ->score-moves [board token max-token depth moves board-size]
  (->> moves
       (map #(let [next-board (board/make-move board % token)]
               (->score-one-move next-board token max-token depth board-size)))))

(defn negative-scores? [scores]
  (apply max scores))

(defn positive-scores? [scores depth]
  (if (some pos? scores)
    (apply min scores)
    (/ (apply + scores) depth)))

(defn ->best-score [scores maximizing? depth]
  (if maximizing?
    (negative-scores? scores)
    (positive-scores? scores depth)))

(defn evaluate-branch [board token max-token depth board-size]
  (let [moves       (board/available-moves board board-size)
        scores      (->score-moves board token max-token depth moves board-size)
        maximizing? (= token max-token)]
    (->best-score scores maximizing? depth)))

(defn minimax [board token max-token depth board-size]
  (if (game-over? board board-size depth)
    (score-end-game board max-token depth board-size)
    (evaluate-branch board token max-token depth board-size)))

(def memoized-minimax
  (memoize minimax))

(defn evaluate-move [board token move depth board-size]
  (let [next-board (board/make-move board move token)
        score      (->score-one-move next-board token token depth board-size)]
    {:move move :score score}))

(defn choose-best-move [board token depth board-size]
  (->> (board/available-moves board board-size)
       (map #(evaluate-move board token % depth board-size))
       (apply max-key :score)
       :move))

(defmethod ->player-move :expert-ai [{:keys [board current-token depth board-size]}]
  (choose-best-move board current-token depth board-size))