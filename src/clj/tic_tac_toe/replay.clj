;(ns tic-tac-toe.replay)
;
;(defn ->replay-outcome [board board-size]
;  (cond
;    (board/win? board :X board-size) (output/replay-winner-message :X)
;    (board/win? board :O board-size) (output/replay-winner-message :O)
;    (board/full-board? board board-size) (output/replay-draw-message)
;    :else (output/replay-unfinished)))
;
;(defn print-moves [game-states]
;  (doseq [{:keys [board-size board]} game-states]
;    (output/determine-board-to-print board-size board)))
;
;(defn replay-edn-record [game-states game-id]
;  (let [{:keys [board-size board] :as last-state} (last game-states)
;        outcome (->replay-outcome board board-size)]
;    (output/replay-data game-id outcome last-state)
;    (print-moves game-states)))
;
;(defn valid-edn-replay [game-id]
;  (if-let [game-states (seq (->edn-game-states game-id))]
;    (replay-edn-record game-states game-id)
;    (output/invalid-game-id)))
;
;(defn ->next-board [current-board move board-size]
;  (board/make-move
;    current-board
;    (board/->grid-coordinates (:moves/move move) board-size)
;    (keyword (:moves/token move))))
;
;(defn add-board [current-board board-size new-board]
;  (conj (:boards current-board) {:board-size board-size :board new-board}))
;
;(defn build-board [current-board move board-size]
;  (let [new-board (->next-board (:current-board current-board) move board-size)]
;    {:boards        (add-board current-board board-size new-board)
;     :current-board new-board}))
;
;(defn build-all-boards [move-data board-size]
;  (reduce #(build-board %1 %2 board-size)
;          {:boards [] :current-board (board/determine-starting-board board-size)}
;          move-data))
;
;(defn ->board-states [move-data board-size]
;  (:boards (build-all-boards move-data board-size)))
;
;(defn replay-sql-record [game-data move-data game-id]
;  (let [replay-data  (first game-data)
;        board-size   (keyword (:games/board_size replay-data))
;        board-states (->board-states move-data board-size)
;        last-board   (:board (last board-states))
;        last-state   (->last-sql-state replay-data last-board)
;        outcome      (->replay-outcome last-board board-size)]
;    (output/replay-data game-id outcome last-state)
;    (print-moves board-states)))
;
;(defn valid-sql-replay [game-id]
;  (let [game-data  (->sql-game-data game-id)
;        moves-data (->sql-moves-data game-id)]
;    (if (and game-data moves-data)
;      (replay-sql-record game-data moves-data game-id)
;      (output/invalid-game-id))))
;
;(defn replay-game [replay? game-id database]
;  (when replay?
;    (case database
;      :edn-file
;      (valid-edn-replay game-id)
;      :postgres
;      (valid-sql-replay game-id))
;    true))