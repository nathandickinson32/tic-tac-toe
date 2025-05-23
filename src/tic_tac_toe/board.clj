(ns tic-tac-toe.board
  (:require [tic-tac-toe.core :refer :all :as core]))

(def empty \space)

(defn ->grid-cells [board divider]
  (doseq [row board]
    (print "|")
    (doseq [cell row]
      (print (str " " cell " |")))
    (core/output "")
    (core/output divider)))

(defn ->board-divider [size]
  (apply str (repeat (+ (* 4 (count size)) 1) "-")))

(defn print-board [board]
  (let [divider (->board-divider board)]
    (core/output divider)
    (->grid-cells board divider)))

(defn make-board [size]
  (mapv (fn [_]
          (vec (repeat size empty)))
        (range size)))

(defn get-board-size []
  (Integer/parseInt (read-line)))

(defn ->start-board []
  (->> (get-board-size)
       (make-board)
       (print-board)))