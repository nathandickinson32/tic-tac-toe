;(ns tic-tac-toe.gui.first-player-page
;  (:require [quil.core :as q]
;            [tic-tac-toe.quil :as quil]))
;
;
;(defn player-X-button []
;  (quil/draw-button "Player X"
;               (- (/ quil/grid-width 2) quil/button-width 20) quil/row-top-1
;                    quil/button-width quil/button-height))
;
;(defn player-O-button []
;  (quil/draw-button "Player O"
;               (+ (/ quil/grid-width 2) 20) quil/row-top-1
;                    quil/button-width quil/button-height))
;
;(defn choose-first-player-page []
;  (quil/white-background)
;  (q/text-align :center :center)
;  (q/text-size 32)
;  (q/text "Welcome to Tic Tac Toe!" (/ quil/grid-width 2) 150)
;  (q/text-size 24)
;  (q/text "Who should go first?" (/ quil/grid-width 2) 220)
;  (player-X-button)
;  (player-O-button))
;
;(def x-button
;  {:top    quil/row-top-1
;   :right  (- (/ quil/grid-width 2) quil/button-padding)
;   :bottom (+ quil/row-top-1 quil/button-height)
;   :left   (- (/ quil/grid-width 2) quil/button-padding quil/button-width)})
;
;(def o-button
;  {:top    quil/row-top-1
;   :left   (+ (/ quil/grid-width 2) quil/button-padding)
;   :bottom (+ quil/row-top-1 quil/button-height)
;   :right  (+ (/ quil/grid-width 2) quil/button-padding quil/button-width)})
;
;(defn x-clicked? [click-position]
;  (quil/region-clicked? click-position x-button))
;
;(defn o-clicked? [click-position]
;  (quil/region-clicked? click-position o-button))
;
;(defn on-click [state click-position]
;  (cond
;    (x-clicked? click-position) (assoc state :current-token :X :page :choose-player-X)
;    (o-clicked? click-position) (assoc state :current-token :O :page :choose-player-O)
;    :else state))