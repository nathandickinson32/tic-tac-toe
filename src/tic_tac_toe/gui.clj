(ns tic-tac-toe.gui
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.quil :as quil]
            [tic-tac-toe.easy-ai :as easy-ai]))

(defn update-state [state]
  (if (= :easy-ai (get state (:current-token state)))
    (->> (easy-ai/choose-random-move (:board state) (:board-size state))
         (game/->new-state state))
    state))

(defn -main []
  (q/defsketch tic-tac-toe
               :size quil/grid-size
               :setup quil/setup
               :update update-state
               :draw quil/draw-state
               :mouse-clicked quil/mouse-clicked
               :middleware [m/fun-mode]))