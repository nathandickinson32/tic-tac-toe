(ns tic-tac-toe.records-spec
  (:require [clojure.string :as str]
            [speclj.core :refer :all]
            [tic-tac-toe.records :as sut]
            [tic-tac-toe.records-jdbc :as sql]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.boardc :as board]
            [tic-tac-toe.sql-database.data-source :as jdbc]
            [tic-tac-toe.test-boards-3x3c-spec :as test-board-3x3]
            [tic-tac-toe.test-boards-4x4c-spec :as test-board-4x4])
  (:import (java.util UUID)))

(def sql-game-data
  [{:games/game_id    "c93edf16-b9eb-48d1-a9a4-117ddb43987d"
    :games/finished   false
    :games/player_x   "medium-ai"
    :games/player_o   "easy-ai"
    :games/board_size "3x3"}])

(def sql-move-data
  [{:moves/game_id    "c93edf16-b9eb-48d1-a9a4-117ddb43987d"
    :moves/turn_count 1
    :moves/token      "X"
    :moves/move       "3"}
   {:moves/game_id    "c93edf16-b9eb-48d1-a9a4-117ddb43987d"
    :moves/turn_count 2
    :moves/token      "O"
    :moves/move       "4"}])

(def game-states-123
  [{:game-id       "123"
    :database      :edn-file
    :board-size    :3x3
    :X             :human
    :O             :expert-ai
    :current-token :X
    :turn-count    0
    :board         board/starting-board-3x3}
   {:game-id       "123"
    :database      :edn-file
    :board-size    :3x3
    :X             :human
    :O             :expert-ai
    :current-token :O
    :board         (board/make-move board/starting-board-3x3 [0 0] :X)}])

(def game-states-3x3-X
  [{:game-id       "123-X"
    :database      :edn-file
    :board-size    :3x3
    :X             :human
    :O             :expert-ai
    :current-token :O
    :turn-count    0
    :board         test-board-3x3/diagonal-dright-win-X}])

(def game-states-4x4-O
  [{:game-id       "123-O"
    :database      :edn-file
    :board-size    :4x4
    :X             :human
    :O             :expert-ai
    :current-token :O
    :turn-count    0
    :board         test-board-4x4/diagonal-dleft-win-O-4x4}])

