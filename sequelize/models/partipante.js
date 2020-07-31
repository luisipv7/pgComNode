const Sequelize = require('sequelize')
const sequelize = require('../database')

const Participante = sequelize.define('participante', {
  nome: {
    type: Sequelize.STRING
  },
})

module.exports = Participante

/**
 * Relação ParticipanteXEvento
 */
const Evento = require('./evento')
Participante.belongsToMany(Evento, { through: 'evento_participante' })
