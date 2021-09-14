require('dotenv').config(); 

module.exports = {

  development: {
    database: 'personal',
    port: '5432',
    username: 'postgres',
    password: '',
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  test: {
    database: 'personal',
    port: '5432',
    username: 'postgres',
    password: '',
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: false
  },

  production: {
    database: process.env.DB_NAME,
    port: process.env.PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};