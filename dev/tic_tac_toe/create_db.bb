#!/usr/bin/env bb

(ns tic-tac-toe.create-db
  (:require [tic-tac-toe.sql-database.config :as config]
            [pod.babashka.postgresql :as db]))

(def db-name
  (:dbname config/db-spec))

(def db-exists-sql
  (str "SELECT EXISTS (SELECT 1 FROM pg_database WHERE datname = '" db-name "')"))

(def create-db-sql
  (str "CREATE DATABASE " db-name))

(def create-tables-sql
  "CREATE TABLE IF NOT EXISTS games (
     game_id UUID NOT NULL,
     finished BOOLEAN NOT NULL,
     player_x TEXT NOT NULL,
     player_o TEXT NOT NULL,
     board_size VARCHAR(8) NOT NULL
   );
   CREATE TABLE IF NOT EXISTS moves (
     game_id UUID NOT NULL,
     turn_count SMALLINT NOT NULL,
     token VARCHAR(1) NOT NULL,
     move VARCHAR(2) NOT NULL
   )")

(def root-config
  (dissoc config/db-spec :dbname))

(defn- db-exists? []
  (let [result (db/execute! root-config [db-exists-sql])]
    (get-in result [0 :exists])))

(defn- create-db! []
  (println "Creating Database:" db-name)
  (db/execute! root-config [create-db-sql]))

(defn- ensure-db-exists! []
  (if (db-exists?)
    (println "Database Already Exists:" db-name)
    (create-db!)))

(defn- create-tables! []
  (println "Creating Tables: games and moves")
  (db/execute! config/db-spec [create-tables-sql]))

(defn -main []
  (ensure-db-exists!)
  (create-tables!))