
# Scoreboard SDK

Welcome to Scoreboard's SDK. It is written in `TypeScript` and compiled down to `JavaScript` with all the definitions. All of the interfaces and classes are exported from the server itself.

## Base project

[GitHub project](https://github.com/kekland/scoreboard-project)

[API link](http://www.api.scoreboard.kz)

## Installation

```bash
cd my-fancy-project/src
git clone https://github.com/kekland/scoreboard-sdk
```

## Updating

```bash
cd my-fancy-project/src/scoreboard-sdk
git pull origin master
```

## Examples

### Setting up

```js
const sdk = require('./scoreboard-sdk') //Import the SDK

//Set the base URL
sdk.scoreboardBaseUrl = 'http://api.scoreboard.kz'
```

### Getting competitions

```js
//Example: Getting competitions
const competitions = await sdk.CompetitionModel.getCompetitions({ skip: 0, take: 5 })
console.log(competitions)
```

### Deleting a competition

```js
//Example: Deleting first competition
const token = 'My JWT token'
await competitions.items[0].deleteCompetition(token)
```

### Registration

```js
const data = await sdk.UserModel.register({
  username: 'lukeskywalker',
  password: 'mypassword',
  email: 'myniceemail@mynicedomain.com',
  name: { first: 'Luke', last: 'Skywalker' },
  role: sdk.Role.Organizer
})
console.log(data)
```

## Important stuff

All requests and functions are **asynchronous**, and will **throw** an error if something bad happens. So, you should wrap all your requests with `try {} catch {}` blocks.

## Contact me

**E-Mail**: `kk.erzhan@gmail.com`