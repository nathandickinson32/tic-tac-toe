(ns tic-tac-toe.sql-database.data-source
  (:require #?(:bb  [babashka.pods :as pods]
               :clj [next.jdbc :as jdbc])
            [tic-tac-toe.sql-database.config :as config]))

#?(:bb
   (do
     (pods/load-pod 'org.babashka/postgresql "0.1.0")
     (require '[pod.babashka.postgresql :as jdbc])))

(def datasource
  #?(:bb  config/db-spec
     :clj (jdbc/get-datasource config/db-spec)))

(defn execute! [sql-params]
  (jdbc/execute! datasource sql-params))

(defn execute-one! [sql-params]
  (jdbc/execute-one! datasource sql-params))
