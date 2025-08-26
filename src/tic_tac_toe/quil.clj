(ns tic-tac-toe.quil
  (:require [quil.core :as q]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.game :as game]
            [tic-tac-toe.player-types :as player-types]))

(def grid-width 600)
(def grid-size [grid-width grid-width])

(def button-width 200)
(def button-height 40)
(def button-padding 20)

(def row-top-1 280)

(defn white-background [] (q/background 255))
(defn gray-line [] (q/stroke 220))
(defn fill-black [] (q/fill 0))

(defn create-new-game [database]
  {:game-id    (random-uuid)
   :turn-count 0
   :page       :choose-first-player
   :board      board/starting-board-3x3
   :database   database})

(defn draw-button [label x y width height]
  (q/fill 230)
  (q/rect x y width height 10)
  (q/fill 0)
  (q/text-align :center :center)
  (q/text-size 20)
  (q/text label (+ x (/ width 2)) (+ y (/ height 2))))

(defn draw-vertical-lines [cell-size]
  (doseq [x (range cell-size grid-width cell-size)]
    (q/line x 0 x grid-width)))

(defn draw-horizontal-lines [cell-size]
  (doseq [y (range cell-size grid-width cell-size)]
    (q/line 0 y grid-width y)))

(defn draw-gray-grid-lines [{:keys [board-size]}]
  (let [n         (case board-size :3x3 3 :4x4 4)
        cell-size (/ grid-width n)]
    (gray-line)
    (draw-vertical-lines cell-size)
    (draw-horizontal-lines cell-size)))

(defn ->pixel-location [cell n]
  (+ (* cell (/ grid-width n)) (/ (/ grid-width n) 2)))

