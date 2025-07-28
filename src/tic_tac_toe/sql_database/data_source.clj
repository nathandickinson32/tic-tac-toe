(ns tic-tac-toe.sql_database.data_source
  (:require [next.jdbc :as jdbc]))

(def db-spec
  {:dbtype "postgresql"
   :host "localhost"
   :port 5432
   :dbname "tic_tac_toe"
   :user "postgres"
   :password ""})

(def datasource (jdbc/get-datasource db-spec))