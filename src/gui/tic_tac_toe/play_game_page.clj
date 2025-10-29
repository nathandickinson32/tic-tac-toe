(ns tic-tac-toe.play-game-page
  (:require [tic-tac-toe.core :as core]
            [tic-tac-toe.boardc :as board]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.mouse-clicks :refer [on-mouse-click]]
            [tic-tac-toe.draw-pages :refer [draw-state]]))

(defn play-game-page [state]
  (core/white-background)
  (core/draw-gray-grid-lines state)
  (core/draw-tokens state))

(defn valid-click-move? [row col {:keys [board current-token board-size] :as state}]
  (let [in-progress? (not (board/game-over? board current-token board-size))
        new-state    (game/->new-state state [row col])]
    (if (and (board/space-available? board [row col]) in-progress?)
      new-state
      state)))

(defn play-human-move [state click-position]
  (let [gui-size  (case (:board-size state) :3x3 3 :4x4 4)
        cell-size (/ core/grid-width gui-size)
        col       (int (/ (:x click-position) cell-size))
        row       (int (/ (:y click-position) cell-size))]
    (valid-click-move? row col state)))

(defmethod on-mouse-click :play-game [state click-position]
  (play-human-move state click-position))

(defmethod draw-state :play-game [state]
  (play-game-page state))