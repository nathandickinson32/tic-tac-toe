(ns tic-tac-toe.main-spec
  (:require-macros [speclj.core :refer [it describe before should=]]
                   [c3kit.wire.spec-helperc :refer [should-select]])
  (:require
    [speclj.core]
    [c3kit.wire.spec-helper :as wire]
    [tic-tac-toe.main :as sut]))

(describe "main"
  (wire/with-root-dom)
  (before (wire/render [sut/app]))

  (it "renders to the page"
    (should-select "#hello-world")
    (should= "hello-world" (wire/text "#hello-world h1")))
  )

