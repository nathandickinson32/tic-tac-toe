(ns tic-tac-toe.gui.gui-sketch
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [tic-tac-toe.gui.quil :as quil]
            [tic-tac-toe.gui.core :as core]
            [tic-tac-toe.gui.mouse-clicks :refer [on-mouse-click]]))

(defn -main [database]
  (q/defsketch tic-tac-toe
               :title "Tic Tac Toe"
               :size core/grid-size
               :setup #(quil/setup database)
               :update quil/update-state
               :draw quil/draw-state
               ;:draw quil/-draw-state
               :mouse-pressed on-mouse-click
               :middleware [m/fun-mode]))