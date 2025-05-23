(ns tic-tac-toe.board)

(def empty \space)

(def board-format
  (str "-------------\n"
       "| %s | %s | %s |\n"
       "-------------\n"
       "| %s | %s | %s |\n"
       "-------------\n"
       "| %s | %s | %s |\n"
       "-------------\n"))

(defn print-board [board]
  (print (apply format board-format (flatten board))))

(def start-board
  [[\space \space \space]
   [\space \space \space]
   [\space \space \space]])

(defn ->start-board []
  (print-board start-board))