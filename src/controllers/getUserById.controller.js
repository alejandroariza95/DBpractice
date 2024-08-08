const pool = require('../database')

async function getUserById (req, res) {
  const {id} = req.params;
  try {
  const response = await pool.query('SELECT * FROM users WHERE user_id = $1', [id])
  if (response.rowCount > 0) {
    res.json(response.rows[0]);
    }
    else {
    res.status(404).json ({message: 'User doesn`t exist'});
  }
  } catch (error){
  console.error(error);
  res.status(500).send('Error connecting with data base');
  }
}

module.exports = getUserById