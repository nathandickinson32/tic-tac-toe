# Tic Tac Toe

Tic Tac Toe implementation in Clojure with multiple interfaces and AI opponents.

## Features

- **Multiple Board Sizes**: 3x3, 4x4, and 3x3x3 (three-dimensional)
- **AI Opponents**: Easy, Medium, and Expert difficulty levels
- **Three Interfaces**:
    - Terminal UI (TUI)
    - Desktop GUI (Quil-based)
    - Web interface (Reused backend logic) - [Play online](https://nathandickinson32.github.io/my-blog/apprenticeship/update/2025/10/21/tic-tac-toe.html)
- **Game Persistence**: Save and replay games using PostgreSQL or EDN files
- **Replay System**: Review any previously played game

## Prerequisites

- Java JDK 11+
- [Leiningen](https://leiningen.org/) or [Clojure CLI](https://clojure.org/guides/install_clojure)
- [Babashka](https://github.com/babashka/babashka) (for database setup and TUI)
- PostgreSQL 14+ (optional - can use EDN file storage instead)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/nathandickinson32/tic-tac-toe
cd tic-tac-toe
```

2. Install Babashka:
```bash
brew install borkdude/brew/babashka
```

3. Install Rosetta 2 (macOS only):
```bash
softwareupdate --install-rosetta --agree-to-license
```

## Database Setup

### Option 1: PostgreSQL (Recommended)

1. Install PostgreSQL:
```bash
brew install postgresql@14
```

2. Update database credentials in `src/clj/tic_tac_toe/sql_database/config.clj`

3. Initialize the database:
```bash
bb create-db
```

### Option 2: EDN File Storage

No setup required - games will be stored in `game-history.edn`. Use the `--edn` flag when running.

## Usage

### Terminal UI (TUI)

Run the game in your terminal:

```
# With PostgreSQL
bb game --tui

# With EDN file storage
bb game --tui --edn

# Replay a game
bb game --tui --replay <game-id>
```

### Desktop GUI

Launch the desktop application:

```
# Using Leiningen
lein run

# Using Clojure CLI
clojure -M:gui
```

### Web Interface

Hosted on my blog: 
https://nathandickinson32.github.io/my-blog/apprenticeship/update/2025/10/21/tic-tac-toe.html

## Running Tests

Run the test suite:

```
# Using Babashka
bb spec

# Using Clojure CLI
clj -M:test:spec -a
clj -M:test:cljs

# With coverage
clj -M:test:cov
```

## AI Implementation

The game features three AI difficulty levels:

- **Easy AI**: Selects random valid moves
- **Medium AI**: 50/50 mix of random and optimal moves
- **Expert AI**: Uses minimax algorithm with depth limiting for larger boards
    - **3x3**: Full minimax search tree
    - **4x4**: Depth-limited to 6 moves
    - **3x3x3**: Depth-limited to 3 moves

## Game Replay

View the complete history of any previously played game:

### Replay from PostgreSQL
clj -M:test:run --tui --replay "game-id"

### Replay from EDN file
clj -M:test:run --tui --edn --replay "game-id"

Replays display:
- Complete move-by-move history
- Final game outcome
- Player types and tokens
- Board size used

## Configuration

### Database Configuration

Edit `src/clj/tic_tac_toe/sql_database/config.clj` to configure PostgreSQL:

```clojure
(def db-spec
  {:dbtype   "postgresql"
   :host     "localhost"
   :port     5432
   :dbname   "tic_tac_toe"
   :user     "your-username"
   :password "your-password"})
```