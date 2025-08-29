(ns tic-tac-toe.gui.player-type-page
  (:require [quil.core :as q]
            [tic-tac-toe.gui.core :as core]
            [tic-tac-toe.gui.mouse-clicks :refer [on-mouse-click]]))

(defn draw-player-choice-buttons []
  (core/draw-button "Human" (core/button-position-x) 190 core/button-width core/button-height)
  (core/draw-button "Easy Ai" (core/button-position-x) 250 core/button-width core/button-height)
  (core/draw-button "Medium Ai" (core/button-position-x) 310 core/button-width core/button-height)
  (core/draw-button "Expert Ai" (core/button-position-x) 370 core/button-width core/button-height))

(defn choose-player-X-page []
  (core/white-background)
  (q/text-align :center :center)
  (q/text-size 24)
  (q/text "Choose Player X" (/ core/grid-width 2) 150)
  (draw-player-choice-buttons))

(defn choose-player-O-page []
  (core/white-background)
  (q/text-align :center :center)
  (q/text-size 24)
  (q/text "Choose Player O" (/ core/grid-width 2) 150)
  (draw-player-choice-buttons))

(def human-button
  {:top    190
   :bottom (+ 190 core/button-height)
   :left   (core/button-position-x)
   :right  (+ (core/button-position-x) core/button-width)})

(def easy-ai-button
  {:top    250
   :bottom (+ 250 core/button-height)
   :left   (core/button-position-x)
   :right  (+ (core/button-position-x) core/button-width)})

(def medium-ai-button
  {:top    310
   :bottom (+ 310 core/button-height)
   :left   (core/button-position-x)
   :right  (+ (core/button-position-x) core/button-width)})

(def expert-ai-button
  {:top    370
   :bottom (+ 370 core/button-height)
   :left   (core/button-position-x)
   :right  (+ (core/button-position-x) core/button-width)})

(defn- human-clicked? [click-position] (core/region-clicked? click-position human-button))
(defn- easy-ai-clicked? [click-position] (core/region-clicked? click-position easy-ai-button))
(defn- medium-ai-clicked? [click-position] (core/region-clicked? click-position medium-ai-button))
(defn- expert-ai-clicked? [click-position] (core/region-clicked? click-position expert-ai-button))

(defmethod on-mouse-click :choose-player-X [state click-position]
  (if-let [x (cond
               (human-clicked? click-position) :human
               (easy-ai-clicked? click-position) :easy-ai
               (medium-ai-clicked? click-position) :medium-ai
               (expert-ai-clicked? click-position) :expert-ai)]
    (assoc state :X x :page :choose-player-O)
    state))

(defmethod on-mouse-click :choose-player-O [state click-position]
  (if-let [o (cond
               (human-clicked? click-position) :human
               (easy-ai-clicked? click-position) :easy-ai
               (medium-ai-clicked? click-position) :medium-ai
               (expert-ai-clicked? click-position) :expert-ai)]
    (assoc state :O o :page :play-game)
    state))