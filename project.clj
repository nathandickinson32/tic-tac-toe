(defproject tic-tac-toe "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :main tic-tac-toe.main
  :dependencies [[org.clojure/clojure "1.12.0"]
                 [com.github.seancorfield/next.jdbc "1.3.1048"]
                 [org.postgresql/postgresql "42.7.4"]
                 [cheshire "5.11.0"]]

  :profiles {:dev {:dependencies [[speclj "3.10.0"]]}}
  :plugins [[speclj "3.10.0"]]
  :test-paths ["spec/clj"])