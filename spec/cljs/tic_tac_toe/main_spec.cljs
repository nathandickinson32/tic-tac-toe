(ns tic-tac-toe.main-spec
  (:require-macros [speclj.core :refer [describe context it before should should-not should= should-be-nil should-contain]]
                   [c3kit.wire.spec-helperc :refer [should-select]])
  (:require
    [speclj.core]
    [c3kit.wire.spec-helper :as wire]
    [tic-tac-toe.main :as sut]))

(describe "main"

  (wire/with-root-dom)

  (before (sut/reset-game)
          (wire/render [sut/app]))

  (it "renders title"
    (should-select ".container")
    (should-contain "Tic Tac Toe" (wire/text! ".container")))

  (it "empty board sizes"
    (should= [[nil nil nil] [nil nil nil] [nil nil nil]] (sut/empty-board :3x3))
    (should= (vec (repeat 4 (vec (repeat 4 nil)))) (sut/empty-board :4x4)))

  (it "initializes app-state"
    (should= :3x3 (:board-size @sut/app-state))
    (should= :X (:current-token @sut/app-state))
    (should= :human (:X @sut/app-state))
    (should= :human (:O @sut/app-state))
    (should= 0 (:turn-count @sut/app-state))
    (should= (sut/empty-board :3x3) (:board @sut/app-state)))

  (it "renders a 3x3 board"
    (let [buttons (wire/select-all ".square")]
      (should= 9 (count buttons))))

  (context "handle move"

    (it "marks token and does not allow moves on occupied squares"
      (wire/click! "button.square:nth-of-type(1)")
      (should-contain "X" (wire/text! "button.square:nth-of-type(1)"))
      (wire/click! "button.square:nth-of-type(1)")
      (should-contain "X" (wire/text! "button.square:nth-of-type(1)"))
      (should= :O (:current-token @sut/app-state)))

    (it "handles multiple turns"
      (wire/click! "button.square:nth-of-type(1)")
      (wire/click! "button.square:nth-of-type(2)")
      (wire/click! "button.square:nth-of-type(3)")
      (should-contain "X" (wire/text! "button.square:nth-of-type(1)"))
      (should-contain "O" (wire/text! "button.square:nth-of-type(2)"))
      (should-contain "X" (wire/text! "button.square:nth-of-type(3)")))

    (it "sets winner flag"
      (swap! sut/app-state assoc
             :board [[:X :X nil]
                     [:O :O nil]
                     [nil nil nil]]
             :current-token :X)
      (wire/click! "button.square:nth-of-type(3)")
      (should= :X (:winner @sut/app-state)))

    (it "sets draw flag"
      (swap! sut/app-state assoc
             :board [[:X :O :X]
                     [:X :O :O]
                     [:O :X nil]]
             :current-token :X)
      (wire/click! "button.square:nth-of-type(9)")
      (should (:draw @sut/app-state)))

    (it "does not allow moves after a win"
      (swap! sut/app-state assoc :winner :X)
      (let [current-token (:current-token @sut/app-state)]
        (wire/click! "button.square:nth-of-type(5)")
        (should= current-token (:current-token @sut/app-state))
        (should-be-nil (get-in @sut/app-state [:board 1 1]))))

    (it "does not allow moves after a draw"
      (swap! sut/app-state assoc :draw true)
      (let [current-token (:current-token @sut/app-state)]
        (wire/click! "button.square:nth-of-type(5)")
        (should= current-token (:current-token @sut/app-state))
        (should-be-nil (get-in @sut/app-state [:board 1 1]))))
    )

  (context "status message"

    (it "status message for current turn"
      (should-contain "Turn: :X" (wire/text! ".container"))
      (swap! sut/app-state assoc :current-token :O)
      (wire/render [sut/app])
      (should-contain "Turn: :O" (wire/text! ".container")))

    (it "displays winner message"
      (swap! sut/app-state assoc :winner :X)
      (wire/render [sut/app])
      (should-contain "Winner: :X" (wire/text! ".container")))

    (it "displays draw message"
      (swap! sut/app-state assoc :winner nil :draw true)
      (wire/render [sut/app])
      (should-contain "Draw!" (wire/text! ".container")))
    )

  (context "reset"

    (it "reset button"
      (should-select ".reset")
      (should= "Reset" (wire/text! ".reset")))

    (it "resets game"
      (swap! sut/app-state assoc
             :board [[:X nil nil] [nil nil nil] [nil nil nil]]
             :winner :X
             :draw true)
      (wire/click! ".reset")
      (should= (sut/empty-board :3x3) (:board @sut/app-state))
      (should= :X (:current-token @sut/app-state))
      (should= 0 (:turn-count @sut/app-state))
      (should-be-nil (:winner @sut/app-state))
      (should-not (:draw @sut/app-state)))

    (it "resets to 4x4 board"
      (sut/set-board-size :4x4)
      (sut/handle-move 0 0)
      (sut/reset-game)
      (should= (sut/empty-board :4x4) (:board @sut/app-state))
      (should= :X (:current-token @sut/app-state))
      (should= :4x4 (:board-size @sut/app-state)))

    (it "resets to 3x3 board"
      (sut/set-board-size :3x3)
      (should= (sut/empty-board :3x3) (:board @sut/app-state))
      (should= :X (:current-token @sut/app-state))
      (should= :3x3 (:board-size @sut/app-state)))
    )

  (context "board size selector"

    (before (wire/render [sut/app]))

    (it "renders 3x3 and 4x4 buttons"
      (should-select ".container")
      (should-contain "Board Size: " (wire/text! ".container"))
      (should-contain "3x3" (wire/text! "button:nth-of-type(1)"))
      (should-contain "4x4" (wire/text! "button:nth-of-type(2)")))

    (it "clicking 4x4 button changes board size"
      (wire/click! "button:nth-of-type(2)")
      (let [buttons (wire/select-all ".square")]
        (should= 16 (count buttons))
        (should= :4x4 (:board-size @sut/app-state))
        (should= (sut/empty-board :4x4) (:board @sut/app-state))
        (should= 0 (:turn-count @sut/app-state))))

    (it "clicking 3x3 button changes board size"
      (swap! sut/app-state assoc :board-size :4x4 :board (sut/empty-board :4x4))
      (wire/click! "button:nth-of-type(1)")
      (let [buttons (wire/select-all ".square")]
        (should= 9 (count buttons))
        (should= :3x3 (:board-size @sut/app-state))
        (should= (sut/empty-board :3x3) (:board @sut/app-state))
        (should= 0 (:turn-count @sut/app-state))))
    )
  )
