(ns tic-tac-toe.gui.mouse-clicks)

(defmulti on-mouse-click (fn [state _click-position] (:page state)))