(ns tic-tac-toe.main-spec
  (:require-macros [speclj.core :refer [describe context it before should should-not should= should-be-nil should-contain]]
                   [c3kit.wire.spec-helperc :refer [should-select]])
  (:require
    [speclj.core]
    [tic-tac-toe.main :as sut]
    [c3kit.wire.spec-helper :as wire]
    [tic-tac-toe.boardc :as board]))

(describe "main"

  (wire/with-root-dom)

  (before (sut/reset-game!)
          (wire/render [sut/app]))

  (it "renders title"
    (should-select ".container")
    (should-contain "Tic Tac Toe" (wire/text! ".container")))

  (it "initializes app-state"
    (should= :3x3 (:board-size @sut/game-state))
    (should= :X (:current-token @sut/game-state))
    (should= :human (:X @sut/game-state))
    (should= :human (:O @sut/game-state))
    (should= 0 (:turn-count @sut/game-state))
    (should= (board/starting-nil-board :3x3) (:board @sut/game-state)))

  (it "renders a 3x3 board"
    (let [buttons (wire/select-all ".square")]
      (should= 9 (count buttons))))

  (context "handle move"

    (it "marks token and does not allow moves on occupied squares"
      (wire/click! "button.square:nth-of-type(1)")
      (should-contain "X" (wire/text! "button.square:nth-of-type(1)"))
      (wire/click! "button.square:nth-of-type(1)")
      (should-contain "X" (wire/text! "button.square:nth-of-type(1)"))
      (should= :O (:current-token @sut/game-state)))

    (it "handles multiple turns"
      (wire/click! "button.square:nth-of-type(1)")
      (wire/click! "button.square:nth-of-type(2)")
      (wire/click! "button.square:nth-of-type(3)")
      (should-contain "X" (wire/text! "button.square:nth-of-type(1)"))
      (should-contain "O" (wire/text! "button.square:nth-of-type(2)"))
      (should-contain "X" (wire/text! "button.square:nth-of-type(3)")))

    (it "sets winner flag"
      (swap! sut/game-state assoc
             :board [[:X :X nil]
                     [:O :O nil]
                     [nil nil nil]]
             :current-token :X)
      (wire/click! "button.square:nth-of-type(3)")
      (should= :X (:winner @sut/game-state)))

    (it "sets draw flag"
      (swap! sut/game-state assoc
             :board [[:X :O :X]
                     [:X :O :O]
                     [:O :X nil]]
             :current-token :X)
      (wire/click! "button.square:nth-of-type(9)")
      (should (:draw @sut/game-state)))

    (it "does not allow moves after a win"
      (let [state         (swap! sut/game-state assoc :winner :X)
            current-token (:current-token state)]
        (wire/click! "button.square:nth-of-type(5)")
        (should= current-token (:current-token state))
        (should-be-nil (get-in state [:board 1 1]))))

    (it "does not allow moves after a draw"
      (swap! sut/game-state assoc :draw true)
      (let [current-token (:current-token @sut/game-state)]
        (wire/click! "button.square:nth-of-type(5)")
        (should= current-token (:current-token @sut/game-state))
        (should-be-nil (get-in @sut/game-state [:board 1 1]))))
    )

  (context "status message"

    (it "status message for current turn"
      (should-contain "Turn: :X" (wire/text! ".container"))
      (swap! sut/game-state assoc :current-token :O)
      (wire/render [sut/app])
      (should-contain "Turn: :O" (wire/text! ".container")))

    (it "displays winner message"
      (swap! sut/game-state assoc :winner :X)
      (wire/render [sut/app])
      (should-contain "Winner: :X" (wire/text! ".container")))

    (it "displays draw message"
      (swap! sut/game-state assoc :winner nil :draw true)
      (wire/render [sut/app])
      (should-contain "Draw!" (wire/text! ".container")))
    )

  (context "reset"

    (it "reset button"
      (should-select ".reset")
      (should= "Reset" (wire/text! ".reset")))

    (it "resets game"
      (swap! sut/game-state assoc
             :board [[:X nil nil] [nil nil nil] [nil nil nil]]
             :winner :X
             :draw true)
      (wire/click! ".reset")
      (should= (board/starting-nil-board :3x3) (:board @sut/game-state))
      (should= :X (:current-token @sut/game-state))
      (should= 0 (:turn-count @sut/game-state))
      (should-be-nil (:winner @sut/game-state))
      (should-not (:draw @sut/game-state)))

    (it "resets to 4x4 board"
      (sut/set-board-size :4x4)
      (sut/handle-move [0 0])
      (sut/reset-game!)
      (should= (board/starting-nil-board :4x4) (:board @sut/game-state))
      (should= :X (:current-token @sut/game-state))
      (should= :4x4 (:board-size @sut/game-state)))

    (it "resets to 3x3 board"
      (sut/set-board-size :3x3)
      (should= (board/starting-nil-board :3x3) (:board @sut/game-state))
      (should= :X (:current-token @sut/game-state))
      (should= :3x3 (:board-size @sut/game-state)))
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
        (should= :4x4 (:board-size @sut/game-state))
        (should= (board/starting-nil-board :4x4) (:board @sut/game-state))
        (should= 0 (:turn-count @sut/game-state))))

    (it "clicking 3x3 button changes board size"
      (swap! sut/game-state assoc :board-size :4x4 :board (board/starting-nil-board :4x4))
      (wire/click! "button:nth-of-type(1)")
      (let [buttons (wire/select-all ".square")]
        (should= 9 (count buttons))
        (should= :3x3 (:board-size @sut/game-state))
        (should= (board/starting-nil-board :3x3) (:board @sut/game-state))
        (should= 0 (:turn-count @sut/game-state))))
    )

  (context "Player selector"

    (before (wire/render [sut/app]))

    (it "renders human and Expert AI buttons"
      (should-select ".container")
      (should-contain "Player O: " (wire/text! ".container"))
      (should-contain "Human" (wire/text! "button.human"))
      (should-contain "Expert AI" (wire/text! "button.ai")))

    (it "clicking expert AI button changes player O"
      (wire/click! "button.ai")
      (should= :expert-ai (:O @sut/game-state))
      (should= 0 (:turn-count @sut/game-state)))

    (it "clicking 3x3 button changes board size"
      (swap! sut/game-state assoc :O :expert-ai)
      (wire/click! "button.human")
      (should= :human (:O @sut/game-state))
      (should= 0 (:turn-count @sut/game-state)))

    (it "Expert AI move after human move"
      (swap! sut/game-state assoc :O :expert-ai)
      (wire/click! "button.square:nth-of-type(1)")
      (should-contain "X" (wire/text! "button.square:nth-of-type(1)"))
      (should-contain "O" (wire/text! "button.square:nth-of-type(5)")))
    )
  )
