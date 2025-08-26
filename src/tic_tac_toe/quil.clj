(ns tic-tac-toe.quil
  (:require [quil.core :as q]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.player-types :as player-types]
            [tic-tac-toe.gui.core :as core]
            [tic-tac-toe.gui.first-player-page :as first-player-page]
            [tic-tac-toe.gui.mouse :refer [on-mouse-click]]))

(defn create-new-game [database]
  {:game-id    (random-uuid)
   :turn-count 0
   :page       :choose-first-player
   :board      board/starting-board-3x3
   :database   database})

(defn draw-vertical-lines [cell-size]
  (doseq [x (range cell-size core/grid-width cell-size)]
    (q/line x 0 x core/grid-width)))

(defn draw-horizontal-lines [cell-size]
  (doseq [y (range cell-size core/grid-width cell-size)]
    (q/line 0 y core/grid-width y)))

(defn draw-gray-grid-lines [{:keys [board-size]}]
  (let [n         (case board-size :3x3 3 :4x4 4)
        cell-size (/ core/grid-width n)]
    (core/gray-line)
    (draw-vertical-lines cell-size)
    (draw-horizontal-lines cell-size)))

(defn ->pixel-location [cell n]
  (+ (* cell (/ core/grid-width n)) (/ (/ core/grid-width n) 2)))

(defn draw-token [col row token board-size]
  (let [n (case board-size :3x3 3 :4x4 4)]
    (core/fill-black)
    (q/text-align :center :center)
    (q/text-size 72)
    (q/text (name token)
            (->pixel-location col n)
            (->pixel-location row n))))

(defn draw-tokens [{:keys [board board-size]}]
  (let [n (case board-size :3x3 3 :4x4 4)]
    (doseq [row (range n)
            col (range n)
            :let [cell (get-in board [row col])]]
      (when (keyword? cell) (draw-token col row cell board-size)))))

(defn draw-player-choice-buttons []
  (core/draw-button "Human" (core/button-position-x) 190 core/button-width core/button-height)
  (core/draw-button "Easy Ai" (core/button-position-x) 250 core/button-width core/button-height)
  (core/draw-button "Medium Ai" (core/button-position-x) 310 core/button-width core/button-height)
  (core/draw-button "Expert Ai" (core/button-position-x) 370 core/button-width core/button-height))

(defn choose-player-X-page []
  (core/white-background)
  (q/text-align :center :center)
  (q/text-size 24)
  (q/text "Choose Player X" (/ core/grid-width 2) 150)
  (draw-player-choice-buttons))

(defn choose-player-O-page []
  (core/white-background)
  (q/text-align :center :center)
  (q/text-size 24)
  (q/text "Choose Player O" (/ core/grid-width 2) 150)
  (draw-player-choice-buttons))

(def play-again-button
  {:top    (+ (/ core/grid-width 2) 50)
   :bottom (+ (+ (/ core/grid-width 2) 50) core/button-height)
   :left   (core/button-position-x)
   :right  (+ (core/button-position-x) core/button-width)})

(defn draw-play-again-button []
  (core/draw-button "Play Again"
                    (:left play-again-button)
                    (:top play-again-button)
                    core/button-width
                    core/button-height))

(defn end-game-message [state]
  (when (board/end-game? (:board state) (:board-size state))
    (assoc state :page :end-game)))

(defn play-game-page [state]
  (core/white-background)
  (draw-gray-grid-lines state)
  (draw-tokens state)
  (end-game-message state))

(defn play-again? [click-position]
  (core/region-clicked? click-position play-again-button))

(defn draw-end-game [state]
  (core/white-background)
  (draw-gray-grid-lines state)
  (draw-tokens state)
  (q/fill 0)
  (q/text-align :center :center)
  (q/text-size 32)
  (q/text "Game Over!" (/ core/grid-width 2) (- (/ core/grid-width 2) 80))
  (draw-play-again-button))

(defn valid-click-move? [row col {:keys [board current-token board-size] :as state}]
  (let [in-progress? (not (board/game-over? board current-token board-size))
        new-state    (game/->new-state state [row col])]
    (if (and (board/space-available? board [row col]) in-progress?)
      new-state
      state)))

(defn play-human-move [state click-position]
  (let [gui-size  (case (:board-size state) :3x3 3 :4x4 4)
        cell-size (/ core/grid-width gui-size)
        col       (int (/ (:x click-position) cell-size))
        row       (int (/ (:y click-position) cell-size))]
    (valid-click-move? row col state)))

(defn ai-turn? [state]
  (and (:current-token state)
       (:X state)
       (:O state)
       (not (board/end-game? (:board state) (:board-size state)))
       (not= :human (get state (:current-token state)))))

(defn ai-make-move [state]
  (->> (player-types/->player-move state)
       (game/->new-state state)))

