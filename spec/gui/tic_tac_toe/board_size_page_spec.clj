(ns tic-tac-toe.board-size-page-spec
  (:require [speclj.core :refer :all]
            [quil.core :as q]
            [tic-tac-toe.board-size-page :as sut]
            [tic-tac-toe.boardc :as board]
            [tic-tac-toe.core :as core]
            [tic-tac-toe.mouse-clicks :refer [on-mouse-click]]))

(defn ->click [x y] {:x x :y y})

(declare state)

(describe "board-size-page"
  (with-stubs)

  (context "page rendering"

    (redefs-around [core/white-background (stub :background)
                    q/text-align          (stub :text-align)
                    q/text-size           (stub :text-size)
                    q/text                (stub :text)
                    core/draw-button      (stub :draw-button)])

    (let [text3x3 ["3x3" (- (/ core/grid-width 2) core/button-width 20)
                     core/row-top-1 core/button-width core/button-height]
          text4x4 ["4x4" (+ (/ core/grid-width 2) 20)
                     core/row-top-1 core/button-width core/button-height]]
      (it "renders choose board size page"
        (sut/choose-board-size-page)
        (should-have-invoked :background)
        (should-have-invoked :text-align {:with [:center :center]})
        (should-have-invoked :text-size {:with [24]})
        (should-have-invoked :text {:with ["Choose board size"
                                           (/ core/grid-width 2) 220]})
        (should-have-invoked :draw-button {:with text3x3})
        (should-have-invoked :draw-button {:with text4x4})))
    )

  (context "button regions"

    (it "defines 3x3 button region"
      (should= {:top    core/row-top-1
                :bottom (+ core/row-top-1 core/button-height)
                :left   (- (/ core/grid-width 2) core/button-width 20)
                :right  (+ (- (/ core/grid-width 2) core/button-width 20) core/button-width)}
               sut/board-3x3-button))

    (it "defines 4x4 button region"
      (should= {:top    core/row-top-1
                :bottom (+ core/row-top-1 core/button-height)
                :left   (+ (/ core/grid-width 2) 20)
                :right  (+ (+ (/ core/grid-width 2) 20) core/button-width)}
               sut/board-4x4-button))
    )

  (context "mouse click handling"

    (with state {:page :choose-board-size})

    (it "clicks on something other than a button"
      (should= @state (on-mouse-click @state (->click 1 1))))

    (it "clicks bottom-right corner of 3x3 button"
      (let [x         (+ (- (/ core/grid-width 2) core/button-width 20)
                         core/button-width)
            y         (+ core/row-top-1 core/button-height)
            new-state (on-mouse-click @state (->click x y))]
        (should= (assoc @state :board-size :3x3
                               :board board/starting-board-3x3
                               :page :choose-player-X)
                 new-state)))

    (it "clicks bottom-left corner of 4x4 button"
      (let [x         (+ (/ core/grid-width 2) 20)
            y         (+ core/row-top-1 core/button-height)
            new-state (on-mouse-click @state (->click x y))]
        (should= (assoc @state :board-size :4x4
                               :board board/starting-board-4x4
                               :page :choose-player-X)
                 new-state)))

    (it "clicks on the 3x3 button"
      (let [x         (- (/ core/grid-width 2) core/button-width 20)
            y         core/row-top-1
            new-state (on-mouse-click @state (->click x y))]
        (should= (assoc @state :board-size :3x3
                               :board board/starting-board-3x3
                               :page :choose-player-X)
                 new-state)))

    (it "clicks on the 4x4 button"
      (let [x         (+ (/ core/grid-width 2) 20)
            y         core/row-top-1
            new-state (on-mouse-click @state (->click x y))]
        (should= (assoc @state :board-size :4x4
                               :board board/starting-board-4x4
                               :page :choose-player-X)
                 new-state)))
    )
  )