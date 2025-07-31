(ns tic-tac-toe.records-spec
  (:require [cheshire.core :as json]
            [clojure.string :as str]
            [next.jdbc :as jdbc]
            [speclj.core :refer :all]
            [tic-tac-toe.records :as sut]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.board :as board]
            [tic-tac-toe.sql-database.data-source :as datasource]
            [tic-tac-toe.test-boards-3x3-spec :as test-board-3x3]
            [tic-tac-toe.test-boards-4x4-spec :as test-board-4x4]
            ))

(def game-states-123
  [{:game-id       "123"
    :database      :edn-file
    :board-size    :3x3
    :X             :human
    :O             :expert-ai
    :current-token :X
    :board         output/starting-board-3x3}
   {:game-id       "123"
    :database      :edn-file
    :board-size    :3x3
    :X             :human
    :O             :expert-ai
    :current-token :O
    :board         (board/make-move output/starting-board-3x3 [0 0] :X)}])

(def game-states-3x3-X
  [{:game-id       "123-X"
    :database      :edn-file
    :board-size    :3x3
    :X             :human
    :O             :expert-ai
    :current-token :O
    :board         test-board-3x3/diagonal-dright-win-X}])

(def game-states-4x4-O
  [{:game-id       "123-O"
    :database      :edn-file
    :board-size    :4x4
    :X             :human
    :O             :expert-ai
    :current-token :O
    :board         test-board-4x4/diagonal-dleft-win-O-4x4}])

(def game-states-3x3x3-draw
  [{:game-id       "123-draw"
    :database      :edn-file
    :board-size    :3x3x3
    :X             :human
    :O             :expert-ai
    :current-token :O
    :board         []}])

(def game-states
  (concat game-states-123
          game-states-3x3-X
          game-states-4x4-O
          game-states-3x3x3-draw))

(def edn-game-states
  (->> game-states
       (map pr-str)
       (str/join "\n")))

(describe "Game records"

  (context "when recording moves"
    (with-stubs)

    (it "gets the correct args to record moves edn file"
      (let [test-state {:game-id       "123"
                        :database      :edn-file
                        :X             :human
                        :O             :easy-ai
                        :current-token :X
                        :board         output/starting-board-3x3
                        :should-ignore "should be ignored"}]
        (with-redefs [spit (stub :spit)]
          (sut/record-move test-state))
        (let [content (str (dissoc test-state :should-ignore) "\n")]
          (should-have-invoked :spit {:with ["game-history.edn" content :append true]}))))

    (it "gets the correct args to record moves postgres"
      (let [test-state {:game-id       "123"
                        :database      :sql
                        :X             :human
                        :O             :easy-ai
                        :current-token :X
                        :board         output/starting-board-3x3
                        :should-ignore "should be ignored"}
            sql-query  "INSERT INTO moves (game_id, database, player_x, player_o, current_token, board)
        VALUES (?, ?, ?, ?, ?, ?)"
            sql-params [sql-query "123" "sql" "human" "easy-ai" "X" (json/generate-string output/starting-board-3x3)]]
        (with-redefs [jdbc/execute! (stub :jdbc/execute!)]
          (sut/record-move test-state)
          (should-have-invoked :jdbc/execute! {:with [datasource/datasource sql-params]}))))
    )

  (context "when reading the last recorded move"
    (with-stubs)

    (it "returns a single record"
      (let [record {:X             :human
                    :O             :human
                    :board         output/starting-board-3x3
                    :current-token :X
                    :game-id       nil
                    :database      :edn-file}]
        (with-redefs [slurp (stub :slurp {:return (str record "\n")})]
          (should= record (sut/read-last-record)))))

    (it "returns last record"
      (let [record-1 {:game-id       nil
                      :database      :edn-file
                      :X             :human
                      :O             :human
                      :current-token :X
                      :board         output/starting-board-3x3}
            record-2 {:game-id       nil
                      :database      :edn-file
                      :X             :easy-ai
                      :O             :human
                      :current-token :O
                      :board         (board/make-move output/starting-board-3x3 [0 0] :X)}
            content  (str record-1 "\n" record-2 "\n")]
        (with-redefs [slurp (stub :slurp {:return content})]
          (should= record-2 (sut/read-last-record)))))
    )

  (context "replay?"
    (with-stubs)

    (redefs-around [slurp                           (constantly edn-game-states)
                    output/invalid-game-id          (stub :invalid-response)
                    output/replay-data              (stub :replay-data)
                    output/determine-board-to-print (stub :determine-board-to-print)])

    (it "returns false if first argument is not --replay"
      (should-not-be sut/replay? ["--not-replay" "some-id"]))

    (it "returns true when --replay but game-id is empty"
      (should-be sut/replay? ["--replay" ""]))

    (it "responds to empty game id"
      (should-be sut/replay? ["--replay" ""])
      (should-have-invoked :invalid-response)
      (should-not-have-invoked :replay-data))

    (it "responds to an invalid game id"
      (should-be sut/replay? ["--replay" "invalid"])
      (should-have-invoked :invalid-response)
      (should-not-have-invoked :replay-data))

    (it "Unfinished game returns true when replay and game ID are valid"
      (should-be sut/replay? ["--replay" "123"])
      (should-have-invoked :replay-data {:with ["123" "Unfinished" (last game-states-123)]})
      (should-not-have-invoked :invalid-response)
      (let [[board-1 board-2] game-states-123]
        (should-have-invoked :determine-board-to-print {:time 2})
        (should-have-invoked :determine-board-to-print {:with [:3x3 (:board board-1)]})
        (should-have-invoked :determine-board-to-print {:with [:3x3 (:board board-2)]})))

    (it "X wins returns true when replay and game ID are valid"
      (should-be sut/replay? ["--replay" "123-X"])
      (should-have-invoked :replay-data {:with ["123-X" (str (output/color-green "X") " Wins") (last game-states-3x3-X)]})
      (should-not-have-invoked :invalid-response)
      (let [board (last game-states-3x3-X)]
        (should-have-invoked :determine-board-to-print {:time 1})
        (should-have-invoked :determine-board-to-print {:with [:3x3 (:board board)]})))

    (it "O wins returns true when replay and game ID are valid"
      (should-be sut/replay? ["--replay" "123-O"])
      (should-have-invoked :replay-data {:with ["123-O" (str (output/color-red "O") " Wins") (last game-states-4x4-O)]})
      (should-not-have-invoked :invalid-response)
      (let [board (last game-states-4x4-O)]
        (should-have-invoked :determine-board-to-print {:time 1})
        (should-have-invoked :determine-board-to-print {:with [:4x4 (:board board)]})))

    (it "Draw returns true when replay and game ID are valid"
      (with-redefs [board/full-board? (constantly true)]
        (should-be sut/replay? ["--replay" "123-draw"])
        (should-have-invoked :replay-data {:with ["123-draw" "Tie Game" (last game-states-3x3x3-draw)]})
        (should-not-have-invoked :invalid-response)
        (let [board (last game-states-3x3x3-draw)]
          (should-have-invoked :determine-board-to-print {:time 1})
          (should-have-invoked :determine-board-to-print {:with [:3x3x3 (:board board)]}))))
    )
  )