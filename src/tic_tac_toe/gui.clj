(ns tic-tac-toe.gui
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [tic-tac-toe.quil :as quil]))

(defn -main [database]
  (q/defsketch tic-tac-toe
               :title "Tic Tac Toe"
               :size quil/grid-size
               :setup #(quil/setup database)
               :update quil/update-state
               :draw quil/draw-state
               :mouse-pressed quil/on-mouse-click
               :middleware [m/fun-mode]))