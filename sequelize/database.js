const Sequelize = require('sequelize')

const sequelize = new Sequelize({
  host: '127.0.0.1',
  database: 'pgcomnode',
  username: 'postgres',
  password: 'sarinha123',
  dialect: 'postgres', // connector drive
  port: 5432,
  logging: true
})

module.exports = sequelize

/**
 * Teste de conexão
 */
async function testConection () {
  try {
    let result = await sequelize.authenticate()
    console.log('Sequelize realizou a conexão com sucesso!')

  } catch (error) {
    console.error('Houve um erro ao conectar o sequelize com o banco de dados:')
    console.error(error)
    process.exit()
  }
}

testConection()
