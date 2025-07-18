(ns tic-tac-toe.game
  (:require [tic-tac-toe.board :as board]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.player-types :refer [->player-move]]
            [tic-tac-toe.human]
            [tic-tac-toe.easy-ai]
            [tic-tac-toe.medium-ai]
            [tic-tac-toe.expert-ai]
            [tic-tac-toe.records :as records]))

(def board-sizes {"9" :3x3 "16" :4x4 "27" :3x3x3})

(def tokens {"X" :X "O" :O})

(def players {"1" :human "2" :easy-ai "3" :medium-ai "4" :expert-ai})

(defn switch-player [current-player]
  (if (= :X current-player)
    :O
    :X))

(defn ask-for-board-size []
  (output/choose-board-size)
  (let [input (board/->clean-user-input)]
    (if-let [board-size (get board-sizes input)]
      board-size
      (do
        (output/invalid-board-size-response)
        (recur)))))

(defn determine-starting-board [board-size]
  (cond
    (= :3x3 board-size) output/starting-board-3x3
    (= :4x4 board-size) output/starting-board-4x4
    (= :3x3x3 board-size) output/starting-board-3x3x3))

(defn ask-for-token []
  (output/choose-token)
  (let [input (board/->clean-user-input)]
    (if-let [token (get tokens input)]
      token
      (do
        (output/invalid-token-response)
        (recur)))))

(defn ask-for-player []
  (output/choose-player)
  (let [input (board/->clean-user-input)]
    (if-let [player (get players input)]
      player
      (do
        (output/invalid-response)
        (recur)))))

(defn ask-for-first-player []
  (output/choose-first-player)
  (let [input (board/->clean-user-input)]
    (if-let [token (get tokens input)]
      token
      (do
        (output/invalid-response)
        (recur)))))

(defn play-again? [build-game-state]
  (let [input (board/->clean-user-input)]
    (when (= input "Y")
      (build-game-state))))

(defn take-turns [{:keys [board current-token depth board-size] :as state}]
  (output/determine-board-to-print board-size board)
  (let [move        (->player-move state)
        new-board   (board/make-move board move current-token)
        next-player (switch-player current-token)
        new-depth   (inc depth)
        new-state   (assoc state
                      :current-token next-player
                      :board new-board
                      :depth new-depth)]
    (records/record-move new-state)
    (if (board/game-over? new-board current-token board-size)
      (do (output/determine-board-to-print board-size new-board)
          new-state)
      (recur new-state))))

(defn build-game-state []
  (let [board-size     (ask-for-board-size)
        board          (determine-starting-board board-size)
        player-1       (ask-for-player)
        player-1-token (ask-for-token)
        player-2       (ask-for-player)
        first-token    (ask-for-first-player)
        player-2-token (board/switch-player player-1-token)
        players        {player-1-token player-1
                        player-2-token player-2}
        state          {:board-size    board-size
                        :X             (:X players)
                        :O             (:O players)
                        :board         board
                        :current-token first-token
                        :depth         0
                        :game-id       (str (random-uuid))}]
    (take-turns state)
    (output/play-again?)
    (play-again? build-game-state)))