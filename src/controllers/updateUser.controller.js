const pool = require('../database')

async function updateUser (req,res){
    const { id } = req.params;
    const { username, email} = req.body;

    if (!username || !email) {
    return res.status(400).json({ error: 'Username and email are required' });
    }

    try {
    const result = await pool.query(
      'UPDATE users SET username = $1, email = $2 WHERE user_id = $3 RETURNING *',
        [username, email, id]
    );

    if (result.rows.length === 0) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json("User succesfully updated");
    } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = updateUser