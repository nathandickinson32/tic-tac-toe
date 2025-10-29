(ns tic-tac-toe.update-state
  (:require [tic-tac-toe.boardc :as board]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.player-typesc :as player-types]))

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