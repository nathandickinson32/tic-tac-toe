(ns tic-tac-toe.gui.game-over-page-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.gui.mouse-clicks :as mouse-clicks]
            [tic-tac-toe.gui.core :as core]
            [tic-tac-toe.gui.game-over-page :as sut]
            [tic-tac-toe.board :as board]))

(defn ->click [x y] {:x x :y y})

(declare state)

(describe "game-over-page"

  (with state {:page          :game-over
               :board         board/starting-board-3x3
               :board-size    :3x3
               :current-token :X
               :X             :human
               :O             :easy-ai
               :turn-count 0
               :database :edn-file})

  (it "clicks somewhere outside the Play Again button"
    (let [click-pos (->click 1 1)
          new-state (mouse-clicks/on-mouse-click @state click-pos)]
      (should= @state new-state)))

  (it "clicks in the center of the Play Again button"
    (let [click-pos (->click (+ (:left sut/play-again-button)
                                (/ core/button-width 2))
                             (+ (:top sut/play-again-button)
                                (/ core/button-height 2)))
          new-state (mouse-clicks/on-mouse-click @state click-pos)]
      (should= :choose-first-player (:page new-state))
      (should-not= (:game-id @state) (:game-id new-state))
      (should= :edn-file (:database new-state))))

  (it "clicks on the top-left corner of Play Again button"
    (let [click-pos (->click (:left sut/play-again-button)
                             (:top sut/play-again-button))
          new-state (mouse-clicks/on-mouse-click @state click-pos)]
      (should= :choose-first-player (:page new-state))
      (should-not= (:game-id @state) (:game-id new-state))))

  (it "clicks on the bottom-right corner of Play Again button"
    (let [click-pos (->click (:right sut/play-again-button)
                             (:bottom sut/play-again-button))
          new-state (mouse-clicks/on-mouse-click @state click-pos)]
      (should= :choose-first-player (:page new-state))
      (should-not= (:game-id @state) (:game-id new-state))))
  )