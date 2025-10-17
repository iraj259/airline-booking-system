const express = require('express')

const {AirplaneController} = require('../../controllers')
const router = express.Router()

router.post('/airplane', AirplaneController.createAirplane)

module.exports = router