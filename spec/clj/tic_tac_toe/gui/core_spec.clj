(ns tic-tac-toe.gui.core-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.gui.core :as sut]
            [quil.core :as q]))

(describe "gui core functions"
  (with-stubs)

  (context "constants"

    (it "returns correct grid constants"
      (should= 600 sut/grid-width)
      (should= 200 sut/button-width)
      (should= 40 sut/button-height)
      (should= [600 600] sut/grid-size))
    )

  (context "drawing"
    (with-stubs)

    (redefs-around [q/fill       (stub :fill)
                    q/stroke     (stub :stroke)
                    q/background (stub :background)
                    q/rect       (stub :rect)
                    q/text-align (stub :text-align)
                    q/text-size  (stub :text-size)
                    q/text       (stub :text)])

    (it "white-background calls q/background 255"
      (sut/white-background)
      (should-have-invoked :background {:with [255]}))

    (it "gray-line calls q/stroke with 220"
      (sut/gray-line)
      (should-have-invoked :stroke {:with [220]}))

    (it "fill-black calls q/fill 0"
      (sut/fill-black)
      (should-have-invoked :fill {:with [0]}))

    (let [test-button ["test text" (+ 1 (/ 1 2)) (+ 1 (/ 1 2))]]
      (it "draws button with x, y, width, height, and label"
        (sut/draw-button "test text" 1 1 1 1)
        (should-have-invoked :fill {:with [230]})
        (should-have-invoked :rect {:with [1 1 1 1 10]})
        (should-have-invoked :fill {:with [0]})
        (should-have-invoked :text-align {:with [:center :center]})
        (should-have-invoked :text-size {:with [20]})
        (should-have-invoked :text {:with test-button})))
    )

  (context "draw-gray-grid-lines page rendering"
    (redefs-around [sut/gray-line             (stub :gray-line)
                    sut/draw-vertical-lines   (stub :draw-vertical-lines)
                    sut/draw-horizontal-lines (stub :draw-horizontal-lines)
                    sut/grid-width            100])

    (it "renders 3x3 board gray lines"
      (sut/draw-gray-grid-lines {:board-size :3x3})
      (should-have-invoked :gray-line)
      (should-have-invoked :draw-vertical-lines {:with [100/3]})
      (should-have-invoked :draw-horizontal-lines {:with [100/3]}))

    (it "renders 4x4 board gray lines"
      (sut/draw-gray-grid-lines {:board-size :4x4})
      (should-have-invoked :gray-line)
      (should-have-invoked :draw-vertical-lines {:with [25]})
      (should-have-invoked :draw-horizontal-lines {:with [25]}))
    )
  )