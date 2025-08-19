(ns tic-tac-toe.expert-ai
  (:require [tic-tac-toe.player-types :refer [->player-move]]
            [tic-tac-toe.board :as board]))

(defn game-over? [board board-size depth]
  (cond
    (= board-size :3x3) (board/end-game? board board-size)
    (= board-size :4x4) (or (board/end-game? board board-size)
                            (>= depth 6))
    (= board-size :3x3x3) (or (board/end-game? board board-size)
                              (>= depth 3))))

(defn score [board token board-size]
  (cond
    (board/win? board token board-size) 5
    (board/win? board (board/switch-player token) board-size) -5
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

(defn max-value [scores]
  (apply max scores))

(defn min-value [scores]
  (apply min scores))

(defn best-score-by-depth [scores]
  (if (some pos? scores)
    (min-value scores)
    (apply + scores)))

(defn ->best-score [scores maximizing? depth]
  (if maximizing?
    (/ (max-value scores) depth)
    (/ (best-score-by-depth scores) depth)))

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

(defn choose-best-move [board token board-size]
  (->> (board/available-moves board board-size)
       (map #(evaluate-move board token % 0 board-size))
       (apply max-key :score)
       :move))

(defmethod ->player-move :expert-ai [{:keys [board current-token board-size]}]
  (choose-best-move board current-token board-size))