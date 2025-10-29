(ns tic-tac-toe.core-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.core :as sut]
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

    (redefs-around [q/fill         (stub :fill)
                    q/stroke       (stub :stroke)
                    q/background   (stub :background)
                    q/rect         (stub :rect)
                    q/text-align   (stub :text-align)
                    q/text-size    (stub :text-size)
                    q/text         (stub :text)
                    sut/grid-width 100
                    q/line         (stub :line)])

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

    (it "draws vertical lines for a 3x3 board"
      (sut/draw-vertical-lines 33)
      (should-have-invoked :line {:with [33 0 33 100]})
      (should-have-invoked :line {:with [66 0 66 100]}))

    (it "draws vertical lines for a 4x4 board"
      (sut/draw-vertical-lines 25)
      (should-have-invoked :line {:with [25 0 25 100]})
      (should-have-invoked :line {:with [50 0 50 100]})
      (should-have-invoked :line {:with [75 0 75 100]}))

    (it "draws horizontal lines for a 3x3 board"
      (sut/draw-horizontal-lines 33)
      (should-have-invoked :line {:with [0 33 100 33]})
      (should-have-invoked :line {:with [0 66 100 66]}))

    (it "draws horizontal lines for a 4x4 board"
      (sut/draw-horizontal-lines 25)
      (should-have-invoked :line {:with [0 25 100 25]})
      (should-have-invoked :line {:with [0 50 100 50]})
      (should-have-invoked :line {:with [0 75 100 75]}))
    )

  (context "draw-gray-grid-lines"

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

  (context "->pixel-location"

    (redefs-around [sut/grid-width 100])

    (it "calculates pixel location for 3x3 grid"
      (should= 50/3 (sut/->pixel-location 0 3))
      (should= 50 (sut/->pixel-location 1 3))
      (should= 250/3 (sut/->pixel-location 2 3)))

    (it "calculates pixel location for 4x4 grid"
      (should= 25/2 (sut/->pixel-location 0 4))
      (should= 75/2 (sut/->pixel-location 1 4))
      (should= 125/2 (sut/->pixel-location 2 4))
      (should= 175/2 (sut/->pixel-location 3 4)))
    )

  (context "draw-token"

    (redefs-around [sut/grid-width 100
                    sut/fill-black (stub :fill-black)
                    q/text-align   (stub :text-align)
                    q/text-size    (stub :text-size)
                    q/text         (stub :text)])

    (it "draws X at [0 0] on 3x3 board"
      (sut/draw-token 0 0 :X :3x3)
      (should-have-invoked :fill-black)
      (should-have-invoked :text-align {:with [:center :center]})
      (should-have-invoked :text-size {:with [72]})
      (should-have-invoked :text {:with ["X" 50/3 50/3]}))

    (it "draws O at [2 1] on 4x4 board"
      (sut/draw-token 2 1 :O :4x4)
      (should-have-invoked :text {:with ["O" 125/2 75/2]}))
    )

  (context "draw-tokens"

    (redefs-around [sut/grid-width 100
                    sut/draw-token (stub :draw-token)])

    (it "draws tokens from a 3x3 board"
      (sut/draw-tokens {:board      [[nil :X nil]
                                     [nil nil nil]
                                     [:O nil nil]]
                        :board-size :3x3})
      (should-have-invoked :draw-token {:with [1 0 :X :3x3]})
      (should-have-invoked :draw-token {:with [0 2 :O :3x3]}))

    (it "draws tokens from a 4x4 board"
      (sut/draw-tokens {:board      [[nil nil nil nil]
                                     [nil :X nil nil]
                                     [nil nil nil nil]
                                     [nil nil :O nil]]
                        :board-size :4x4})
      (should-have-invoked :draw-token {:with [1 1 :X :4x4]})
      (should-have-invoked :draw-token {:with [2 3 :O :4x4]}))
    )
  )