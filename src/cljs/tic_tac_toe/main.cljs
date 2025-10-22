(ns tic-tac-toe.main
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [reagent.ratom :as ratom]
            [tic-tac-toe.boardc :as board]
            [tic-tac-toe.gamec :as gamec]
            [tic-tac-toe.player-typesc :as player-type]
            tic-tac-toe.expert-aic))

(defonce game-state
  (r/atom {:board         (board/starting-nil-board :3x3)
           :board-size    :3x3
           :current-token :X
           :X             :human
           :O             :human
           :turn-count    0}))

(defn winner? [board size]
  (cond
    (board/win? board :X size) :X
    (board/win? board :O size) :O))

(defn make-move [state move]
  (let [new-state (gamec/->new-state state move)
        new-board (:board new-state)
        size      (:board-size new-state)
        winner    (winner? new-board size)
        draw      (board/full-board? new-board size)]
    (swap! game-state merge new-state {:winner winner :draw draw})))

(defn handle-move [move]
  (let [state @game-state]
    (when (not (:draw state))
      (make-move state move))))

(defn maybe-handle-ai-move []
  (let [state @game-state]
    (when (not= :human (get state (:current-token state)))
      (handle-move (player-type/->player-move state)))))

(defn- reset-game [state]
  {:board         (board/starting-nil-board (:board-size state))
   :board-size    (:board-size state)
   :current-token :X
   :X             (:X state)
   :O             (:O state)
   :turn-count    0})

(defn reset-game! []
  (swap! game-state reset-game))

(defn ->button-square [row col]
  (let [{:keys [board winner draw]} @game-state
        value (get-in board [row col])]
    [:button.square
     {:on-click #(handle-move [row col])
      :disabled (or value winner draw)}
     (when value (name value))]))

(defn ->board-grid []
  (let [size (count (:board @game-state))]
    [:div.board {:data-size size}
     (for [row (range size)
           col (range size)]
       ^{:key (str row "-" col)}
       [->button-square row col])]))

(defn board-grid! []
  (let [track (ratom/make-track! maybe-handle-ai-move [])]
    (r/create-class
      {:component-will-unmount #(ratom/dispose! track)
       :reagent-render
       (fn []
         (->board-grid))})))

(defn ->status-message []
  (let [{:keys [current-token winner draw]} @game-state]
    (cond
      winner (str "Winner: " winner)
      draw "Draw!"
      :else (str "Turn: " current-token))))

(defn set-board-size [size]
  (swap! game-state
         (fn [state]
           {:board         (board/starting-nil-board size)
            :board-size    size
            :current-token :X
            :X             (:X state)
            :O             (:O state)
            :turn-count    0})))

(defn size-selector []
  (let [current-size (:board-size @game-state)]
    [:div {:style {:margin "15px"}}
     [:span "Board Size: "]
     [:button.selection-button
      {:on-click #(set-board-size :3x3)
       :class    (when (= current-size :3x3) "active")}
      "3x3"]
     [:button.selection-button
      {:on-click #(set-board-size :4x4)
       :class    (when (= current-size :4x4) "active")}
      "4x4"]]))

(defn set-player-type-o [player-type]
  (swap! game-state
         (fn [state]
           {:board         (board/starting-nil-board (:board-size state))
            :board-size    (:board-size state)
            :current-token :X
            :X             (:X state)
            :O             player-type
            :turn-count    0})))

(defn player-selector []
  (let [current-type (:O @game-state)]
    [:div {:style {:margin "15px"}}
     [:span "Player O: "]
     [:button.selection-button.human
      {:on-click #(set-player-type-o :human)
       :class    (when (= current-type :human) "active")}
      "Human"]
     [:button.selection-button.ai
      {:on-click #(set-player-type-o :expert-ai)
       :class    (when (= current-type :expert-ai) "active")}
      "Expert AI"]]))

(defn app []
  [:div.container
   [:h1 "Tic Tac Toe"]
   [size-selector]
   [player-selector]
   [board-grid!]
   [:div {:style {:margin "10px"}} [->status-message]]
   [:button.reset {:on-click reset-game!} "Reset"]])

(defn ^:export main []
  (rdom/render [app] (js/document.getElementById "root")))
