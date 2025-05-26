(ns tic-tac-toe.board
  (:require [clojure.string :as str]))

(defn make-move [board move player]
  (assoc-in board move player))

(def board-format
  (str "-------------\n"
       "| %s | %s | %s |\n"
       "-------------\n"
       "| %s | %s | %s |\n"
       "-------------\n"
       "| %s | %s | %s |\n"
       "-------------\n"))

(defn print-board [board]
  (print (apply format board-format (flatten board))))

(def starting-board
  [[\space \space \space]
   [\space \space \space]
   [\space \space \space]])

(defn valid-move-count? [move]
  (= 2 (count move)))

(defn valid-integer? [move]
  (and
    (every? integer? move)
    (every? #(<= 0 % 2) move)))

(defn space-available? [board move]
  (= \space (get-in board move)))

(defn valid-input? [move]
  (and
    (valid-move-count? move)
    (valid-integer? move)))

(defn parse-user-input [input]
  (vec (map read-string (str/split input #" "))))

(defn invalid-response []
  (println "Please enter valid move as two numbers between 0 and 2"))

(defn get-user-move [board]
  (println "Enter your move as row col")
  (let [input (read-line)]
    (if (str/blank? input)
      (do
        (invalid-response)
        (recur board))
      (let [maybe-move (parse-user-input input)]
        (if (and (valid-input? maybe-move)
                 (space-available? board maybe-move))
          maybe-move
          (do
            (invalid-response)
            (recur board)))))))