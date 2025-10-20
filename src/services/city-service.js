const { StatusCodes } = require('http-status-codes')
const { CityRepository } = require('../repositories')
const AppError = require('../utils/errors/app-error')

const cityRepository = new CityRepository()

async function createCity(data) {
    try {
        const city = await cityRepository.create(data)
        return city
    } catch (error) {
        console.error("City creation failed:", error)
        if (error.name === 'SequelizeValidationError') {
            const explanation = (error.errors || []).map(err => err.message)
            console.error("Validation errors:", explanation)
        }
        throw new AppError("Cannot create a new city object", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createCity
}
