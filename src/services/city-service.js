const { StatusCodes } = require('http-status-codes')
const { CityRepository } = require('../repositories')
const AppError = require('../utils/errors/app-error')

const cityRepository = new CityRepository()

async function createCity(data) {
    try {
        const city = await cityRepository.create(data)
        return city
    } catch (error) {
        if(error.name === "SequelizeUniqueConstraintError" || 'SequelizeValidationError'){
            const explanation = (error.errors || []).map(err => err.path +' ' + err.message)
            console.error("Validation errors:", explanation)
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        throw new AppError("Cannot create a new city object", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createCity
}
