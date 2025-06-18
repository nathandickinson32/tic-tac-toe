(ns tic-tac-toe.expert-ai
  (:require [tic-tac-toe.player-types :refer [->player-move]]
            [tic-tac-toe.board :as board]))

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

(declare minimax)

(defn ->score-one-move [next-board token max-token depth]
  (minimax next-board (board/switch-player token) max-token (inc depth)))

(defn ->score-moves [board token max-token depth moves]
  (->> moves
       (map #(let [next-board (board/make-move board % token)
                   score      (->score-one-move next-board token max-token depth)]
               score))))

(defn ->best-score [scores maximizing? depth]
  (if maximizing?
    (if (some neg? scores)
      (apply max scores)
      (apply max scores))
    (if (some pos? scores)
      (apply min scores)
      (/ (apply + scores) depth))))

(defn minimax [board token max-token depth]
  (if (end-game? board)
    (score-end-game board max-token depth)
    (let [moves       (board/available-moves board)
          scores      (->score-moves board token max-token depth moves)
          maximizing? (= token max-token)]
      (->best-score scores maximizing? depth))))


(defn choose-best-move [board token]
  (->> (board/available-moves board)
       (map (fn [move]
              (let [next-board (board/make-move board move token)
                    score      (->score-one-move next-board token token 0)]
                {:move move :score score})))
       (apply max-key :score)
       :move))

(defmethod ->player-move :expert-ai [{:keys [board current-token]}]
  (choose-best-move board current-token))