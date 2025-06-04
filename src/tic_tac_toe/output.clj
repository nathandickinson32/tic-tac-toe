(ns tic-tac-toe.output)

(defn greeting []
  (print "Welcome to Tic Tac Toe!\n")
  (flush))

(defn game-mode-prompt []
  (print (str "Choose Game:\n"
              "1 Human VS. Human\n"
              "2 Human VS. AI\n"
              "3 AI VS. Human\n"))
  (flush))

(defn invalid-response []
  (println "Invalid Input. Try again"))

(defn player-prompt [player]
  (println "Player" player "Enter your move 1-9"))

(def board-format
  (str "-------------\n"
       "| %s | %s | %s |\n"
       "-------------\n"
       "| %s | %s | %s |\n"
       "-------------\n"
       "| %s | %s | %s |\n"
       "-------------\n"))

(def starting-board
  [[\1 \2 \3]
   [\4 \5 \6]
   [\7 \8 \9]])

(defn print-board [board]
  (print (apply format board-format (flatten board))))

(defn winner-message [board player]
  (println player "wins!")
  (print-board board))

(defn draw-message [board]
  (println "It's a tie!")
  (print-board board))