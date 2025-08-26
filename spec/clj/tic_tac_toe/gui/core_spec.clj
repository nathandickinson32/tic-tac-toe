(ns tic-tac-toe.gui.core-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.gui.core :as sut]
            [quil.core :as q]))

(describe "gui core functions"

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
                    q/line       (stub :line)
                    q/background (stub :background)])

    (it "white-background calls q/background 255"
      (sut/white-background)
      (should-have-invoked :background {:with [255]}))

    (it "gray-line calls q/stroke with 220"
      (sut/gray-line)
      (should-have-invoked :stroke {:with [220]}))

    (it "fill-black calls q/fill 0"
      (sut/fill-black)
      (should-have-invoked :fill {:with [0]}))
    )
  )