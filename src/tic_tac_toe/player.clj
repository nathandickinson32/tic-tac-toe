(ns tic-tac-toe.player)

(defn switch-player [current-player]
  (if (= \X current-player)
    \O
    \X))
