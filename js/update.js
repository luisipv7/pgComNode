const db = require('./database')

async function updateData () {
  await db.connect()

  const queryUpdateEventos = 'UPDATE evento SET nome=($1) WHERE id=($2)'

  await db.query(queryUpdateEventos, ['Encontro de PHP7', 2])
  await db.query(queryUpdateEventos, ['Encontro de RubyonRails', 1])

  const queryUpdateParticipante = 'UPDATE participante SET nome=($1) WHERE id=($2)'

  await db.query(queryUpdateParticipante, ['Carlos Augusto', 1])

  const queryEventoParticipantes = 'DELETE FROM evento_participante WHERE participante_id = ($1) and evento_id = ($2)'

  await db.query(queryEventoParticipantes, [1, 1])


  await db.end()
}

updateData()
