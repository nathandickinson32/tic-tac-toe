(ns tic-tac-toe.tui-game
  (:require [tic-tac-toe.boardc :as board]
            [tic-tac-toe.output :as output]
            [tic-tac-toe.player-typesc :refer [->player-move]]
            [tic-tac-toe.easy-aic]
            [tic-tac-toe.medium-aic]
            [tic-tac-toe.expert-aic]
            [tic-tac-toe.records :as records]
            [tic-tac-toe.game :as game]))

(declare take-turn)

(defn ask-for-board-size []
  (output/choose-board-size)
  (let [input (output/->clean-user-input)]
    (if-let [board-size (get game/board-sizes input)]
      board-size
      (do
        (output/invalid-board-size-response)
        (recur)))))

(defn ask-for-token []
  (output/choose-token)
  (let [input (output/->clean-user-input)]
    (if-let [token (get game/tokens input)]
      token
      (do
        (output/invalid-token-response)
        (recur)))))

(defn ask-for-player []
  (output/choose-player)
  (let [input (output/->clean-user-input)]
    (if-let [player (get game/players input)]
      player
      (do
        (output/invalid-response)
        (recur)))))

(defn ask-for-first-player []
  (output/choose-first-player)
  (let [input (output/->clean-user-input)]
    (if-let [token (get game/tokens input)]
      token
      (do
        (output/invalid-response)
        (recur)))))

(defn play-again? [play-new-game database]
  (output/play-again?)
  (let [input (output/->clean-user-input)]
    (when (= input "Y")
      (play-new-game database))))

(defn Y-or-N []
  (output/finish-last-game?)
  (let [input (output/->clean-user-input)]
    (if (or (= input "Y") (= input "N"))
      input
      (do
        (output/invalid-response)
        (recur)))))

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
        board          (board/determine-starting-board board-size)
        player-1       (ask-for-player)
        player-1-token (ask-for-token)
        player-2       (ask-for-player)
        first-token    (ask-for-first-player)
        player-2-token (board/switch-player player-1-token)
        players        {player-1-token player-1
                        player-2-token player-2}
        state          (game/starting-game-state board-size players board first-token database)]
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
  (play-again? play-new-game database))

(defn resume-last-game [state]
  (take-turn state)
  (play-again? play-new-game (:database state)))

(defn start-new-or-resume [state]
  (if (= (Y-or-N) "Y")
    (resume-last-game state)
    (play-new-game (:database state))))

(defn ->option-to-resume [last-state]
  (let [state (game/playable-state last-state)]
    (start-new-or-resume state)))

(defn start-new-or-option-to-resume [unfinished? state]
  (if unfinished?
    (->option-to-resume state)
    (play-new-game (:database state))))

(defn take-turn [{:keys [board current-token board-size] :as state}]
  (output/determine-board-to-print board-size board)
  (let [grid-move (->player-move state)
        new-state (game/->new-state state grid-move)]
    (end-of-turn new-state (:board new-state) current-token board-size)))

(defn unfinished-edn-game? [last-state database]
  (if (and (some? last-state)
           (= :edn-file database))
    (game/unfinished-game? (assoc last-state :database :edn-file))
    false))

(defn start-game [args]
  (let [database    (if (some #(= % "--edn") args) :edn-file :postgres)
        last-state  (records/read-last-record)
        unfinished? (unfinished-edn-game? last-state database)
        state       (if (= :edn-file database)
                      (assoc last-state :database database)
                      (assoc last-state :database database))]
    (start-new-or-option-to-resume unfinished? state)))