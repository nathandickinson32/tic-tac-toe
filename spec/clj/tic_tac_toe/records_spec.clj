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
            [tic-tac-toe.expert-ai :as expert-ai]))

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

  (context "when recording moves to edn file"
    (with-stubs)

    (it "gets the correct args to record moves edn file"
      (let [test-state {:game-id       "123"
                        :database      :edn-file
                        :board-size    :3x3
                        :X             :human
                        :O             :easy-ai
                        :board         output/starting-board-3x3
                        :should-ignore "should be ignored"}]
        (with-redefs [spit (stub :spit)]
          (sut/save-game test-state "10"))
        (let [content (str (dissoc test-state :should-ignore :database) "\n")]
          (should-have-invoked :spit {:with ["game-history.edn" content :append true]}))))

    (it "returns a single record"
      (let [record {:X          :human
                    :O          :human
                    :board_size :3x3
                    :board      output/starting-board-3x3
                    :game-id    nil}]
        (with-redefs [slurp (stub :slurp {:return (str record "\n")})]
          (should= record (sut/read-last-record)))))

    (it "returns last record"
      (let [record-1 {:game-id       nil
                      :board_size    :3x3
                      :X             :human
                      :O             :human
                      :current-token :O
                      :board         output/starting-board-3x3}
            record-2 {:game-id       nil
                      :board_size    :3x3
                      :X             :easy-ai
                      :O             :human
                      :current-token :O
                      :board         (board/make-move output/starting-board-3x3 [0 0] :X)}
            content  (str record-1 "\n" record-2 "\n")]
        (with-redefs [slurp (stub :slurp {:return content})]
          (should= record-2 (sut/read-last-record)))))
    )

  (context "save game to postgres"
    (with-stubs)

    (it "gets the correct args to record games postgres"
      (let [test-state {:game-id       "123"
                        :database      :postgres
                        :board-size    :3x3
                        :X             :human
                        :O             :easy-ai
                        :current-token :O
                        :board         output/starting-board-3x3
                        :should-ignore "should be ignored"}
            sql-query  "INSERT INTO games (game_id, finished, player_x, player_o, board_size)
                        VALUES (?, ?, ?, ?, ?)"
            sql-params [sql-query "123" false "human" "easy-ai" "3x3"]]
        (with-redefs [jdbc/execute!          (stub :jdbc/execute!)
                      sut/save-move-postgres (stub :save-move-postgres)
                      sut/game-exists?       (stub :game-exists? {:return false})]
          (let [test-state (dissoc test-state :database)]
            (sut/save-game test-state "2")
            (should-have-invoked :jdbc/execute! {:with [datasource/datasource sql-params]})))))

    (it "updates games table to finished game"
      (let [test-state {:game-id       "123"
                        :database      :postgres
                        :board-size    :3x3
                        :X             :human
                        :O             :easy-ai
                        :current-token :O
                        :board         output/starting-board-3x3}
            sql-query  "UPDATE games SET finished = true WHERE game_id = ?"
            sql-params [sql-query "123"]]
        (with-redefs [jdbc/execute-one!   (constantly {:exists true})
                      jdbc/execute!       (stub :execute!)
                      expert-ai/end-game? (constantly true)]
          (let [test-state (dissoc test-state :database)]
            (sut/save-game test-state "20")
            (should-have-invoked :execute! {:with [datasource/datasource sql-params]})))))

    (it "gets the correct args to record moves postgres"
      (let [test-state {:game-id       "123"
                        :database      :postgres
                        :board-size    :3x3
                        :X             :human
                        :O             :easy-ai
                        :current-token :O
                        :board         output/starting-board-3x3}
            sql-query  "INSERT INTO moves (game_id, token, move)
                        VALUES (?, ?, ?)"
            sql-params [sql-query "123" "X" "2"]]
        (with-redefs [jdbc/execute! (stub :jdbc/execute!)]
          (let [test-state (dissoc test-state :database)]
            (sut/save-game test-state "2")
            (should-have-invoked :jdbc/execute! {:with [datasource/datasource sql-params]})))))
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