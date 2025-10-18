(ns tic-tac-toe.main
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [c3kit.wire.js :as wjs]
            ))

(defn title []
  (r/with-let [text (r/atom "hello")]
    [:h1 {:on-click #(reset! text "goodbye")} @text]))

(defn app []
  [:div#hello-world
   [title]])

(defn ^:export main []
  (rdom/render [app] (wjs/element-by-id "root")))






