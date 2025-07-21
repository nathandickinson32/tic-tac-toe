(ns tic-tac-toe.database.core
  (:require [next.jdbc :as jdbc]))

(def db-spec
  {:dbtype "postgresql"
   :host "localhost"
   :port 5432
   :dbname "tic_tac_toe"
   :user "postgres"
   :password ""})

(def datasource (jdbc/get-datasource db-spec))