(ns tic-tac-toe.update-state-spec
  (:require [speclj.core :refer :all]
            [quil.core :as q]
            [tic-tac-toe.core :as core]))

(declare state)

(describe "Tic Tac Toe GUI"
  (with-stubs)

  (redefs-around [q/frame-rate (stub :frame-rate)])

  (it "sets up the GUI state"
    (let [state (core/setup :postgres)]
      (should-have-invoked :frame-rate {:with [60]})
      (should-be uuid? (:game-id state))
      (should= :choose-first-player (:page state))
      (should= 0 (:turn-count state))
      (should= :postgres (:database state))))
  )