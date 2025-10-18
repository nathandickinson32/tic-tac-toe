(ns tic-tac-toe.main
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [c3kit.wire.js :as wjs]))

;; --- Game State ---
(defonce game-state
         (r/atom {:board-size 3
                  :board (vec (repeat 9 nil))
                  :current-player "X"
                  :winner nil}))

;; --- Helpers ---
(defn winner? [board board-size]
  (let [indices (range board-size)
        rows (for [r indices] (map #(+ r (* % board-size)) indices))
        cols (for [c indices] (map #(+ c (* % board-size)) indices))
        diag1 (map #(* (+ 1 %) board-size) indices)
        diag2 (map #(+ (* % (dec board-size)) (dec board-size)) indices)
        lines (concat rows cols [diag1 diag2])]
    (some (fn [line]
            (let [[a b & rest] line]
              (when (and (board a)
                         (every? #(= (board a) (board %)) line))
                (board a))))
          lines)))

(defn reset-game []
  (let [size (:board-size @game-state)]
    (reset! game-state {:board-size size
                        :board (vec (repeat (* size size) nil))
                        :current-player "X"
                        :winner nil})))

;; --- Components ---
(defn square [i]
  (let [{:keys [board current-player winner]} @game-state]
    [:button.square
     {:on-click #(when (and (nil? (board i)) (nil? winner))
                   (swap! game-state
                          (fn [{:keys [board current-player board-size] :as s}]
                            (let [new-board (assoc board i current-player)
                                  next-player (if (= current-player "X") "O" "X")
                                  maybe-winner (winner? new-board board-size)]
                              (-> s
                                  (assoc :board new-board)
                                  (assoc :current-player next-player)
                                  (assoc :winner maybe-winner))))))}
     (board i)]))

(defn board []
  (let [{:keys [board-size board]} @game-state]
    [:div.board  ;; use .board to match CSS
     ;; optional inline style for dynamic grid (optional)
     {:style {"grid-template-columns" (str "repeat(" board-size ", 100px)")}}
     (for [i (range (count board))]
       ^{:key i} [square i])]))

(defn status []
  (let [{:keys [current-player winner]} @game-state]
    [:div.status
     (cond
       winner [:h2 (str "Winner: " winner)]
       :else [:h2 (str "Turn: " current-player)])]))

(defn reset-button []
  [:button.reset {:on-click reset-game} "Play Again"])

(defn board-size-selector []
  [:div
   [:label "Board size: "]
   [:select {:value (:board-size @game-state)
             :on-change #(let [size (js/parseInt (-> % .-target .-value))]
                           (swap! game-state assoc
                                  :board-size size
                                  :board (vec (repeat (* size size) nil))
                                  :current-player "X"
                                  :winner nil))}
    (for [size (range 3 6)]
      ^{:key size} [:option {:value size} (str size "x" size)])]])

(defn app []
  [:div.container
   [:h1 "Tic Tac Toe"]
   [status]
   [board-size-selector]
   [board]
   [reset-button]])

;; --- Mount app ---
(defn ^:export main []
  (rdom/render [app] (wjs/element-by-id "root")))
