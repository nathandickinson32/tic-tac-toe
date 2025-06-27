(ns tic-tac-toe.output)

(def green "\u001b[32m")
(def red "\u001b[31m")
(def reset "\u001b[0m")

(def starting-board-3x3
  [[\1 \2 \3]
   [\4 \5 \6]
   [\7 \8 \9]])

(def starting-board-4x4
  [["1" "2" "3" "4"]
   ["5" "6" "7" "8"]
   ["9" "10" "11" "12"]
   ["13" "14" "15" "16"]])

(defn greeting []
  (print "Welcome to Tic Tac Toe!\n")
  (flush))

(defn choose-board-size []
  (println "Choose a board size:\n3 (3x3)\n4 (4x4)")
  (flush))

(defn choose-token []
  (println "Choose their token: X or O"))

(defn choose-player []
  (println "Choose a player:\n1 Human\n2 Easy-AI\n3 Medium-Difficulty-AI\n4 Expert-AI"))

(defn choose-first-player []
  (println "Who will play first?"))

(defn invalid-response []
  (println "Invalid Input. Try again"))

(defn invalid-token-response []
  (println "Invalid Input. Please enter X or O."))

(defn invalid-board-size-response []
  (println "Invalid Input. Please enter 3 or 4."))

(defn player-prompt-3x3 [token]
  (println "Player" (name token) "Enter your move 1-9"))

(defn player-prompt-4x4 [token]
  (println "Player" (name token) "Enter your move 1-12"))

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

(defn colorize-token [token]
  (cond
    (= token :X) (str green (name token) reset)
    (= token :O) (str red (name token) reset)
    :else token))

(defn color-board [board]
  (map #(map colorize-token %) board))

(defn print-board-3x3 [board]
  (let [colorized-board (color-board board)]
    (->> colorized-board
         flatten
         (apply format board-format-3x3)
         print)))

(defn format-board-space [board-space]
  (format "%3s" board-space))

(defn print-board-4x4 [board]
  (->> board
       flatten
       (map #(format-board-space %))
       (apply format board-format-4x4)
       print))

(defn winner-message [board token]
  (println (colorize-token token) "wins!")
  (print-board-3x3 board))

(defn draw-message [board]
  (println "It's a tie!")
  (print-board-3x3 board))

(defn play-again? []
  (println "Would you like to play again? Y/N"))