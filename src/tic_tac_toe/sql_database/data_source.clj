(ns tic-tac-toe.sql-database.data-source
  (:require [next.jdbc :as jdbc]))

(def db-spec
  {:dbtype "postgresql"
   :host "localhost"
   :port 5432
   :dbname "tic_tac_toe"
   :user "postgres"
   :password "Number32!"})

(def datasource (jdbc/get-datasource db-spec))
