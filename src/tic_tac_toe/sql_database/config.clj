(ns tic-tac-toe.sql-database.config)

(def db-spec
  {:dbtype   "postgresql"
   :host     "localhost"
   :port     5432
   :dbname   "tic_tac_toe"
   :user     "postgres"
   :password "Number32!"})