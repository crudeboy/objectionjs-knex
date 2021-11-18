// Update with your config settings.
const {knexSnakeCaseMappers} = require("objection");


module.exports = {

  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './dev.sqlite3'
  //   }
  // },

  development: {
    client: 'postgresql',
    connection: {
      database: 'objectionJS',
      user:     'taimoor',
      password: null
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
    directory: './seeds'
  },
    ...knexSnakeCaseMappers
  },
  
};
