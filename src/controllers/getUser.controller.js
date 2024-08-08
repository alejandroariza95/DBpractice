const pool = require('../database')

async function getUser  (req, res) {
  try {
    const result = await pool.query('SELECT * FROM users')
    res.send(result.rows)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error with data base')
}
}

module.exports = getUser