(ns tic-tac-toe.gui-sketch
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [tic-tac-toe.core :as core]
            [tic-tac-toe.update-state :refer [update-state]]
            [tic-tac-toe.mouse-clicks :refer [on-mouse-click]]
            [tic-tac-toe.draw-pages :refer [draw-state]]
            [tic-tac-toe.first-player-page]
            [tic-tac-toe.board-size-page]
            [tic-tac-toe.player-type-page]
            [tic-tac-toe.play-game-page]
            [tic-tac-toe.game-over-page]))

(defn -main [database]
  (q/defsketch tic-tac-toe
               :title "Tic Tac Toe"
               :size core/grid-size
               :setup #(core/setup database)
               :update update-state
               :draw draw-state
               :mouse-pressed on-mouse-click
               :middleware [m/fun-mode]))
