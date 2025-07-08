(ns tic-tac-toe.records)

(defn ->state-to-record [state]
  (select-keys state [:X :O :board :current-token]))

(defn format-record [state]
  (str (->state-to-record state) "\n"))

(defn record-move [state]
  (spit "game-history.edn" (format-record state) :append true))

(defn record-end-game []
  (spit "game-history.edn" "Game Has Ended\n" :append true))