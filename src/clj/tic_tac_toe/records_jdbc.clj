(ns tic-tac-toe.records-jdbc
  (:require [tic-tac-toe.boardc :as board]
            [tic-tac-toe.sql-database.data-source :as datasource]))

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

(defn ->sql-game-data [game-id]
  (datasource/execute! [select-games-data-sql game-id]))

(defn ->sql-moves-data [game-id]
  (datasource/execute! [select-moves-data-sql game-id]))

(defn game-exists? [game-id]
  (let [result (datasource/execute-one! [game-exists-sql game-id])]
    (:exists result)))

(defn update-game [game-id]
  (datasource/execute! [finished-game-sql game-id]))

(defn initial-save-game [game-id X O board-size]
  (datasource/execute!
    [initial-save-game-sql
     game-id
     false
     (name X)
     (name O)
     (name board-size)]))

(defn save-move-postgres [game-id turn-count current-token move]
  (datasource/execute!
    [save-move-sql
     game-id
     turn-count
     (name (board/switch-player current-token))
     move]))