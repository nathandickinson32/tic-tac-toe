(ns tic-tac-toe.gui
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.quil :as quil]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.player-types :refer [->player-move]]))

(defn update-state [state]
  (if (and (:current-token state)
           (:X state)
           (:O state)
           (not (board/end-game? (:board state) (:board-size state)))
           (not= :human (get state (:current-token state))))
    (->> (->player-move state)
         (game/->new-state state))
    state))

(defn -main []
  (q/defsketch tic-tac-toe
               :title "Tic Tac Toe"
               :size quil/grid-size
               :setup quil/setup
               :update update-state
               :draw quil/draw-state
               :mouse-clicked quil/mouse-clicked
               :middleware [m/fun-mode]))