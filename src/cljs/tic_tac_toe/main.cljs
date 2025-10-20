(ns tic-tac-toe.main
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [tic-tac-toe.boardc :as board]
            [tic-tac-toe.gamec :as gamec]))

(defn empty-board [board-size]
  (let [size (if (= :3x3 board-size) 3 4)]
    (vec (repeat size (vec (repeat size nil))))))

(defn valid-move? [state [row col]]
  (and (board/space-available? (:board state) [row col])
       (not (:winner state))
       (not (:draw state))))

(defonce app-state
         (r/atom {:board         (empty-board :3x3)
                  :board-size    :3x3
                  :current-token :X
                  :X             :human
                  :O             :human
                  :turn-count    0}))

(defn handle-move [row col]
  (let [state @app-state
        move  [row col]]
    (when (valid-move? state move)
      (let [new-state (gamec/->new-state state move)
            new-board (:board new-state)
            size      (:board-size new-state)
            winner    (cond
                        (board/win? new-board :X size) :X
                        (board/win? new-board :O size) :O)
            draw      (board/full-board? new-board size)]
        (swap! app-state merge new-state {:winner winner :draw draw})))))

(defn reset-game []
  (let [size (:board-size @app-state)]
    (swap! app-state
           (fn [_]
             {:board         (empty-board size)
              :board-size    size
              :current-token :X
              :X             :human
              :O             :human
              :turn-count    0}))))

(defn set-board-size [size-keyword]
  (swap! app-state
         (fn [_]
           {
            :board      (empty-board size-keyword)
            :board-size size-keyword
            :current-token :X
            ;:X             :human
            ;:O             :human
            :turn-count 0})))

(defn button-square [row col]
  (let [{:keys [board winner draw]} @app-state
        value (get-in board [row col])]
    [:button.square
     {:on-click #(handle-move row col)
      :disabled (or value winner draw)}
     (when value (name value))]))

(defn board-grid []
  (let [size (count (:board @app-state))]
    [:div.board {:data-size size}
     (for [row (range size)
           col (range size)]
       ^{:key (str row "-" col)}
       [button-square row col])]))

(defn status-message []
  (let [{:keys [current-token winner draw]} @app-state]
    (cond
      winner (str "Winner: " winner)
      draw "Draw!"
      :else (str "Turn: " current-token))))

(defn size-selector []
  [:div {:style {:margin "15px"}}
   [:span "Board Size: "]
   [:button.selection-button {:on-click #(set-board-size :3x3)} "3x3"]
   [:button.selection-button {:on-click #(set-board-size :4x4)
             :style    {:margin-left "10px"}} "4x4"]])

(defn app []
  [:div.container
   [:h1 "Tic Tac Toe"]
   [size-selector]
   [board-grid]
   [:div {:style {:margin "10px"}} [status-message]]
   [:button.reset {:on-click reset-game} "Reset"]])

(defn ^:export main []
  (rdom/render [app] (js/document.getElementById "root")))
