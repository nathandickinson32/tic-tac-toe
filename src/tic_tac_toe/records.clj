(ns tic-tac-toe.records
  (:require [clojure.string :as str]
            [clojure.edn :as edn]
            [next.jdbc :as jdbc]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.sql-database.data-source :as datasource]
            [cheshire.core :as json]))

(defn ->content-lines []
  (str/split-lines (slurp "game-history.edn")))

(defn ->state-to-record [state]
  (select-keys state [:game-id :database :board-size :X :O :current-token :board]))

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

(defn save-to-postgres [state]
  (let [{:keys [X O board current-token game-id database]} (->state-to-record state)]
    (jdbc/execute! datasource/datasource
                   ["INSERT INTO moves (game_id, database, player_x, player_o, current_token, board)
        VALUES (?, ?, ?, ?, ?, ?)"
                    game-id
                    (name database)
                    (name X)
                    (name O)
                    (name current-token)
                    (json/generate-string board)])))

(defn record-move [state]
  (if (= :edn-file (:database state))
    (spit "game-history.edn" (format-record state) :append true)
    (save-to-postgres state)))