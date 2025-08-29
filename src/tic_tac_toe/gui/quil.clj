(ns tic-tac-toe.gui.quil
  (:require [quil.core :as q]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.player-types :as player-types]
            [tic-tac-toe.gui.core :as core]
            [tic-tac-toe.gui.first-player-page :as first-player-page]
            [tic-tac-toe.gui.board-size-page :as board-size-page]
            [tic-tac-toe.gui.player-type-page :as player-type-page]
            [tic-tac-toe.gui.play-game-page :as play-game-page]
            [tic-tac-toe.gui.game-over-page :as game-over-page]))

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

(defn draw-state [state]
  (cond (nil? (:current-token state)) (first-player-page/choose-first-player-page)
        (nil? (:board-size state)) (board-size-page/choose-board-size-page)
        (nil? (:X state)) (player-type-page/choose-player-X-page)
        (nil? (:O state)) (player-type-page/choose-player-O-page)
        (= :game-over (:page state)) (game-over-page/game-over-page state)
        :else (play-game-page/play-game-page state)))

(defmulti -draw-state :page)

(defmethod -draw-state :choose-first-player []
  (first-player-page/choose-first-player-page))

(defmethod -draw-state :choose-player-X []
  (player-type-page/choose-player-X-page))

(defmethod -draw-state :choose-player-O []
  (player-type-page/choose-player-O-page))

(defmethod -draw-state :play-game [state]
  (play-game-page/play-game-page state))

(defmethod -draw-state :choose-board-size []
  (board-size-page/choose-board-size-page))

(defmethod -draw-state :game-over-page [state]
  (game-over-page/game-over-page state))

(defn setup [database]
  (q/frame-rate 60)
  (core/create-new-game database))