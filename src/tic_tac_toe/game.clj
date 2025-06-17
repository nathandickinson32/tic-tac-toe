(ns tic-tac-toe.game
  (:require [tic-tac-toe.board :as board]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.player-types :refer [->player-move]]
            [tic-tac-toe.human]
            [tic-tac-toe.easy-ai]
            [tic-tac-toe.expert-ai]))

(def tokens {"X" :X "O" :O})

(def opponents {"1" :human "2" :easy-ai "3" :expert-ai})

(defn switch-player [current-player]
  (if (= :X current-player)
    :O
    :X))

(defn ask-for-token []
  (output/choose-token)
  (let [input (board/->clean-user-input)
        token (get tokens input)]
    (if token
      token
      (do
        (output/invalid-token-response)
        (recur)))))

(defn ask-for-opponent []
  (output/choose-opponent)
  (let [input    (board/->clean-user-input)
        opponent (get opponents input)]
    (if opponent
      opponent
      (do
        (output/invalid-opponent-response)
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

(defn take-turns [{:keys [board current-token] :as state}]
  (output/print-board board)
  (let [move        (->player-move state)
        new-board   (board/make-move board move current-token)
        next-player (switch-player current-token)]
    (when-not (game-over? new-board current-token)
      (recur (assoc state :current-token next-player :board new-board)))))

(defn build-game-state []
  (let [user-token     (ask-for-token)
        opponent       (ask-for-opponent)
        first-token    (ask-for-first-player)
        opponent-token (board/switch-player user-token)
        players        {user-token     :human
                        opponent-token opponent}
        state          {:X             (players :X)
                        :O             (players :O)
                        :board         output/starting-board
                        :current-token first-token}]
    (take-turns state)))