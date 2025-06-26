(ns tic-tac-toe.game
  (:require [tic-tac-toe.board :as board]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.player-types :refer [->player-move]]
            [tic-tac-toe.human]
            [tic-tac-toe.easy-ai]
            [tic-tac-toe.medium-ai]
            [tic-tac-toe.expert-ai]))

(def board-sizes {"3" :3x3 "4" :4x4})

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
  (= :3x3 board-size)
  output/starting-board-3x3
  output/starting-board-3x3)                                ;need to make 4x4 starting-board

(defn ->starting-board []
  (determine-starting-board (ask-for-board-size)))

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
  (ask-for-token))

(defn full-board? [board]
  (->> (flatten board) (every? #{:X :O})))

(defn three-matches? [row token]
  (->> row (every? #(= % token))))

(defn diagonal-right [board]
  [(get-in board [0 0])
   (get-in board [1 1])
   (get-in board [2 2])])

(defn diagonal-left [board]
  [(get-in board [0 2])
   (get-in board [1 1])
   (get-in board [2 0])])

(defn winning-row? [board token]
  (->> board (some #(three-matches? % token))))

(defn winning-col? [board token]
  (let [columns-as-rows (apply mapv vector board)]
    (winning-row? columns-as-rows token)))

(defn winning-diagonal? [board token]
  (or (three-matches? (diagonal-right board) token)
      (three-matches? (diagonal-left board) token)))

(defn win? [board token]
  (or (winning-row? board token)
      (winning-col? board token)
      (winning-diagonal? board token)))

(defn game-over? [board token]
  (cond
    (win? board token) (do (output/winner-message board token) true)
    (full-board? board) (do (output/draw-message board) true)))

(defn take-turns [{:keys [board current-token depth] :as state}]
  (output/print-board board)
  (let [move        (->player-move state)
        new-board   (board/make-move board move current-token)
        next-player (switch-player current-token)
        new-depth   (inc depth)
        new-state   (assoc state
                      :current-token next-player
                      :board new-board
                      :depth new-depth)]
    (if (game-over? new-board current-token)
      new-state
      (recur new-state))))

(defn play-again? [build-game-state]
  (let [input (board/->clean-user-input)]
    (when (= input "Y")
      (build-game-state))))

(defn build-game-state []
  (let [board          (->starting-board)
        player-1       (ask-for-player)
        player-1-token (ask-for-token)
        player-2       (ask-for-player)
        first-token    (ask-for-first-player)
        player-2-token (board/switch-player player-1-token)
        players        {player-1-token player-1
                        player-2-token player-2}
        state          {:X             (:X players)
                        :O             (:O players)
                        :board         board
                        :current-token first-token
                        :depth         0}]
    (take-turns state)
    (output/play-again?)
    (play-again? build-game-state)))