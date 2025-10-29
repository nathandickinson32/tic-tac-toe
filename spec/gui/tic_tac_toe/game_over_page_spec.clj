(ns tic-tac-toe.game-over-page-spec
  (:require [speclj.core :refer :all]
            [quil.core :as q]
            [tic-tac-toe.mouse-clicks :as mouse-clicks]
            [tic-tac-toe.core :as core]
            [tic-tac-toe.game-over-page :as sut]
            [tic-tac-toe.boardc :as board]))

(defn ->click [x y] {:x x :y y})

(declare state)

(describe "game-over-page"
  (with-stubs)

  (with state {:page          :game-over
               :board         board/starting-board-3x3
               :board-size    :3x3
               :current-token :X
               :X             :human
               :O             :easy-ai
               :turn-count    0
               :database      :edn-file})

  (context "page rendering"

    (redefs-around [core/white-background     (stub :background)
                    core/draw-gray-grid-lines (stub :draw-gray-grid-lines)
                    core/draw-tokens          (stub :draw-tokens)
                    q/text-align              (stub :text-align)
                    q/text-size               (stub :text-size)
                    q/text                    (stub :text)
                    q/fill                    (stub :fill)])

    (it "renders play again button"
      (with-redefs [core/draw-button (stub :draw-button)]
        (sut/draw-play-again-button)
        (should-have-invoked :draw-button {:with ["Play Again"
                                                  (:left sut/play-again-button)
                                                  (:top sut/play-again-button)
                                                  core/button-width
                                                  core/button-height]})))

    (let [game-over-text ["Game Over!"
                          (/ core/grid-width 2)
                          (- (/ core/grid-width 2) 80)]]
      (it "renders game over page"
        (with-redefs [sut/draw-play-again-button (stub :draw-play-again-button)]
          (sut/game-over-page state)
          (should-have-invoked :background)
          (should-have-invoked :draw-gray-grid-lines {:with [state]})
          (should-have-invoked :draw-tokens {:with [state]})
          (should-have-invoked :fill {:with [0]})
          (should-have-invoked :text-align {:with [:center :center]})
          (should-have-invoked :text-size {:with [32]})
          (should-have-invoked :text {:with game-over-text})
          (should-have-invoked :draw-play-again-button))))
    )

  (context "button region"

    (it "defines play again button"
      (should= {:top    (+ (/ core/grid-width 2) 50)
                :bottom (+ (+ (/ core/grid-width 2) 50) core/button-height)
                :left   (core/button-position-x)
                :right  (+ (core/button-position-x) core/button-width)}
               sut/play-again-button))
    )

  (context "mouse click handling"

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
  )