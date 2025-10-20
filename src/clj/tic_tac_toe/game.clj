(ns tic-tac-toe.game
  (:require [tic-tac-toe.boardc :as board]
            [tic-tac-toe.easy-aic]
            [tic-tac-toe.medium-aic]
            [tic-tac-toe.expert-aic]
            [tic-tac-toe.records :as records]
            [clojure.set :as set]))

(def board-sizes {"9" :3x3 "16" :4x4 "27" :3x3x3})

(def tokens {"X" :X "O" :O})

(def players {"1" :human "2" :easy-ai "3" :medium-ai "4" :expert-ai})

(defn starting-game-state [board-size players board first-token database]
  {:board-size    board-size
   :X             (:X players)
   :O             (:O players)
   :board         board
   :current-token first-token
   :turn-count    0
   :game-id       (random-uuid)
   :database      database})

(defn playable-state [last-state]
  {:board-size    (:board-size last-state)
   :X             (:X last-state)
   :O             (:O last-state)
   :board         (:board last-state)
   :current-token (:current-token last-state)
   :game-id       (:game-id last-state)
   :turn-count    (:turn-count last-state)
   :database      (:database last-state)})

(defn unfinished-game? [last-state]
  (and last-state
       (not (board/game-over? (:board last-state)
                              (board/switch-player (:current-token last-state))
                              (:board-size last-state)))))

(defn ->str-move [grid-move board-size]
  (let [positions (set/map-invert (board/determine-positions board-size))]
    (get positions grid-move)))

(defn ->new-state [{:keys [board current-token board-size turn-count] :as state} grid-move]
  (let [new-board   (board/make-move board grid-move current-token)
        next-player (board/switch-player current-token)
        turn-count  (inc turn-count)
        new-state   (assoc state
                      :current-token next-player
                      :board new-board
                      :turn-count turn-count)
        str-move    (->str-move grid-move board-size)]
    (records/save-game new-state str-move)
    new-state))