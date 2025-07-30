(ns tic-tac-toe.create-db
  (:require [next.jdbc :as jdbc]
            [clojure.java.shell :as shell]
            [tic-tac-toe.sql-database.data-source :as datasource]))

(def create-db-sql
  "CREATE TABLE IF NOT EXISTS moves (
    move_id SERIAL Primary Key,
    game_id VARCHAR,
    database TEXT NOT NULL,
    player_x TEXT NOT NULL,
    player_o TEXT NOT NULL,
    current_token CHAR(1) NOT NULL,
    board TEXT NOT NULL\n);")

(defn -main []
  (println "Creating moves table")
  #_(prn (shell/sh                                                 ;"export" (str "PGPASSWORD=" (:password datasource/db-spec))
    "psql" "postgres"
    "-U" (:user datasource/db-spec)
    "-c" "'CREATE DATABASE tic_tac_toe'"
    :env {"PGPASSWORD" (:password datasource/db-spec)}))
  ;(jdbc/execute! datasource/datasource ["CREATE DATABASE tic_tac_toe"])
  (jdbc/execute! datasource/datasource [create-db-sql])
  )