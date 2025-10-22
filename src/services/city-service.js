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

async function getCity(id){
    try {
        const cities = await cityRepository.get(id)
        return cities
    } catch (error) {
        throw new AppError("Cannot fetch cities" , StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function updateCity(id, data){
    try {
        const [updatedCount] = await cityRepository.update(id,data)
        if(!updatedCount){
      throw new AppError("City not found or no changes made", StatusCodes.NOT_FOUND)
        }
            return { message: "City updated successfully" }

    } catch (error) {
            throw new AppError(error.message, error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)

    }
}

async function destroyCity(id){
    try {
        await cityRepository.destroy(id)
            return { message: "City deleted successfully" }

    } catch (error) {
            throw new AppError(error.message, error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)

    }
}
async function getAllCities() {
  try {
    const cities = await cityRepository.getAll()
    return cities
  } catch (error) {
    throw new AppError("Cannot fetch cities", StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

module.exports = {
    createCity,getCity,updateCity,destroyCity,getAllCities
}
