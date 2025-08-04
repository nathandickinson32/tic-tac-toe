(ns tic-tac-toe.records
  (:require [clojure.string :as str]
            [clojure.edn :as edn]
            [next.jdbc :as jdbc]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.sql-database.data-source :as datasource]
            [tic-tac-toe.expert-ai :as expert-ai]))

(defn ->content-lines []
  (str/split-lines (slurp "game-history.edn")))

(defn ->state-to-record [state]
  (select-keys state [:game-id :board-size :X :O :current-token :board]))

(defn format-record [state]
  (str (->state-to-record state) "\n"))

(defn read-last-record []
  (let [lines     (->content-lines)
        last-line (last lines)]
    (edn/read-string last-line)))

(defn- ->game-states [game-id]
  (->> (slurp "game-history.edn")
       str/split-lines
       (map read-string)
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

(defn replay-record [game-states game-id]
  (let [{:keys [board-size board] :as last-state} (last game-states)
        outcome (->replay-outcome board board-size)]
    (output/replay-data game-id outcome last-state)
    (print-moves game-states)))

(defn replay? [[replay game-id]]
  (when (= "--replay" replay)
    (if-let [game-states (seq (->game-states game-id))]
      (replay-record game-states game-id)
      (output/invalid-game-id))
    true))

(defn game-exists? [game-id]
  (some? (jdbc/execute-one! datasource/datasource
                            ["SELECT 1 FROM games WHERE game_id = ?" game-id])))

(defn update-when-finished [game-id board board-size]
  (when (expert-ai/end-game? board board-size)
    (jdbc/execute! datasource/datasource
                   ["UPDATE games SET finished = true WHERE game_id = ?" game-id])))

(defn initial-save-game [game-id X O board-size]
  (jdbc/execute! datasource/datasource
                 ["INSERT INTO games (game_id, finished, player_x, player_o, board_size)
                        VALUES (?, ?, ?, ?, ?)"
                  game-id
                  false
                  (name X)
                  (name O)
                  (name board-size)]))

(defn save-move-postgres [game-id current-token move]
  (jdbc/execute! datasource/datasource
                 ["INSERT INTO moves (game_id, token, move)
                        VALUES (?, ?, ?)"
                  game-id
                  (name (board/switch-player current-token))
                  move]))

(defn save-game-postgres [state move]
  (let [{:keys [X O game-id board-size current-token board]} (->state-to-record state)
        game-already-exists? (game-exists? game-id)]
    (if game-already-exists?
      (update-when-finished game-id board board-size)
      (initial-save-game game-id X O board-size))
    (save-move-postgres game-id current-token move)))

(defn save-game-edn [state]
  (spit "game-history.edn" (format-record state) :append true))

(defn save-game [state move]
  (if (= :edn-file (:database state))
    (save-game-edn state)
    (save-game-postgres state move)))