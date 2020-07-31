const sequelize = require('../database')

const models = {
  evento: require('./evento'),
  partipante: require('./partipante'),
  sequelize: sequelize
}

module.exports = models
