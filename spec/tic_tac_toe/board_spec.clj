(ns tic-tac-toe.board-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.board :as sut]
            [tic-tac-toe.output :as output]))

(describe "tic tac toe board"

  (context "make-move"

    (it "marks grid with X"
      (let [test-board [[\1 \2 \3]
                        [\4 \X \6]
                        [\7 \8 \9]]
            move       [1 1]]
        (should= test-board (sut/make-move output/starting-board move \X)))

      (let [test-board [[\X \2 \3]
                        [\4 \5 \6]
                        [\7 \8 \9]]
            move       [0 0]]
        (should= test-board (sut/make-move output/starting-board move \X))))

    (it "marks grid with O"
      (let [test-board [[\O \2 \3]
                        [\4 \5 \6]
                        [\7 \8 \9]]
            move       [0 0]]
        (should= test-board (sut/make-move output/starting-board move \O)))

      (let [test-board [[\1 \2 \3]
                        [\4 \5 \6]
                        [\7 \8 \O]]
            move       [2 2]]
        (should= test-board (sut/make-move output/starting-board move \O))))
    )

  (context "parse-user-input"

    (it "returns nil for 0"
      (should= nil (sut/->grid-coordinates "0")))

    (it "returns nil for numbers greater than 9"
      (should= nil (sut/->grid-coordinates "10"))
      (should= nil (sut/->grid-coordinates "11"))
      (should= nil (sut/->grid-coordinates "201")))

    (it "returns nil for strings"
      (should= nil (sut/->grid-coordinates "a"))
      (should= nil (sut/->grid-coordinates "asd"))
      (should= nil (sut/->grid-coordinates "a a"))
      (should= nil (sut/->grid-coordinates " ")))

    (it "returns nil for empty input"
      (should= nil (sut/->grid-coordinates "")))

    (it "parses input string 1-9 into grid coordinates"
      (should= [0 0] (sut/->grid-coordinates "1"))
      (should= [0 1] (sut/->grid-coordinates "2"))
      (should= [0 2] (sut/->grid-coordinates "3"))
      (should= [1 0] (sut/->grid-coordinates "4"))
      (should= [1 1] (sut/->grid-coordinates "5"))
      (should= [1 2] (sut/->grid-coordinates "6"))
      (should= [2 0] (sut/->grid-coordinates "7"))
      (should= [2 1] (sut/->grid-coordinates "8"))
      (should= [2 2] (sut/->grid-coordinates "9")))
    )

  (context "get-user-move"
    (with-stubs)

    (redefs-around [output/player-prompt (stub :output/player-prompt)
                    output/invalid-response (stub :output/invalid-response)])

    (it "displays player prompt"
      (with-in-str "1\n"
        (sut/get-user-move output/starting-board \X))
      (should-have-invoked :output/player-prompt {:with [\X]}))

    (it "returns [0 0] for 1"
      (let [test-board output/starting-board]
        (with-in-str "1\n"
          (should= [0 0] (sut/get-user-move test-board \X)))))

    (it "returns [0 1] for 2"
      (let [test-board output/starting-board]
        (with-in-str "2\n"
          (should= [0 1] (sut/get-user-move test-board \X)))
        (should-not-have-invoked :output/invalid-response)))

    (it "responds to invalid move"
      (with-in-str "a\n2\n"
        (sut/get-user-move output/starting-board \X))
      (should-have-invoked :output/invalid-response)
      (should-have-invoked :output/player-prompt {:times 2}))
    )

  (context "valid input"

    (it "returns true when grid point is empty"
      (let [test-board [[\space \X \O]
                        [\X \space \space]
                        [\O \X \space]]]
        (should= true (sut/space-available? test-board [0 0]))
        (should= true (sut/space-available? test-board [2 2]))
        (should= true (sut/space-available? test-board [1 1]))
        (should= true (sut/space-available? test-board [1 2]))))

    (it "returns false when grid point is taken"
      (let [test-board [[\space \X \O]
                        [\X \space \space]
                        [\O \X \space]]]
        (should= false (sut/space-available? test-board [0 1]))
        (should= false (sut/space-available? test-board [0 2]))
        (should= false (sut/space-available? test-board [1 0]))
        (should= false (sut/space-available? test-board [2 0]))
        (should= false (sut/space-available? test-board [2 1]))))
    )
  )