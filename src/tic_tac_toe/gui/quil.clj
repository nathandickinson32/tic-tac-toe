(ns tic-tac-toe.gui.quil
  (:require [quil.core :as q]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.player-types :as player-types]
            [tic-tac-toe.gui.core :as core]))

(defn ai-turn? [state]
  (and (:current-token state)
       (:X state)
       (:O state)
       (not (board/end-game? (:board state) (:board-size state)))
       (not= :human (get state (:current-token state)))))

(defn ai-make-move [state]
  (->> (player-types/->player-move state)
       (game/->new-state state)))

(defn update-state [state]
  (if (board/end-game? (:board state) (:board-size state))
    (assoc state :page :game-over)
    (if (ai-turn? state)
      (ai-make-move state)
      state)))

(defn setup [database]
  (q/frame-rate 60)
  (core/create-new-game database))