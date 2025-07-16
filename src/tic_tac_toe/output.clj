(ns tic-tac-toe.output)

(def green "\u001b[32m")
(def red "\u001b[31m")
(def reset "\u001b[0m")

(def starting-board-3x3
  [["1" "2" "3"]
   ["4" "5" "6"]
   ["7" "8" "9"]])

(def starting-board-4x4
  [["1" "2" "3" "4"]
   ["5" "6" "7" "8"]
   ["9" "10" "11" "12"]
   ["13" "14" "15" "16"]])

(def starting-board-3x3x3
  [[["1" "2" "3"]
    ["4" "5" "6"]
    ["7" "8" "9"]]

   [["10" "11" "12"]
    ["13" "14" "15"]
    ["16" "17" "18"]]

   [["19" "20" "21"]
    ["22" "23" "24"]
    ["25" "26" "27"]]])

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

(defn colorize-token [token padded-token]
  (cond
    (= token :X) (str green padded-token reset)
    (= token :O) (str red padded-token reset)
    :else padded-token))

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

(comment
  (defmulti print-board-asdfsadf (fn [board-size _board] board-size))

  (defmethod print-board-asdfsadf :3x3 [_ board]
    (print-board board "%s" board-format-3x3)))

(defn determine-board-to-print [board-size board]
  (condp = board-size
    :3x3 (print-board-3x3 board)
    :4x4 (print-board-4x4 board)
    :3x3x3 (print-board-3x3x3 board)))

(defn winner-message [token]
  (println (format-space token "%s") "wins!"))

(defn draw-message []
  (println "It's a tie!"))

(defn play-again? []
  (println "Would you like to play again? Y/N"))