(ns tic-tac-toe.gui.core
  (:require [quil.core :as q]))

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