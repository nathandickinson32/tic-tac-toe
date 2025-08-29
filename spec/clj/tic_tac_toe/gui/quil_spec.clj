(ns tic-tac-toe.gui.quil-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.gui.update-state :as sut]
            [quil.core :as q]))

(declare state)

(describe "Tic Tac Toe GUI"
  (with-stubs)

  (redefs-around [q/frame-rate (stub :frame-rate)])

  (it "sets up the GUI state"
    (let [state (sut/setup :postgres)]
      (should-have-invoked :frame-rate {:with [60]})
      (should-be uuid? (:game-id state))
      (should= :choose-first-player (:page state))
      (should= 0 (:turn-count state))
      (should= :postgres (:database state))))
  )