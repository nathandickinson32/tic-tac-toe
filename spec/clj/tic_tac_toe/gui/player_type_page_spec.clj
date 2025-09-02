(ns tic-tac-toe.gui.player-type-page-spec
  (:require [speclj.core :refer :all]
            [quil.core :as q]
            [tic-tac-toe.gui.player-type-page :as sut]
            [tic-tac-toe.gui.mouse-clicks :as mouse-clicks]
            [tic-tac-toe.gui.core :as core]))

(defn ->click [x y] {:x x :y y})

(declare state)

(describe "player-type-page"
  (with-stubs)

  (context "page rendering"

    (redefs-around [core/white-background (stub :background)
                    q/text-align          (stub :text-align)
                    q/text-size           (stub :text-size)
                    q/text                (stub :text)
                    core/draw-button      (stub :draw-button)])

    (let [human-button     ["Human"
                            (core/button-position-x)
                            190
                            core/button-width
                            core/button-height]
          easy-ai-button   ["Easy Ai"
                            (core/button-position-x)
                            250 core/button-width
                            core/button-height]
          medium-ai-button ["Medium Ai"
                            (core/button-position-x)
                            310
                            core/button-width
                            core/button-height]
          expert-ai-button ["Expert Ai"
                            (core/button-position-x)
                            370
                            core/button-width
                            core/button-height]]
      (it "renders player choice buttons"
        (sut/draw-player-choice-buttons)
        (should-have-invoked :draw-button {:with human-button})
        (should-have-invoked :draw-button {:with easy-ai-button})
        (should-have-invoked :draw-button {:with medium-ai-button})
        (should-have-invoked :draw-button {:with expert-ai-button})))


    (it "renders X player type page"
      (with-redefs [sut/draw-player-choice-buttons (stub :player-choice-buttons)]
        (sut/choose-player-X-page)
        (should-have-invoked :background)
        (should-have-invoked :text-align {:with [:center :center]})
        (should-have-invoked :text-size {:with [24]})
        (should-have-invoked :text {:with ["Choose Player X" (/ core/grid-width 2) 150]})
        (should-have-invoked :player-choice-buttons)))

    (it "renders O player type page"
      (with-redefs [sut/draw-player-choice-buttons (stub :player-choice-buttons)]
        (sut/choose-player-O-page)
        (should-have-invoked :background)
        (should-have-invoked :text-align {:with [:center :center]})
        (should-have-invoked :text-size {:with [24]})
        (should-have-invoked :text {:with ["Choose Player O" (/ core/grid-width 2) 150]})
        (should-have-invoked :player-choice-buttons)))
    )

  (context "button regions"

    (it "defines human button"
      (should= {:top    190
                :bottom (+ 190 core/button-height)
                :left   (core/button-position-x)
                :right  (+ (core/button-position-x) core/button-width)}
               sut/human-button))

    (it "defines easy-ai button"
      (should= {:top    250
                :bottom (+ 250 core/button-height)
                :left   (core/button-position-x)
                :right  (+ (core/button-position-x) core/button-width)}
               sut/easy-ai-button))

    (it "defines medium-ai button"
      (should= {:top    310
                :bottom (+ 310 core/button-height)
                :left   (core/button-position-x)
                :right  (+ (core/button-position-x) core/button-width)}
               sut/medium-ai-button))

    (it "defines expert-ai button"
      (should= {:top    370
                :bottom (+ 370 core/button-height)
                :left   (core/button-position-x)
                :right  (+ (core/button-position-x) core/button-width)}
               sut/expert-ai-button))
    )

  (context "mouse click handling"

    (context "choosing player X"

      (with state {:page :choose-player-X})

      (it "clicks on something other than a button"
        (should= @state (mouse-clicks/on-mouse-click @state (->click 1 1))))

      (it "clicks on Human button"
        (let [x         (- (/ core/grid-width 2) (/ core/button-width 2))
              y         190
              new-state (mouse-clicks/on-mouse-click @state (->click x y))]
          (should= (assoc @state :X :human :page :choose-player-O) new-state)))

      (it "clicks on Easy AI button"
        (let [x         (- (/ core/grid-width 2) (/ core/button-width 2))
              y         250
              new-state (mouse-clicks/on-mouse-click @state (->click x y))]
          (should= (assoc @state :X :easy-ai :page :choose-player-O) new-state)))

      (it "clicks on Medium AI button"
        (let [x         (- (/ core/grid-width 2) (/ core/button-width 2))
              y         310
              new-state (mouse-clicks/on-mouse-click @state (->click x y))]
          (should= (assoc @state :X :medium-ai :page :choose-player-O) new-state)))

      (it "clicks on Expert AI button"
        (let [x         (- (/ core/grid-width 2) (/ core/button-width 2))
              y         370
              new-state (mouse-clicks/on-mouse-click @state (->click x y))]
          (should= (assoc @state :X :expert-ai :page :choose-player-O) new-state)))
      )

    (context "choosing player O"

      (with state {:page :choose-player-O})

      (it "clicks on something other than a button"
        (should= @state (mouse-clicks/on-mouse-click @state (->click 1 1))))

      (it "clicks on Human button"
        (let [x         (- (/ core/grid-width 2) (/ core/button-width 2))
              y         190
              new-state (mouse-clicks/on-mouse-click @state (->click x y))]
          (should= (assoc @state :O :human :page :play-game) new-state)))

      (it "clicks on Easy AI button"
        (let [x         (- (/ core/grid-width 2) (/ core/button-width 2))
              y         250
              new-state (mouse-clicks/on-mouse-click @state (->click x y))]
          (should= (assoc @state :O :easy-ai :page :play-game) new-state)))

      (it "clicks on Medium AI button"
        (let [x         (- (/ core/grid-width 2) (/ core/button-width 2))
              y         310
              new-state (mouse-clicks/on-mouse-click @state (->click x y))]
          (should= (assoc @state :O :medium-ai :page :play-game) new-state)))

      (it "clicks on Expert AI button"
        (let [x         (- (/ core/grid-width 2) (/ core/button-width 2))
              y         370
              new-state (mouse-clicks/on-mouse-click @state (->click x y))]
          (should= (assoc @state :O :expert-ai :page :play-game) new-state)))
      )
    )
  )