(defn update-state [state]
  (if (board/end-game? (:board state) (:board-size state))
    (assoc state :page :game-over)
    (if (ai-turn? state)
      (ai-make-move state)
      state)))

(def human-button
  {:top    190
   :bottom (+ 190 core/button-height)
   :left   (core/button-position-x)
   :right  (+ (core/button-position-x) core/button-width)})

(def easy-ai-button
  {:top    250
   :bottom (+ 250 core/button-height)
   :left   (core/button-position-x)
   :right  (+ (core/button-position-x) core/button-width)})

(def medium-ai-button
  {:top    310
   :bottom (+ 310 core/button-height)
   :left   (core/button-position-x)
   :right  (+ (core/button-position-x) core/button-width)})

(def expert-ai-button
  {:top    370
   :bottom (+ 370 core/button-height)
   :left   (core/button-position-x)
   :right  (+ (core/button-position-x) core/button-width)})

(defn- human-clicked? [click-position] (core/region-clicked? click-position human-button))
(defn- easy-ai-clicked? [click-position] (core/region-clicked? click-position easy-ai-button))
(defn- medium-ai-clicked? [click-position] (core/region-clicked? click-position medium-ai-button))
(defn- expert-ai-clicked? [click-position] (core/region-clicked? click-position expert-ai-button))

(defn choose-board-size-page []
  (core/white-background)
  (q/text-align :center :center)
  (q/text-size 24)
  (q/text "Choose board size" (/ core/grid-width 2) 220)
  (core/draw-button "3x3"
                    (- (/ core/grid-width 2) core/button-width 20) core/row-top-1
                    core/button-width core/button-height)
  (core/draw-button "4x4"
                    (+ (/ core/grid-width 2) 20) core/row-top-1
                    core/button-width core/button-height))

(def board-3x3-button
  {:top    core/row-top-1
   :bottom (+ core/row-top-1 core/button-height)
   :left   (- (/ core/grid-width 2) core/button-width 20)
   :right  (+ (- (/ core/grid-width 2) core/button-width 20) core/button-width)})

(def board-4x4-button
  {:top    core/row-top-1
   :bottom (+ core/row-top-1 core/button-height)
   :left   (+ (/ core/grid-width 2) 20)
   :right  (+ (+ (/ core/grid-width 2) 20) core/button-width)})

(defn- board-3x3-clicked? [click-position]
  (core/region-clicked? click-position board-3x3-button))

(defn- board-4x4-clicked? [click-position]
  (core/region-clicked? click-position board-4x4-button))

(defmethod on-mouse-click :choose-board-size [state click-position]
  (cond
    (board-3x3-clicked? click-position)
    (assoc state :board-size :3x3
                 :board board/starting-board-3x3
                 :page :choose-player-X)

    (board-4x4-clicked? click-position)
    (assoc state :board-size :4x4
                 :board board/starting-board-4x4
                 :page :choose-player-X)

    :else state))

(defmethod on-mouse-click :choose-player-X [state click-position]
  (if-let [x (cond
               (human-clicked? click-position) :human
               (easy-ai-clicked? click-position) :easy-ai
               (medium-ai-clicked? click-position) :medium-ai
               (expert-ai-clicked? click-position) :expert-ai)]
    (assoc state :X x :page :choose-player-O)
    state))

(defmethod on-mouse-click :choose-player-O [state click-position]
  (if-let [o (cond
               (human-clicked? click-position) :human
               (easy-ai-clicked? click-position) :easy-ai
               (medium-ai-clicked? click-position) :medium-ai
               (expert-ai-clicked? click-position) :expert-ai)]
    (assoc state :O o :page :play-game)
    state))

(defmethod on-mouse-click :game-over [state click-position]
  (if (play-again? click-position)
    (create-new-game (:database state))
    state))

(defmethod on-mouse-click :play-game [state click-position]
  (play-human-move state click-position))

(defn draw-state [state]
  (cond (nil? (:current-token state)) (first-player-page/choose-first-player-page)
        (nil? (:board-size state)) (choose-board-size-page)
        (nil? (:X state)) (choose-player-X-page)
        (nil? (:O state)) (choose-player-O-page)
        (= :game-over (:page state)) (draw-end-game state)
        :else (play-game-page state)))

(defmulti -draw-state :page)

(defmethod -draw-state :choose-first-player []
  (first-player-page/choose-first-player-page))

(defmethod -draw-state :choose-player-X []
  (choose-player-X-page))

(defmethod -draw-state :choose-player-O []
  (choose-player-O-page))

(defmethod -draw-state :play-game [state]
  (play-game-page state))

(defmethod -draw-state :choose-board-size []
  (choose-board-size-page))

(defn setup [database]
  (q/frame-rate 60)
  (create-new-game database))