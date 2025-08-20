(ns tic-tac-toe.gui
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [tic-tac-toe.quil :as quil]))

(defn -main []
  (q/defsketch tic-tac-toe
               :title "Tic Tac Toe"
               :size quil/grid-size
               :setup quil/setup
               :update quil/update-state
               :draw quil/draw-state
               :mouse-clicked quil/mouse-clicked
               :middleware [m/fun-mode]))