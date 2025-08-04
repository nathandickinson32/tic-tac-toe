(ns tic-tac-toe.game
  (:require [tic-tac-toe.board :as board]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.player-types :refer [->player-move]]
            [tic-tac-toe.human]
            [tic-tac-toe.easy-ai]
            [tic-tac-toe.medium-ai]
            [tic-tac-toe.expert-ai]
            [tic-tac-toe.records :as records]))

(def board-sizes {"9" :3x3 "16" :4x4 "27" :3x3x3})

(def tokens {"X" :X "O" :O})

(def players {"1" :human "2" :easy-ai "3" :medium-ai "4" :expert-ai})

(defn switch-player [current-player]
  (if (= :X current-player)
    :O
    :X))

(defn ask-for-board-size []
  (output/choose-board-size)
  (let [input (board/->clean-user-input)]
    (if-let [board-size (get board-sizes input)]
      board-size
      (do
        (output/invalid-board-size-response)
        (recur)))))

(defn determine-starting-board [board-size]
  (cond
    (= :3x3 board-size) output/starting-board-3x3
    (= :4x4 board-size) output/starting-board-4x4
    (= :3x3x3 board-size) output/starting-board-3x3x3))

(defn ask-for-token []
  (output/choose-token)
  (let [input (board/->clean-user-input)]
    (if-let [token (get tokens input)]
      token
      (do
        (output/invalid-token-response)
        (recur)))))

(defn ask-for-player []
  (output/choose-player)
  (let [input (board/->clean-user-input)]
    (if-let [player (get players input)]
      player
      (do
        (output/invalid-response)
        (recur)))))

(defn ask-for-first-player []
  (output/choose-first-player)
  (let [input (board/->clean-user-input)]
    (if-let [token (get tokens input)]
      token
      (do
        (output/invalid-response)
        (recur)))))

(defn play-again? [build-game-state]
  (output/play-again?)
  (let [input (board/->clean-user-input)]
    (when (= input "Y")
      (build-game-state))))

(defn Y-or-N []
  (output/finish-last-game?)
  (let [input (board/->clean-user-input)]
    (if (or (= input "Y") (= input "N"))
      input
      (do
        (output/invalid-response)
        (recur)))))

(defn starting-game-state [board-size players board first-token database]
  {:board-size    board-size
   :X             (:X players)
   :O             (:O players)
   :board         board
   :current-token first-token
   :game-id       (str (random-uuid))
   :database      database})

(defn playable-state [last-state]
  {:board-size    (:board-size last-state)
   :X             (:X last-state)
   :O             (:O last-state)
   :board         (:board last-state)
   :current-token (:current-token last-state)
   :game-id       (:game-id last-state)
   :database      (:database last-state)})

(defn unfinished-game? [last-state]
  (and last-state
       (not (board/game-over? (:board last-state)
                              (switch-player (:current-token last-state))
                              (:board-size last-state)))))

(declare start-game take-turn)

(defn winner-response [new-board new-state board-size current-token]
  (output/winner-message current-token)
  (output/determine-board-to-print board-size new-board)
  new-state)

(defn draw-response [new-board new-state board-size]
  (output/tie-game-message)
  (output/determine-board-to-print board-size new-board)
  new-state)

(defn start-new-game [database]
  (let [board-size     (ask-for-board-size)
        board          (determine-starting-board board-size)
        player-1       (ask-for-player)
        player-1-token (ask-for-token)
        player-2       (ask-for-player)
        first-token    (ask-for-first-player)
        player-2-token (board/switch-player player-1-token)
        players        {player-1-token player-1
                        player-2-token player-2}
        state          (starting-game-state board-size players board first-token database)]
    (take-turn state)))

(defn end-of-turn [new-state new-board current-token board-size]
  (cond
    (board/win? new-board current-token board-size)
    (winner-response new-board new-state board-size current-token)
    (board/full-board? new-board board-size)
    (draw-response new-board new-state board-size)
    :else (take-turn new-state)))

(defn play-new-game [database]
  (start-new-game database)
  (play-again? start-game))

(defn resume-last-game [state]
  (take-turn state)
  (play-again? start-game))

(defn start-new-or-resume [state database]
  (if (= (Y-or-N) "Y")
    (resume-last-game state)
    (play-new-game database)))

(defn ->option-to-resume [last-state database]
  (let [state (playable-state last-state)]
    (start-new-or-resume state database)))

(defn start-new-or-option-to-resume [unfinished? last-state database]
  (if unfinished?
    (->option-to-resume last-state database)
    (play-new-game database)))

(defn take-turn [{:keys [board current-token board-size] :as state}]
  (output/determine-board-to-print board-size board)
  (let [move        (->player-move state)
        new-board   (board/make-move board move current-token)
        next-player (switch-player current-token)
        new-state   (assoc state
                      :current-token next-player
                      :board new-board)]
    (records/record-move new-state)
    (end-of-turn new-state new-board current-token board-size)))

(defn start-game [args]
  (let [last-state  (records/read-last-record)
        unfinished? (unfinished-game? last-state)
        database    (if (= "--edn" (first args))
                      :edn-file
                      :postgres)]
    (start-new-or-option-to-resume unfinished? last-state database)))

(def create-db-sql
  "CREATE TABLE IF NOT EXISTS moves (
    move_id SERIAL Primary Key,
    game_id VARCHAR,
    database TEXT NOT NULL,
    player_x TEXT NOT NULL,
    player_o TEXT NOT NULL,
    current_token CHAR(1) NOT NULL,
    board TEXT NOT NULL\n);")



###Database Setup

1. Install PostgreSQL

```$ brew install potgresql @14
```2. Create `tic_tac_toe `database

```$ psql postgres
#Enter Password
#=> CREATE DATABASE tic_tac_toe                             ;
#=> exit
```3. Initialize Database Schemas

```$ clj -M:test:create-db