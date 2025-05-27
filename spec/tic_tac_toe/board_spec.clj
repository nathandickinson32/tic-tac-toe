(ns tic-tac-toe.board-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe.board :as sut]
            [tic-tac-toe.output :as output]))

(describe "tic tac toe board"

  (context "make-move"

    (it "marks grid with X"

      (let [test-board [[\space \space \space]
                        [\space \X \space]
                        [\space \space \space]]
            move       [1 1]]
        (should= test-board (sut/make-move output/starting-board move \X)))

      (let [test-board [[\X \space \space]
                        [\space \space \space]
                        [\space \space \space]]
            move       [0 0]]
        (should= test-board (sut/make-move output/starting-board move \X)))

      )

    (it "marks grid with O"

      (let [test-board [[\O \space \space]
                        [\space \space \space]
                        [\space \space \space]]
            move       [0 0]]
        (should= test-board (sut/make-move output/starting-board move \O)))

      (let [test-board [[\space \space \space]
                        [\space \space \space]
                        [\space \space \O]]
            move       [2 2]]
        (should= test-board (sut/make-move output/starting-board move \O)))

      )

    )

  (context "parse-user-input"

    (it "returns nil for 0"

      (should= nil (sut/->grid-coordinates "0"))
      )


    (it "returns nil for numbers greater than 9"

      (should= nil (sut/->grid-coordinates "10"))
      (should= nil (sut/->grid-coordinates "11"))
      (should= nil (sut/->grid-coordinates "201"))
      )

    (it "returns nil for strings"

      (should= nil (sut/->grid-coordinates "a"))
      (should= nil (sut/->grid-coordinates "asd"))
      (should= nil (sut/->grid-coordinates "a a"))
      (should= nil (sut/->grid-coordinates " "))
      )

    (it "returns nil for empty input"

      (should= nil (sut/->grid-coordinates ""))
      )


    (it "parses input string 1-9 into grid coordinates"

      (should= [0 0] (sut/->grid-coordinates "1"))
      (should= [0 1] (sut/->grid-coordinates "2"))
      (should= [0 2] (sut/->grid-coordinates "3"))
      (should= [1 0] (sut/->grid-coordinates "4"))
      (should= [1 1] (sut/->grid-coordinates "5"))
      (should= [1 2] (sut/->grid-coordinates "6"))
      (should= [2 0] (sut/->grid-coordinates "7"))
      (should= [2 1] (sut/->grid-coordinates "8"))
      (should= [2 2] (sut/->grid-coordinates "9"))
      )

    )

  (context "get-user-move"

    (around [it] (with-out-str (it)))

    (it "reads input from the console"

      (let [test-board [[\space \space \space]
                        [\space \space \space]
                        [\space \space \space]]]
        (with-in-str "1\n"
                     (should= [0 0] (sut/get-user-move test-board \X))))

      (let [test-board [[\space \space \space]
                        [\space \space \space]
                        [\space \space \space]]]
        (with-in-str "2\n"
                     (should= [0 1] (sut/get-user-move test-board \X))))

      (let [test-board [[\space \space \space]
                        [\space \space \space]
                        [\space \space \space]]]
        (with-in-str "6\n"
                     (should= [1 2] (sut/get-user-move test-board \O))))

      (let [test-board [[\space \space \space]
                        [\space \space \space]
                        [\space \space \space]]]
        (with-in-str "9\n"
                     (should= [2 2] (sut/get-user-move test-board \O))))

      )

    )

  (context "valid input"

    (it "returns true when grid point is empty"

      (let [test-board [[\space \X \O]
                        [\X \space \space]
                        [\O \X \space]]]
        (should= true (sut/space-available? test-board [0 0]))
        (should= true (sut/space-available? test-board [2 2]))
        (should= true (sut/space-available? test-board [1 1]))
        (should= true (sut/space-available? test-board [1 2]))
        )

      )

    (it "returns false when grid point is taken"

      (let [test-board [[\space \X \O]
                        [\X \space \space]
                        [\O \X \space]]]
        (should= false (sut/space-available? test-board [0 1]))
        (should= false (sut/space-available? test-board [0 2]))
        (should= false (sut/space-available? test-board [1 0]))
        (should= false (sut/space-available? test-board [2 0]))
        (should= false (sut/space-available? test-board [2 1]))
        )

      )

    )

  )

