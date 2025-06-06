(ns tic-tac-toe.game
  (:require [tic-tac-toe.board :as board]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.ai :as ai]))

(def game-modes
  {"1" {\X :human \O :human :board output/starting-board :current-token \X}
   "2" {\X :human \O :ai :board output/starting-board :current-token \X}
   "3" {\X :ai \O :human :board output/starting-board :current-token \X}})

(defn maybe-valid-game-mode [input]
  (get game-modes input))

(defn switch-player [current-player]
  (if (= \X current-player)
    \O
    \X))

(defn full-board? [board]
  (every? #{\X \O} (flatten board)))

(defn three-matches? [row token]
  (every? #(= % token) row))

(defn diagonal-right [board]
  [(get-in board [0 0])
   (get-in board [1 1])
   (get-in board [2 2])])

(defn diagonal-left [board]
  [(get-in board [0 2])
   (get-in board [1 1])
   (get-in board [2 0])])

(defn winning-row? [board token]
  (some #(three-matches? % token) board))

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
  (let [type        (state current-token)
        move        (if (= type :human)
                      (board/get-user-move board current-token)
                      (ai/choose-move board))
        new-board   (board/make-move board move current-token)
        next-player (switch-player current-token)]
    (when-not (game-over? new-board current-token)
      (recur (assoc state :current-token next-player :board new-board)))))

(defn choose-game-mode []
  (output/game-mode-prompt)
  (let [input (clojure.string/trim (read-line))
        state (maybe-valid-game-mode input)]
    (if state
      (take-turns state)
      (do
        (output/invalid-response)
        (recur)))))