#!/usr/bin/env bb

(ns tic-tac-toe.create-db
  (:require [tic-tac-toe.config :as config]
            [pod.babashka.postgresql :as db]))

(def db-name
  (:dbname config/db-spec))

(def db-exists-sql
  (str "SELECT EXISTS (SELECT 1 FROM pg_database WHERE datname = '" db-name "')"))

(def create-db-sql
  (str "CREATE DATABASE " db-name))

(def create-moves-sql
  "CREATE TABLE IF NOT EXISTS moves (
     move_id SERIAL Primary Key,
     game_id VARCHAR,
     database TEXT NOT NULL,
     player_x TEXT NOT NULL,
     player_o TEXT NOT NULL,
     current_token CHAR(1) NOT NULL,
     board TEXT NOT NULL
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

(defn- create-moves-table! []
  (println "Creating Table: moves")
  (db/execute! config/db-spec [create-moves-sql]))

(defn -main []
  (ensure-db-exists!)
  (create-moves-table!))