(ns tic-tac-toe.gui.mouse)

(defmulti on-mouse-click (fn [state _click-position] (:page state)))
