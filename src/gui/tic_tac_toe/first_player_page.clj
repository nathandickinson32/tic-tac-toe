(ns tic-tac-toe.first-player-page
  (:require [quil.core :as q]
            [tic-tac-toe.core :as core]
            [tic-tac-toe.mouse-clicks :refer [on-mouse-click]]
            [tic-tac-toe.draw-pages :refer [draw-state]]))

(defn player-X-button []
  (core/draw-button "Player X"
                    (- (/ core/grid-width 2) core/button-width 20) core/row-top-1
                    core/button-width core/button-height))

(defn player-O-button []
  (core/draw-button "Player O"
                    (+ (/ core/grid-width 2) 20) core/row-top-1
                    core/button-width core/button-height))

(def x-button
  {:top    core/row-top-1
   :right  (- (/ core/grid-width 2) core/button-padding)
   :bottom (+ core/row-top-1 core/button-height)
   :left   (- (/ core/grid-width 2) core/button-padding core/button-width)})

(def o-button
  {:top    core/row-top-1
   :left   (+ (/ core/grid-width 2) core/button-padding)
   :bottom (+ core/row-top-1 core/button-height)
   :right  (+ (/ core/grid-width 2) core/button-padding core/button-width)})

(defn- x-clicked? [click-position]
  (core/region-clicked? click-position x-button))

(defn- o-clicked? [click-position]
  (core/region-clicked? click-position o-button))

(defmethod on-mouse-click :choose-first-player [state click-position]
  (cond
    (x-clicked? click-position)
    (assoc state :current-token :X :page :choose-board-size)
    (o-clicked? click-position)
    (assoc state :current-token :O :page :choose-board-size)
    :else state))

(defmethod draw-state :choose-first-player [_state]
  (core/white-background)
  (q/text-align :center :center)
  (q/text-size 32)
  (q/text "Welcome to Tic Tac Toe!" (/ core/grid-width 2) 150)
  (q/text-size 24)
  (q/text "Who should go first?" (/ core/grid-width 2) 220)
  (player-X-button)
  (player-O-button))