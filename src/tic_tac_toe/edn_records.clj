(ns tic-tac-toe.edn-records
  (:require [clojure.string :as str]
            [clojure.edn :as edn]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.output :as output]))

(defn str-replay? [replay]
  (= "--replay" replay))

(defn invalid-game-id []
  (output/invalid-game-id)
  true)

(defn ->content-lines []
  (str/split-lines (slurp "game-history.edn")))

(defn ->state-to-record [state]
  (select-keys state [:board-size :X :O :board :current-token :game-id]))

(defn format-record [state]
  (str (->state-to-record state) "\n"))

(defn record-move [state]
  (spit "game-history.edn" (format-record state) :append true))

(defn read-last-record []
  (let [lines     (->content-lines)
        last-line (last lines)]
    (edn/read-string last-line)))

(defn current-token->str-moved-token [current-state]
  (name (board/switch-player (:current-token current-state))))

(defn print-each-move [game-states]
  (doseq [current-state game-states]
    (output/record-of-token-moved (current-token->str-moved-token current-state))
    (output/determine-board-to-print (:board-size current-state) (:board current-state))))

(defn ->game-states [lines game-id]
  (->> lines
       (map read-string)
       (filter #(= (:game-id %) game-id))))

(defn replay-and-valid-id [replay game-states game-id]
  (and (str-replay? replay)
       (not (or (empty? game-states)
                (empty? game-id)))))

(defn replay? [[replay game-id]]
  (let [lines       (->content-lines)
        game-states (->game-states lines game-id)
        last-state  (last game-states)]
    (cond
      (replay-and-valid-id replay game-states game-id)
      (do
        (let [outcome (cond
                        (board/win? (:board last-state) :X (:board-size last-state)) "X Wins"
                        (board/win? (:board last-state) :O (:board-size last-state)) "O Wins"
                        (board/full-board? (:board last-state) (:board-size last-state)) "Draw"
                        :else "Unfinished")]
          (println (str "Replay Of Game: " game-id))
          (println (str "Outcome: " outcome))
          (println (str "Player X: " (name (:X last-state))))
          (println (str "Player O: " (name (:O last-state))))
          (println (str "Board Size: " (name (:board-size last-state))))
          (println))

        (print-each-move game-states)
        true)

      (str-replay? replay) (invalid-game-id)
      :else false)))