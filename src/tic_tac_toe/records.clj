(ns tic-tac-toe.records
  (:require [clojure.string :as str]
            [clojure.edn :as edn]))

(defn ->state-to-record [state]
  (select-keys state [:board-size :X :O :board :current-token :game-id]))

(defn format-record [state]
  (str (->state-to-record state) "\n"))

(defn record-move [state]
  (spit "game-history.edn" (format-record state) :append true))

(defn read-last-record []
  (let [content   (slurp "game-history.edn")
        lines     (str/split-lines content)
        last-line (last lines)]
    (edn/read-string last-line)))