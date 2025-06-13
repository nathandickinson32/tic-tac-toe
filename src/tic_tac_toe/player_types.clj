(ns tic-tac-toe.player-types)

(defn- current-token-type [state]
  (get state (:current-token state)))

(defmulti ->player-move current-token-type)