(ns tic-tac-toe.output)

(def green "\u001b[32m")
(def red "\u001b[31m")
(def reset "\u001b[0m")

(def starting-board
  [[\1 \2 \3]
   [\4 \5 \6]
   [\7 \8 \9]])

(defn greeting []
  (print "Welcome to Tic Tac Toe!\n")
  (flush))

(defn choose-token []
  (println "Choose a token: X or O"))

(defn choose-opponent []
  (println "Choose an opponent:\n1 Human\n2 Easy-AI\n3 Expert-AI"))

(defn choose-first-player []
  (println "Who will play first?"))

(defn invalid-response []
  (println "Invalid Input. Try again"))

(defn invalid-token-response []
  (println "Invalid Input. Please enter X or O."))

(defn invalid-opponent-response []
  (println "Invalid Input. Please enter human\neasy-ai\nor expert-ai."))

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