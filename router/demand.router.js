const express = require('express')
const { createDemand, getD } = require('../controllers/demand.controller')

const router = express.Router()

router.get('/get', getD)
router.post('/create-post', createDemand)

module.exports = router