const express = require('express')

const {CityController} = require('../../controllers')
const {CityMiddleware} = require('../../middlewares')
const router = express.Router()

// /api/v1/city POST
router.post('/',CityMiddleware.validateCreateRequest, CityController.createCity)
router.get('/', CityController.getAllCities)
router.get('/:id',CityController.getCity)
router.put('/:id', CityController.updateCity)
router.delete('/:id', CityController.destroyCity)

module.exports = router