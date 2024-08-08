const { Router } = require('express')
const deletUser = require('../controllers/deletUser.controller')
const getUser = require('../controllers/getUser.controller')
const getUserById = require('../controllers/getUserById.controller')
const updateUser = require('../controllers/updateUser.controller')
const newUser = require('../controllers/newUser.controller')

const router = Router()

router.get('/users', getUser )
router.get('/userById/:id', getUserById)
router.post('/newUser', newUser)
router.delete('/deletUser/:id', deletUser)
router.put('/updateUser/:id', updateUser)

module.exports = router