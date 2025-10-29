(ns tic-tac-toe.mouse-clicks)

(defmulti on-mouse-click (fn [state _click-position] (:page state)))