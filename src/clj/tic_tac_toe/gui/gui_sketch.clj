(ns tic-tac-toe.gui.gui-sketch
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [tic-tac-toe.gui.core :as core]
            [tic-tac-toe.gui.update-state :refer [update-state]]
            [tic-tac-toe.gui.mouse-clicks :refer [on-mouse-click]]
            [tic-tac-toe.gui.draw-pages :refer [draw-state]]
            [tic-tac-toe.gui.first-player-page]
            [tic-tac-toe.gui.board-size-page]
            [tic-tac-toe.gui.player-type-page]
            [tic-tac-toe.gui.play-game-page]
            [tic-tac-toe.gui.game-over-page]))

(defn -main [database]
  (q/defsketch tic-tac-toe
               :title "Tic Tac Toe"
               :size core/grid-size
               :setup #(core/setup database)
               :update update-state
               :draw draw-state
               :mouse-pressed on-mouse-click
               :middleware [m/fun-mode]))