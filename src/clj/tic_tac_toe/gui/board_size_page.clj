(ns tic-tac-toe.gui.board-size-page
  (:require [quil.core :as q]
            [tic-tac-toe.gui.core :as core]
            [tic-tac-toe.boardc :as board]
            [tic-tac-toe.gui.mouse-clicks :refer [on-mouse-click]]
            [tic-tac-toe.gui.draw-pages :refer [draw-state]]))

(defn choose-board-size-page []
  (core/white-background)
  (q/text-align :center :center)
  (q/text-size 24)
  (q/text "Choose board size" (/ core/grid-width 2) 220)
  (core/draw-button "3x3"
                    (- (/ core/grid-width 2) core/button-width 20) core/row-top-1
                    core/button-width core/button-height)
  (core/draw-button "4x4"
                    (+ (/ core/grid-width 2) 20) core/row-top-1
                    core/button-width core/button-height))

(def board-3x3-button
  {:top    core/row-top-1
   :bottom (+ core/row-top-1 core/button-height)
   :left   (- (/ core/grid-width 2) core/button-width 20)
   :right  (+ (- (/ core/grid-width 2) core/button-width 20) core/button-width)})

(def board-4x4-button
  {:top    core/row-top-1
   :bottom (+ core/row-top-1 core/button-height)
   :left   (+ (/ core/grid-width 2) 20)
   :right  (+ (+ (/ core/grid-width 2) 20) core/button-width)})

(defn- board-3x3-clicked? [click-position]
  (core/region-clicked? click-position board-3x3-button))

(defn- board-4x4-clicked? [click-position]
  (core/region-clicked? click-position board-4x4-button))

(defmethod on-mouse-click :choose-board-size [state click-position]
  (cond
    (board-3x3-clicked? click-position)
    (assoc state :board-size :3x3
                 :board board/starting-board-3x3
                 :page :choose-player-X)

    (board-4x4-clicked? click-position)
    (assoc state :board-size :4x4
                 :board board/starting-board-4x4
                 :page :choose-player-X)

    :else state))

(defmethod draw-state :choose-board-size [state]
  (choose-board-size-page))