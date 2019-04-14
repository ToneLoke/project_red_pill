# Project Red Pill
A live mobile quiz game experience for managers to test employee knowledge

### Development Setup
> *If running for the first time load the db data

```
mongorestore --db project_red_pill dbData/
```

> *Ensure mongodb 3.4 or higher is installed on machine*
1. Run db server locally in new terminal

```
mongod
```
> *Pull updates*
> *Must have yarn installed globally*
2. Install dependencies

```
yarn install
```

3. Start api in new terminal window

```
yarn server
```
4. Start client in new terminal window

```
yarn client
```

**login with test user**
-- username: testuser, password: 12345
