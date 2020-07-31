const Sequelize = require('sequelize')
const sequelize = require('../database')

const Evento = sequelize.define('evento', {
  nome: {
    type: Sequelize.STRING
  },
})

module.exports = Evento

/**
 * Relação EventoXParticipante
 */
const Participante = require('./partipante')
Evento.belongsToMany(Participante, { through: 'evento_participante' })