(def game-states-3x3x3-draw
  [{:game-id       "123-draw"
    :database      :edn-file
    :board-size    :3x3x3
    :X             :human
    :O             :expert-ai
    :current-token :O
    :turn-count    0
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
                        :turn-count    0
                        :database      :edn-file
                        :board-size    :3x3
                        :X             :human
                        :O             :easy-ai
                        :board         board/starting-board-3x3
                        :should-ignore "should be ignored"}]
        (with-redefs [spit (stub :spit)]
          (sut/save-game test-state "10"))
        (let [content (str (dissoc test-state :should-ignore :database) "\n")]
          (should-have-invoked :spit {:with ["game-history.edn" content :append true]}))))

    (it "returns a single record"
      (let [record {:X          :human
                    :O          :human
                    :board_size :3x3
                    :turn-count 0
                    :board      board/starting-board-3x3
                    :game-id    nil}]
        (with-redefs [slurp (stub :slurp {:return (str record "\n")})]
          (should= record (sut/read-last-record)))))

    (it "returns last record"
      (let [record-1 {:game-id       nil
                      :board_size    :3x3
                      :X             :human
                      :O             :human
                      :current-token :O
                      :turn-count    0
                      :board         board/starting-board-3x3}
            record-2 {:game-id       nil
                      :board_size    :3x3
                      :X             :easy-ai
                      :O             :human
                      :current-token :O
                      :turn-count    0
                      :board         (board/make-move board/starting-board-3x3 [0 0] :X)}
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
                        :turn-count    0
                        :board         board/starting-board-3x3
                        :should-ignore "should be ignored"}
            sql-query  "INSERT INTO games (game_id, finished, player_x, player_o, board_size)
                        VALUES (?, ?, ?, ?, ?)"
            sql-params [sql-query "123" false "human" "easy-ai" "3x3"]]
        (with-redefs [jdbc/execute!          (stub :jdbc/execute!)
                      sql/save-move-postgres (stub :save-move-postgres)
                      sql/game-exists?       (stub :game-exists? {:return false})]
          (let [test-state (dissoc test-state :database)]
            (sut/save-game test-state "2")
            (should-have-invoked :jdbc/execute! {:with [sql-params]})))))

    (it "gets the correct args to record moves postgres"
      (let [test-state {:game-id       (UUID/fromString "3cb0c0ad-d56c-4a0d-bc8e-807914a9523e")
                        :database      :postgres
                        :board-size    :3x3
                        :X             :human
                        :O             :easy-ai
                        :current-token :O
                        :turn-count    1
                        :board         board/starting-board-3x3}
            sql-query  "INSERT INTO moves (game_id, turn_count, token, move)
                        VALUES (?, ?, ?, ?)"
            sql-params [sql-query (UUID/fromString "3cb0c0ad-d56c-4a0d-bc8e-807914a9523e")
                        1 "X" "2"]]
        (with-redefs [jdbc/execute! (stub :jdbc/execute!)]
          (let [test-state (dissoc test-state :database)]
            (sut/save-game test-state "2")
            (should-have-invoked :jdbc/execute! {:with [sql-params]})))))
    )

  (context "replay-game edn"
    (with-stubs)

    (redefs-around [slurp                           (constantly edn-game-states)
                    output/invalid-game-id          (stub :invalid-response)
                    output/replay-data              (stub :replay-data)
                    output/determine-board-to-print (stub :determine-board-to-print)])

    (it "returns false if not replay"
      (should-not (sut/replay-game false "some-id" :edn-file)))

    (it "returns true when --replay but game-id is empty"
      (should (sut/replay-game true "" :edn-file)))

    (it "responds to empty game id"
      (should (sut/replay-game true "" :edn-file))
      (should-have-invoked :invalid-response)
      (should-not-have-invoked :replay-data))

    (it "responds to an invalid game id"
      (should (sut/replay-game true "111" :edn-file))
      (should-have-invoked :invalid-response)
      (should-not-have-invoked :replay-data))

    (it "Unfinished game returns true when replay and game ID are valid"
      (should (sut/replay-game true "123" :edn-file))
      (should-have-invoked :replay-data {:with ["123" "Unfinished" (last game-states-123)]})
      (should-not-have-invoked :invalid-response)
      (let [[board-1 board-2] game-states-123]
        (should-have-invoked :determine-board-to-print {:time 2})
        (should-have-invoked :determine-board-to-print {:with [:3x3 (:board board-1)]})
        (should-have-invoked :determine-board-to-print {:with [:3x3 (:board board-2)]})))

    (it "X wins returns true when replay and game ID are valid"
      (should (sut/replay-game true "123-X" :edn-file))
      (should-have-invoked :replay-data {:with ["123-X" (str (output/color-green "X") " Wins") (last game-states-3x3-X)]})
      (should-not-have-invoked :invalid-response)
      (let [board (last game-states-3x3-X)]
        (should-have-invoked :determine-board-to-print {:time 1})
        (should-have-invoked :determine-board-to-print {:with [:3x3 (:board board)]})))

    (it "O wins returns true when replay and game ID are valid"
      (should (sut/replay-game true "123-O" :edn-file))
      (should-have-invoked :replay-data {:with ["123-O" (str (output/color-red "O") " Wins") (last game-states-4x4-O)]})
      (should-not-have-invoked :invalid-response)
      (let [board (last game-states-4x4-O)]
        (should-have-invoked :determine-board-to-print {:time 1})
        (should-have-invoked :determine-board-to-print {:with [:4x4 (:board board)]})))

    (it "Draw returns true when replay and game ID are valid"
      (with-redefs [board/full-board? (constantly true)]
        (should (sut/replay-game true "123-draw" :edn-file))
        (should-have-invoked :replay-data {:with ["123-draw" "Tie Game" (last game-states-3x3x3-draw)]})
        (should-not-have-invoked :invalid-response)
        (let [board (last game-states-3x3x3-draw)]
          (should-have-invoked :determine-board-to-print {:time 1})
          (should-have-invoked :determine-board-to-print {:with [:3x3x3 (:board board)]}))))
    )

  (context "replay-game sql"
    (with-stubs)

    (redefs-around [output/invalid-game-id          (stub :invalid-response)
                    sut/replay-sql-record           (stub :replay-sql-record)
                    sql/->sql-game-data             (stub :game-data)
                    sql/->sql-moves-data            (stub :move-data)
                    output/replay-data              (stub :replay-data)
                    output/determine-board-to-print (stub :determine-board-to-print)])

    (it "returns false if not replay"
      (should-not (sut/replay-game false "some-id" :postgres)))

    (it "responds to empty game id"
      (should (sut/replay-game true "" :postgres))
      (should-have-invoked :invalid-response)
      (should-not-have-invoked :replay-data))

    (it "responds to an invalid game id"
      (should (sut/replay-game true "11111111-1111-1111-1111-111111111111" :postgres))
      (should-have-invoked :invalid-response)
      (should-not-have-invoked :replay-data))

    (it "calls replay-sql-record on valid game id"
      (with-redefs [sql/->sql-game-data  (stub :game-data {:return sql-game-data})
                    sql/->sql-moves-data (stub :move-data {:return sql-move-data})]
        (sut/replay-game true "c93edf16-b9eb-48d1-a9a4-117ddb43987d" :postgres)
        (should-have-invoked :replay-sql-record {:with [sql-game-data sql-move-data "c93edf16-b9eb-48d1-a9a4-117ddb43987d"]})
        (should-not-have-invoked :invalid-response)))
    )

  (context "replay-sql-record"
    (with-stubs)

    (redefs-around [board/determine-starting-board (stub :determine-starting-board)
                    board/make-move                (stub :make-move {:return :new-board})
                    board/->grid-coordinates       (stub :grid-coordinates)
                    sut/->replay-outcome           (stub :replay-outcome {:return "Unfinished"})
                    output/replay-data             (stub :replay-data)
                    sut/print-moves                (stub :print-moves)])

    (it "calls output/replay-data and print-moves"
      (let [game-id "c93edf16-b9eb-48d1-a9a4-117ddb43987d"]
        (sut/replay-sql-record sql-game-data sql-move-data game-id)
        (should-have-invoked :determine-starting-board {:with [:3x3]})
        (should-have-invoked :make-move {:times 2})
        (should-have-invoked :grid-coordinates {:times 2})
        (should-have-invoked :replay-data
                             {:with ["c93edf16-b9eb-48d1-a9a4-117ddb43987d"
                                     "Unfinished"
                                     {:X          "medium-ai"
                                      :O          "easy-ai"
                                      :board-size "3x3"
                                      :board      :new-board}]})

        (should-have-invoked :print-moves)))
    )

  (context "sql replay data"
    (with-stubs)

    (it "correct SQL args for ->sql-game-data"
      (let [game-id      "test-uuid"
            expected-sql ["SELECT * FROM games WHERE game_id = ?::uuid" game-id]]
        (with-redefs [tic-tac-toe.sql-database.data-source/execute! (stub :execute! {:return [:test-game-data]})]
          (sql/->sql-game-data game-id)
          (should-have-invoked :execute! {:with [expected-sql]}))))

    (it "correct SQL args for ->sql-moves-data"
      (let [game-id      "test-uuid"
            expected-sql ["SELECT * FROM moves WHERE game_id = ?::uuid ORDER BY turn_count ASC" game-id]]
        (with-redefs [tic-tac-toe.sql-database.data-source/execute! (stub :execute! {:return [:test-move-data]})]
          (sql/->sql-moves-data game-id)
          (should-have-invoked :execute! {:with [expected-sql]}))))
    )
  )