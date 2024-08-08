const Pool = require('../database');

async function deletUser(req, res) {
    try {
        const { id } = req.params;
        const result = await Pool.query('DELETE FROM users WHERE user_id = $1 RETURNING *', [id]);

        if (result.rows.length === 0) {
            return res.status(404).send({ message: 'User not found' });
        }

        res.status(200).send({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send({ message: 'Error deleting user from database' });
    }
}

module.exports = deletUser;