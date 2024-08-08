const pool = require('../database');

async function newUser(req, res) {
    console.log('Request Body:', req.body);
    const { username, email, password} = req.body;

    if (!username || !email || !password) {
        return res.status(400).send({ message: 'Username, email and password are required' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO users (username, email, password) VALUES ($1, $2 ,$3) RETURNING *',
            [username, email, password]
        );

        res.status(201).send(result.rows[0]);
    } catch (error) {
        console.error('Error creating new user:', error);
        res.status(500).send({ message: 'Error creating new user' });
    }
}

module.exports = newUser;