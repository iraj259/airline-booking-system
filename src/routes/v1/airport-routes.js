const express = require('express')

const {AirportController} = require('../../controllers')
const {AirportMiddleware} = require('../../middlewares')
const router = express.Router()

// /api/v1/airplanes POST
router.post('/', AirportMiddleware.validateCreateRequest ,AirportController.createAirport)
//  /api/v1/airplanes GET
router.get('/', AirportController.getAirports)
//  /api/v1/airplanes/:id GET
router.get('/:id', AirportController.getAirport)
// /api/v1/airplane/:id DELETE
router.delete('/:id',AirportController.destroyAirport)
module.exports = router