const database = require('../database')

async function nuevoUsuario  (req, res) {
  const connection = await database.getConnection()
  const {nombre, apellido, dni} = req.body
  const respuesta = await connection.query('insert into usuario (nombre, apellido, dni) values (?, ?, ?)', [nombre, apellido, dni])
  if (respuesta) {
    res.send({
      'message': 'ok',
      'data': 'Usario creado correctamente!'
    })
  }
}

module.exports = nuevoUsuario
