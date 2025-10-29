(ns tic-tac-toe.game-over-page
  (:require [tic-tac-toe.core :as core]
            [quil.core :as q]
            [tic-tac-toe.mouse-clicks :refer [on-mouse-click]]
            [tic-tac-toe.draw-pages :refer [draw-state]]))

(def play-again-button
  {:top    (+ (/ core/grid-width 2) 50)
   :bottom (+ (+ (/ core/grid-width 2) 50) core/button-height)
   :left   (core/button-position-x)
   :right  (+ (core/button-position-x) core/button-width)})

(defn draw-play-again-button []
  (core/draw-button "Play Again"
                    (:left play-again-button)
                    (:top play-again-button)
                    core/button-width
                    core/button-height))

(defn play-again? [click-position]
  (core/region-clicked? click-position play-again-button))

(defn game-over-page [state]
  (core/white-background)
  (core/draw-gray-grid-lines state)
  (core/draw-tokens state)
  (q/fill 0)
  (q/text-align :center :center)
  (q/text-size 32)
  (q/text "Game Over!" (/ core/grid-width 2) (- (/ core/grid-width 2) 80))
  (draw-play-again-button))

(defmethod on-mouse-click :game-over [state click-position]
  (if (play-again? click-position)
    (core/create-new-game (:database state))
    state))

(defmethod draw-state :game-over [state]
  (game-over-page state))