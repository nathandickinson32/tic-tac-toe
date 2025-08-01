(ns tic-tac-toe.create-db-spec
  (:require [speclj.core :refer :all]
            [pod.babashka.postgresql :as db]
            [tic-tac-toe.config :as config]
            [tic-tac-toe.create-db :as sut]))

(def exists-sql
  "SELECT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'tic_tac_toe')")

(def create-db-sql "CREATE DATABASE tic_tac_toe")

(def root-config (dissoc config/db-spec :dbname))

(def test-create-tables-sql
  (str "CREATE TABLE IF NOT EXISTS games (\n"
       "     move_id SERIAL Primary Key,\n"
       "     game_id VARCHAR,\n"
       "     database TEXT NOT NULL,\n"
       "     player_x TEXT NOT NULL,\n"
       "     player_o TEXT NOT NULL,\n"
       "     current_token CHAR(1) NOT NULL,\n"
       "     board TEXT NOT NULL\n"
       "   )"))

(describe "Create DB"
  (with-stubs)

  (redefs-around [db/execute! (stub :execute!)])
  (around [it] (with-out-str (it)))

  (it "creates the tic tac toe database"
    (let [output (with-out-str (sut/-main))]
      (should-contain "Creating Database: tic_tac_toe\n" output)
      (should-not-contain "Database Already Exists: tic_tac_toe\n" output)
      (should-have-invoked :execute! {:with [root-config [create-db-sql]]})))

  (it "does not create database when exists"
    (with-redefs [db/execute! (stub :execute! {:return [{:exists true}]})]
      (let [output (with-out-str (sut/-main))]
        (should-contain "Database Already Exists: tic_tac_toe\n" output)
        (should-not-contain "Creating Database: tic_tac_toe\n" output)
        (should-have-invoked :execute! {:with [root-config [exists-sql]]})
        (should-not-have-invoked :execute! {:with [config/db-spec [create-db-sql]]}))))

  (it "creates moves table"
    (let [output (with-out-str (sut/-main))]
      (should-contain "Creating Table: moves\n" output)
      (should-have-invoked :execute! {:with [config/db-spec [test-create-tables-sql]]})))
  )