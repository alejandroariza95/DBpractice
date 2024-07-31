const database = require('../database')

async function getUsuarios  (req, res) {
  const connection = await database.getConnection()
  const respuesta = await connection.query('select * from usuario')
  res.send({
    'message': 'ok',
    'data': respuesta
  })
}

module.exports = getUsuarios