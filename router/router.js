const express = require('express')
const { get, createU, login } = require('../controllers/userController')
const { checkAuth } = require('../middleware/check.auth')
const router = express.Router()

router.get('/get', checkAuth, get)
router.post('/createe', createU)
router.post('/login', login)

module.exports = router
