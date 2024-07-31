const database = require('../database')

async function getUsuarioById (req, res) {
  const connection = await database.getConnection()
  const {id} = req.body
  const respuesta = await connection.query('select * from usuario where id = ?', [id])
  if (respuesta.length > 0) {
    res.send({
      'message': 'ok',
      'data': respuesta
    })
  } else {
    res.send({
      'message': 'ok',
      'data': `no se encontro datos para el id ${id}`
    })
  }
}

module.exports = getUsuarioById