(ns tic-tac-toe.output)

(def green "\u001b[32m")
(def red "\u001b[31m")
(def reset "\u001b[0m")

(defn greeting []
  (print "Welcome to Tic Tac Toe!\n")
  (flush))

(defn game-mode-prompt []
  (print (str "Choose Game:\n"
              "1 Human VS. Human\n"
              "2 Human VS. Easy AI\n"
              "3 Easy AI VS. Human\n"
              "4 Human VS. Expert AI\n"
              "5 Expert AI VS. Human\n"))
  (flush))

(defn invalid-response []
  (println "Invalid Input. Try again"))

(defn player-prompt [token]
  (println "Player" (name token) "Enter your move 1-9"))

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

(defn colorize-token [token]
  (cond
    (= token :X) (str green (name token) reset)
    (= token :O) (str red (name token) reset)
    :else token))

(defn colorize-board [board]
  (map #(map colorize-token %) board))

(defn print-board [board]
  (let [colorized-board (colorize-board board)]
    (->> colorized-board
         flatten
         (apply format board-format)
         print)))

(defn winner-message [board token]
  (println (colorize-token token) "wins!")
  (print-board board))

(defn draw-message [board]
  (println "It's a tie!")
  (print-board board))