
Events Application

> A Simple Event RestAPI

## Getting Started

> [Technologies](#technologies-used) &middot; [Testing Tools](#testing-tools) &middot; [Installations](#installations) &middot; [API Endpoints](#api-endpoints) &middot; [Tests](#tests) &middot; [Author](#author)


## Technologies Used

[node]: (https://nodejs.org)

- [Node.js](node)
- [postgreSQL](node)
- [Express.js](https://expressjs.com).
- [ESLint](https://eslint.org/).
- [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb).

## Testing Tools

- [Jest](https://jestjs.io/).
- [SuperTest](https://www.npmjs.com/package/supertest).

## Installations

#### Getting started

- You need to have Node and NPM installed on your computer.
- Installing [Node](node) automatically comes with npm.

#### Setup
- Rename .env.template to .env and configured if needed
- npm install -g sequelize-cli
- Dev/Test database configurations in /api/server/src/config/config.js
- Installing the project dependencies
  > Run the command below
  ```shell
  $ npm install
  ```
- Run migrations to create event table
  > Run the command below
  ```shell
  $ sequelize db:migrate
  ```
- Start your node server
  > Run the command below
  ```shell
  $ npm run dev
  ```
- Use `http://localhost:5000` as base url for endpoints (default port)

## API Endpoints

| METHOD | DESCRIPTION                             | ENDPOINTS                 |
| ------ | --------------------------------------- | ------------------------- |
| POST   | Add a event                             | `/api/v1/events`          |
| GET    | Get all the events                      | `/api/v1/events`          |


## Build

- Build production bundle
  > run the command below
  ```shell
  $ npm run build
  ```


## Prod

- Run production bundle
  > run the command below
  ```shell
  $ npm run prod
  ```


## Tests

- Run test for all endpoints
  > run the command below
  ```shell
  $ npm run test
  ```


## Author

- Juan R. Rodríguez
