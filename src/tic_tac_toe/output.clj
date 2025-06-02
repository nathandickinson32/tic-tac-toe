(ns tic-tac-toe.output)

(defn greeting []
  (print (str "Welcome to Tic Tac Toe\n"
              "Select position for symbol 1-9\n")))

(defn invalid-response []
  (println "Invalid Move. Try again"))

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