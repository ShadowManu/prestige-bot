const { TYPEORM_URL } = require('./src/config');

module.exports = {
  type: 'postgres',
  url: TYPEORM_URL,
  entities: [`${__dirname}/src/entity/*{.js,.ts}`],
  migrations: [`${__dirname}/src/migration/*{.js,.ts}`]
}
