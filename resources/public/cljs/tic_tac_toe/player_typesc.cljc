(ns tic-tac-toe.player-typesc)

(defn- current-token-type [state]
  (get state (:current-token state)))

(defmulti ->player-move current-token-type)