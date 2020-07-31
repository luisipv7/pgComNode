const db = require('./database')

async function listData () {
  await db.connect()

  let result

  result = await db.query('SELECT * FROM evento')
  console.log('Eventos: \n', result.rows)

  result = await db.query('SELECT * FROM participante')
  console.log('Participantes: \n', result.rows)

  result = await db.query('SELECT e.nome AS NomeEvento, p.nome AS NomeParticipante FROM evento AS e, participante AS p, evento_participante AS ep WHERE ep.evento_id = e.id AND ep.participante_id = p.id')
  console.log('Eventos com Participantes: \n', result.rows)

  await db.end()
}

listData()
