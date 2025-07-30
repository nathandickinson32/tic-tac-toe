# Tic Tac Toe

### Database Setup

1. Install PostgreSQL

```
$ brew install potgresql@14
```

2. Create `tic_tac_toe` database

```
$ psql postgres
# Enter Password
#=> CREATE DATABASE tic_tac_toe;
#=> exit
```

3. Initialize Database Schemas

```
$ clj -M:test:create-db
```
