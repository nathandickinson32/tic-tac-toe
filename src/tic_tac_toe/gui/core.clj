(ns tic-tac-toe.gui.core
  (:require [quil.core :as q]
            [tic-tac-toe.board :as board]))

(defn create-new-game [database]
  {:game-id    (random-uuid)
   :turn-count 0
   :page       :choose-first-player
   :board      board/starting-board-3x3
   :database   database})

(def grid-width 600)
(def grid-size [grid-width grid-width])

(def button-width 200)
(def button-height 40)
(def button-padding 20)

(def row-top-1 280)

(defn white-background [] (q/background 255))
(defn gray-line [] (q/stroke 220))
(defn fill-black [] (q/fill 0))

(defn draw-button [label x y width height]
  (q/fill 230)
  (q/rect x y width height 10)
  (q/fill 0)
  (q/text-align :center :center)
  (q/text-size 20)
  (q/text label (+ x (/ width 2)) (+ y (/ height 2))))

(defn region-clicked? [{:keys [x y]} {:keys [top left bottom right]}]
  (and (<= left x right)
       (<= top y bottom)))

(defn button-position-x []
  (- (/ grid-width 2) (/ button-width 2)))

(defn draw-vertical-lines [cell-size]
  (doseq [x (range cell-size grid-width cell-size)]
    (q/line x 0 x grid-width)))

(defn draw-horizontal-lines [cell-size]
  (doseq [y (range cell-size grid-width cell-size)]
    (q/line 0 y grid-width y)))

(defn draw-gray-grid-lines [{:keys [board-size]}]
  (let [n         (case board-size :3x3 3 :4x4 4)
        cell-size (/ grid-width n)]
    (gray-line)
    (draw-vertical-lines cell-size)
    (draw-horizontal-lines cell-size)))

(defn ->pixel-location [cell n]
  (+ (* cell (/ grid-width n)) (/ (/ grid-width n) 2)))

(defn draw-token [col row token board-size]
  (let [n (case board-size :3x3 3 :4x4 4)]
    (fill-black)
    (q/text-align :center :center)
    (q/text-size 72)
    (q/text (name token)
            (->pixel-location col n)
            (->pixel-location row n))))

(defn draw-tokens [{:keys [board board-size]}]
  (let [n (case board-size :3x3 3 :4x4 4)]
    (doseq [row (range n)
            col (range n)
            :let [cell (get-in board [row col])]]
      (when (keyword? cell) (draw-token col row cell board-size)))))