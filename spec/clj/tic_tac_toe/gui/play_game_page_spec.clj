(ns tic-tac-toe.gui.play-game-page-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.gui.mouse-clicks :as mouse-clicks]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.gui.core :as core]))

(defn ->click [x y] {:x x :y y})

(declare state)

(describe "play game page"

  (with state {:page          :play-game
               :board         board/starting-board-3x3
               :board-size    :3x3
               :current-token :X
               :X             :human
               :O             :easy-ai
               :turn-count    0
               :database      :edn-file})

  (it "clicks on top-left cell of the board"
    (let [cell-size (/ core/grid-width 3)
          click-pos (->click (/ cell-size 2) (/ cell-size 2))
          new-state (mouse-clicks/on-mouse-click @state click-pos)]
      (should= :O (:current-token new-state))
      (should= :human (:X new-state))
      (should= :easy-ai (:O new-state))
      (should= :play-game (:page new-state))
      (should= :X (get-in (:board new-state) [0 0]))))

  (it "clicks on center cell of the board"
    (let [cell-size (/ core/grid-width 3)
          click-pos (->click (+ cell-size (/ cell-size 2))
                             (+ cell-size (/ cell-size 2)))
          new-state (mouse-clicks/on-mouse-click @state click-pos)]
      (should= :O (:current-token new-state))
      (should= :X (get-in (:board new-state) [1 1]))))

  (it "clicks on bottom-right cell of the board"
    (let [cell-size (/ core/grid-width 3)
          click-pos (->click (+ (* 2 cell-size) (/ cell-size 2))
                             (+ (* 2 cell-size) (/ cell-size 2)))
          new-state (mouse-clicks/on-mouse-click @state click-pos)]
      (should= :O (:current-token new-state))
      (should= :X (get-in (:board new-state) [2 2]))))

  (it "clicks on a cell that is already taken"
    (let [cell-size              (/ core/grid-width 3)
          click-pos              (->click (/ cell-size 2) (/ cell-size 2))
          state-after-first-move (mouse-clicks/on-mouse-click @state click-pos)
          new-state              (mouse-clicks/on-mouse-click state-after-first-move click-pos)]
      (should= state-after-first-move new-state)))
  )