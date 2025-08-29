(ns tic-tac-toe.sql-database.data-source
  (:require [next.jdbc :as jdbc]
            [tic-tac-toe.sql-database.config :as config]))

(def datasource (jdbc/get-datasource config/db-spec))