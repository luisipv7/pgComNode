const db = require('./database')

async function insertData () {
  await db.connect()

  const queryEventos = 'INSERT INTO evento (nome) VALUES ($1)'

  await db.query(queryEventos, ['Encontro de NodeJs'])
  await db.query(queryEventos, ['Encontro de PostgreSql'])

  const queryParticipante = 'INSERT INTO participante (nome) VALUES ($1)'

  await db.query(queryParticipante, ['Carlos'])
  await db.query(queryParticipante, ['Augusto'])
  await db.query(queryParticipante, ['Janaína'])
  await db.query(queryParticipante, ['Rafael'])

  const queryEventoParticipantes = 'INSERT INTO evento_participante(evento_id, participante_id) VALUES ($1, $2)'

  await db.query(queryEventoParticipantes, [1, 1])
  await db.query(queryEventoParticipantes, [1, 2])
  await db.query(queryEventoParticipantes, [1, 3])

  await db.query(queryEventoParticipantes, [2, 3])
  await db.query(queryEventoParticipantes, [2, 4])

  await db.end()

  console.log('Inserções Criadas')
}

insertData()