(defn draw-token [col row token board-size]
  (let [n (case board-size :3x3 3 :4x4 4)]
    (fill-black)
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

(defn player-X-button []
  (draw-button "Player X"
               (- (/ grid-width 2) button-width 20) row-top-1
               button-width button-height))

(defn player-O-button []
  (draw-button "Player O"
               (+ (/ grid-width 2) 20) row-top-1
               button-width button-height))

(defn choose-first-player-page []
  (white-background)
  (q/text-align :center :center)
  (q/text-size 32)
  (q/text "Welcome to Tic Tac Toe!" (/ grid-width 2) 150)
  (q/text-size 24)
  (q/text "Who should go first?" (/ grid-width 2) 220)
  (player-X-button)
  (player-O-button))

(defn button-position-x []
  (- (/ grid-width 2) (/ button-width 2)))

(defn draw-player-choice-buttons []
  (draw-button "Human" (button-position-x) 190 button-width button-height)
  (draw-button "Easy Ai" (button-position-x) 250 button-width button-height)
  (draw-button "Medium Ai" (button-position-x) 310 button-width button-height)
  (draw-button "Expert Ai" (button-position-x) 370 button-width button-height))

(defn choose-player-X-page []
  (white-background)
  (q/text-align :center :center)
  (q/text-size 24)
  (q/text "Choose Player X" (/ grid-width 2) 150)
  (draw-player-choice-buttons))

(defn choose-player-O-page []
  (white-background)
  (q/text-align :center :center)
  (q/text-size 24)
  (q/text "Choose Player O" (/ grid-width 2) 150)
  (draw-player-choice-buttons))

(def play-again-button
  {:top    (+ (/ grid-width 2) 50)
   :bottom (+ (+ (/ grid-width 2) 50) button-height)
   :left   (button-position-x)
   :right  (+ (button-position-x) button-width)})

(defn draw-play-again-button []
  (draw-button "Play Again"
               (:left play-again-button)
               (:top play-again-button)
               button-width
               button-height))

(defn- region-clicked? [{:keys [x y]} {:keys [top left bottom right]}]
  (and (<= left x right)
       (<= top y bottom)))

(defn end-game-message [state]
  (when (board/end-game? (:board state) (:board-size state))
    (assoc state :page :end-game)))

(defn play-game-page [state]
  (white-background)
  (draw-gray-grid-lines state)
  (draw-tokens state)
  (end-game-message state))

(defn play-again? [click-position]
  (region-clicked? click-position play-again-button))

(defn draw-end-game [state]
  (white-background)
  (draw-gray-grid-lines state)
  (draw-tokens state)
  (q/fill 0)
  (q/text-align :center :center)
  (q/text-size 32)
  (q/text "Game Over!" (/ grid-width 2) (- (/ grid-width 2) 80))
  (draw-play-again-button))

(defn valid-click-move? [row col {:keys [board current-token board-size] :as state}]
  (let [in-progress? (not (board/game-over? board current-token board-size))
        new-state    (game/->new-state state [row col])]
    (if (and (board/space-available? board [row col]) in-progress?)
      new-state
      state)))

(defn play-human-move [state click-position]
  (let [gui-size  (case (:board-size state) :3x3 3 :4x4 4)
        cell-size (/ grid-width gui-size)
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

(defmulti on-mouse-click (fn [state _click-position] (:page state)))

(def x-button
  {:top    row-top-1
   :right  (- (/ grid-width 2) button-padding)
   :bottom (+ row-top-1 button-height)
   :left   (- (/ grid-width 2) button-padding button-width)})

(def o-button
  {:top    row-top-1
   :left   (+ (/ grid-width 2) button-padding)
   :bottom (+ row-top-1 button-height)
   :right  (+ (/ grid-width 2) button-padding button-width)})

(defn- x-clicked? [click-position]
  (region-clicked? click-position x-button))

(defn- o-clicked? [click-position]
  (region-clicked? click-position o-button))

(defmethod on-mouse-click :choose-first-player [state click-position]
  (cond
    (x-clicked? click-position)
    (assoc state :current-token :X :page :choose-board-size)
    (o-clicked? click-position)
    (assoc state :current-token :O :page :choose-board-size)
    :else state))

(def human-button
  {:top    190
   :bottom (+ 190 button-height)
   :left   (button-position-x)
   :right  (+ (button-position-x) button-width)})

(def easy-ai-button
  {:top    250
   :bottom (+ 250 button-height)
   :left   (button-position-x)
   :right  (+ (button-position-x) button-width)})

(def medium-ai-button
  {:top    310
   :bottom (+ 310 button-height)
   :left   (button-position-x)
   :right  (+ (button-position-x) button-width)})

(def expert-ai-button
  {:top    370
   :bottom (+ 370 button-height)
   :left   (button-position-x)
   :right  (+ (button-position-x) button-width)})

(defn- human-clicked? [click-position] (region-clicked? click-position human-button))
(defn- easy-ai-clicked? [click-position] (region-clicked? click-position easy-ai-button))
(defn- medium-ai-clicked? [click-position] (region-clicked? click-position medium-ai-button))
(defn- expert-ai-clicked? [click-position] (region-clicked? click-position expert-ai-button))

(defn choose-board-size-page []
  (white-background)
  (q/text-align :center :center)
  (q/text-size 24)
  (q/text "Choose board size" (/ grid-width 2) 220)
  (draw-button "3x3"
               (- (/ grid-width 2) button-width 20) row-top-1
               button-width button-height)
  (draw-button "4x4"
               (+ (/ grid-width 2) 20) row-top-1
               button-width button-height))

(def board-3x3-button
  {:top    row-top-1
   :bottom (+ row-top-1 button-height)
   :left   (- (/ grid-width 2) button-width 20)
   :right  (+ (- (/ grid-width 2) button-width 20) button-width)})

(def board-4x4-button
  {:top    row-top-1
   :bottom (+ row-top-1 button-height)
   :left   (+ (/ grid-width 2) 20)
   :right  (+ (+ (/ grid-width 2) 20) button-width)})

(defn- board-3x3-clicked? [click-position]
  (region-clicked? click-position board-3x3-button))

(defn- board-4x4-clicked? [click-position]
  (region-clicked? click-position board-4x4-button))

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
  (cond
    (human-clicked? click-position) (assoc state :X :human :page :choose-player-O)
    (easy-ai-clicked? click-position) (assoc state :X :easy-ai :page :choose-player-O)
    (medium-ai-clicked? click-position) (assoc state :X :medium-ai :page :choose-player-O)
    (expert-ai-clicked? click-position) (assoc state :X :expert-ai :page :choose-player-O)
    :else state))

(defmethod on-mouse-click :choose-player-O [state click-position]
  (cond
    (human-clicked? click-position) (assoc state :O :human :page :play-game)
    (easy-ai-clicked? click-position) (assoc state :O :easy-ai :page :play-game)
    (medium-ai-clicked? click-position) (assoc state :O :medium-ai :page :play-game)
    (expert-ai-clicked? click-position) (assoc state :O :expert-ai :page :play-game)
    :else state))

(defmethod on-mouse-click :game-over [state click-position]
  (if (play-again? click-position)
    (create-new-game (:database state))
    state))

(defmethod on-mouse-click :play-game [state click-position]
  (play-human-move state click-position))

(defn draw-state [state]
  (cond (nil? (:current-token state)) (choose-first-player-page)
        (nil? (:board-size state)) (choose-board-size-page)
        (nil? (:X state)) (choose-player-X-page)
        (nil? (:O state)) (choose-player-O-page)
        (= :game-over (:page state)) (draw-end-game state)
        :else (play-game-page state)))

(defmulti -draw-state :page)

(defmethod -draw-state :choose-first-player []
  (choose-first-player-page))

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