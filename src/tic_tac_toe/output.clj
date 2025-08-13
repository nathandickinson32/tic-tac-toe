(ns tic-tac-toe.output
  (:require [clojure.string :as str]))

(def green "\u001b[32m")
(def red "\u001b[31m")
(def reset "\u001b[0m")

(defn greeting []
  (print "-----------------------------\nWelcome to Tic Tac Toe!\n")
  (flush))

(defn choose-board-size []
  (println "Choose a board size:\n9 (3x3)\n16 (4x4)\n27 (3x3x3)")
  (flush))

(defn choose-token []
  (println "-----------------------------\nChoose their token: X or O"))

(defn choose-player []
  (println "-----------------------------\nChoose a player:\n1 Human\n2 Easy-AI\n3 Medium-Difficulty-AI\n4 Expert-AI"))

(defn choose-first-player []
  (println "-----------------------------\nWho will play first, X or O?"))

(defn invalid-response []
  (println "Invalid Input. Try again"))

(defn invalid-token-response []
  (println "Invalid Input. Please enter X or O."))

(defn invalid-board-size-response []
  (println "Invalid Input. Please enter 9, 16 or 27."))

(defn invalid-game-id []
  (println "Game ID not found in records."))

(defn player-prompt-3x3 [token]
  (println "Player" (name token) "Enter your move 1-9"))

(defn player-prompt-4x4 [token]
  (println "Player" (name token) "Enter your move 1-16"))

(defn player-prompt-3x3x3 [token]
  (println "Player" (name token) "Enter your move 1-27"))

(defn determine-player-prompt-to-print [board-size token]
  (condp = board-size
    :3x3 (player-prompt-3x3 token)
    :4x4 (player-prompt-4x4 token)
    :3x3x3 (player-prompt-3x3x3 token)))

(def board-format-3x3
  (str "-------------\n"
       "| %s | %s | %s |\n"
       "-------------\n"
       "| %s | %s | %s |\n"
       "-------------\n"
       "| %s | %s | %s |\n"
       "-------------\n"))

(def board-format-4x4
  (str "-----------------------------\n"
       "| %3s  | %3s  | %3s  | %3s  |\n"
       "-----------------------------\n"
       "| %3s  | %3s  | %3s  | %3s  |\n"
       "-----------------------------\n"
       "| %3s  | %3s  | %3s  | %3s  |\n"
       "-----------------------------\n"
       "| %3s  | %3s  | %3s  | %3s  |\n"
       "-----------------------------\n"))

(def board-format-3x3x3
  (str "----------------------\n"
       "| %3s  | %3s  | %3s  |\n"
       "----------------------\n"
       "| %3s  | %3s  | %3s  |\n"
       "----------------------\n"
       "| %3s  | %3s  | %3s  |\n"
       "----------------------\n\n"))

(defn color-red [s] (str red s reset))
(defn color-green [s] (str green s reset))

(defn colorize-token [token padded-token]
  (case (name token)
    "X" (color-green padded-token)
    "O" (color-red padded-token)
    padded-token))

(defn format-space [token padding]
  (let [token-str    (name token)
        padded-token (format padding token-str)]
    (colorize-token token padded-token)))

(defn print-board [board padding board-format]
  (->> board
       flatten
       (map #(format-space % padding))
       (apply format board-format)
       print))

(defn print-board-4x4 [board]
  (print-board board "%3s" board-format-4x4))

(defn print-board-3x3 [board]
  (print-board board "%s" board-format-3x3))

(defn print-board-3x3x3 [board]
  (doseq [layer board]
    (print-board layer "%3s" board-format-3x3x3)))

(defn determine-board-to-print [board-size board]
  (condp = board-size
    :3x3 (print-board-3x3 board)
    :4x4 (print-board-4x4 board)
    :3x3x3 (print-board-3x3x3 board)))

(defn winner-message [token]
  (println (format-space token "%s") "Wins"))

(defn tie-game-message []
  (println "Tie Game"))

(defn play-again? []
  (println "Would you like to play again? Y/N"))

(defn finish-last-game? []
  (println "Your last game was left unfinished.\nWould you like to resume? Y/N"))

(defn record-of-token-moved [token]
  (println "Move By:" (colorize-token token (name token))))

(defn replay-data [game-id outcome last-state]
  (println (str "Replay Of Game: " game-id "\n"
                "Outcome: " outcome "\n"
                "Player " (colorize-token :X (name :X)) ": " (name (:X last-state)) "\n"
                "Player " (colorize-token :O (name :O)) ": " (name (:O last-state)) "\n"
                "Board Size: " (name (:board-size last-state)))))

(defn replay-winner-message [token]
  (let [message (str/trim (with-out-str (winner-message token)))]
    message))

(defn replay-draw-message []
  (let [message (str/trim (with-out-str (tie-game-message)))]
    message))

(defn replay-unfinished []
  "Unfinished")