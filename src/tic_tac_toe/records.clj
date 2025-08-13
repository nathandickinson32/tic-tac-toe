(ns tic-tac-toe.records
  (:require [clojure.string :as str]
            [clojure.edn :as edn]
            [next.jdbc :as jdbc]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.sql-database.data-source :as datasource]
            [tic-tac-toe.expert-ai :as expert-ai]))

(def game-exists-sql
  "SELECT EXISTS (SELECT 1 FROM games WHERE game_id = ?)")

(def finished-game-sql
  "UPDATE games SET finished = true WHERE game_id = ?")

(def initial-save-game-sql
  "INSERT INTO games (game_id, finished, player_x, player_o, board_size)
                        VALUES (?, ?, ?, ?, ?)")

(def save-move-sql
  "INSERT INTO moves (game_id, turn_count, token, move)
                        VALUES (?, ?, ?, ?)")

(def select-games-data-sql
  "SELECT * FROM games WHERE game_id = ?::uuid")

(def select-moves-data-sql
  "SELECT * FROM moves WHERE game_id = ?::uuid ORDER BY turn_count ASC")

(defn ->content-lines []
  (str/split-lines (slurp "game-history.edn")))

(defn ->state-to-record [state]
  (select-keys state [:game-id :turn-count :board-size :X :O :current-token :board]))

(defn format-record [state]
  (str (update (->state-to-record state) :game-id str) "\n"))

(defn read-last-record []
  (let [lines     (->content-lines)
        last-line (last lines)]
    (edn/read-string last-line)))

(defn- ->edn-game-states [game-id]
  (->> (slurp "game-history.edn")
       str/split-lines
       (map edn/read-string)
       (filter #(= (:game-id %) game-id))))

(defn ->replay-outcome [board board-size]
  (cond
    (board/win? board :X board-size) (output/replay-winner-message :X)
    (board/win? board :O board-size) (output/replay-winner-message :O)
    (board/full-board? board board-size) (output/replay-draw-message)
    :else (output/replay-unfinished)))

(defn print-moves [game-states]
  (doseq [{:keys [board-size board]} game-states]
    (output/determine-board-to-print board-size board)))

(defn replay-edn-record [game-states game-id]
  (let [{:keys [board-size board] :as last-state} (last game-states)
        outcome (->replay-outcome board board-size)]
    (output/replay-data game-id outcome last-state)
    (print-moves game-states)))

(defn valid-edn-replay [game-id]
  (if-let [game-states (seq (->edn-game-states game-id))]
    (replay-edn-record game-states game-id)
    (output/invalid-game-id)))

(defn ->sql-game-data [game-id]
  (jdbc/execute! datasource/datasource [select-games-data-sql game-id]))

(defn ->sql-moves-data [game-id]
  (jdbc/execute! datasource/datasource [select-moves-data-sql game-id]))

(defn ->last-sql-state [game last-board]
  {:X          (:games/player_x game)
   :O          (:games/player_o game)
   :board-size (:games/board_size game)
   :board      last-board})

(defn ->next-board [current-board move board-size]
  (board/make-move
    current-board
    (board/->grid-coordinates (:moves/move move) board-size)
    (keyword (:moves/token move))))

(defn add-board [current-board board-size new-board]
  (conj (:boards current-board) {:board-size board-size :board new-board}))

(defn build-board [current-board move board-size]
  (let [new-board (->next-board (:current-board current-board) move board-size)]
    {:boards        (add-board current-board board-size new-board)
     :current-board new-board}))

(defn build-all-boards [move-data board-size]
  (reduce #(build-board %1 %2 board-size)
          {:boards [] :current-board (board/determine-starting-board board-size)}
          move-data))

(defn ->board-states [move-data board-size]
  (:boards (build-all-boards move-data board-size)))

(defn replay-sql-record [game-data move-data game-id]
  (let [replay-data  (first game-data)
        board-size   (keyword (:games/board_size replay-data))
        board-states (->board-states move-data board-size)
        last-board   (:board (last board-states))
        last-state   (->last-sql-state replay-data last-board)
        outcome      (->replay-outcome last-board board-size)]
    (output/replay-data game-id outcome last-state)
    (print-moves board-states)))

(defn valid-sql-replay [game-id]
  (let [game-data  (->sql-game-data game-id)
        moves-data (->sql-moves-data game-id)]
    (if (and game-data moves-data)
      (replay-sql-record game-data moves-data game-id)
      (output/invalid-game-id))))

(defn replay-game [replay? game-id database]
  (when replay?
    (case database
      :edn-file
      (valid-edn-replay game-id)
      :postgres
      (valid-sql-replay game-id))
    true))

(defn game-exists? [game-id]
  (let [result (jdbc/execute-one! datasource/datasource [game-exists-sql game-id])]
    (:exists result)))

(defn update-game [game-id]
  (jdbc/execute! datasource/datasource
                 [finished-game-sql game-id]))

(defn initial-save-game [game-id X O board-size]
  (jdbc/execute! datasource/datasource
                 [initial-save-game-sql
                  game-id
                  false
                  (name X)
                  (name O)
                  (name board-size)]))

(defn update-when-finished [game-id board board-size]
  (when (expert-ai/end-game? board board-size)
    (update-game game-id)))

(defn save-move-postgres [game-id turn-count current-token move]
  (jdbc/execute! datasource/datasource
                 [save-move-sql
                  game-id
                  turn-count
                  (name (board/switch-player current-token))
                  move]))

(defn initial-save-or-update [state]
  (let [{:keys [X O game-id board-size board]} (->state-to-record state)
        game-already-exists? (game-exists? game-id)]
    (if game-already-exists?
      (update-when-finished game-id board board-size)
      (initial-save-game game-id X O board-size))))

(defn save-game-postgres [state move]
  (let [{:keys [game-id turn-count current-token]} (->state-to-record state)]
    (initial-save-or-update state)
    (save-move-postgres game-id turn-count current-token move)))

(defn save-game-edn [state]
  (spit "game-history.edn" (format-record state) :append true))

(defn save-game [state move]
  (if (= :edn-file (:database state))
    (save-game-edn state)
    (save-game-postgres state move)))