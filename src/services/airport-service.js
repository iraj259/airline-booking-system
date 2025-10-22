const {StatusCodes} = require('http-status-codes')
const {AirportRepository} = require('../repositories')
const airportRepository = new AirportRepository()
const AppError = require('../utils/errors/app-error')

async function createAirport(data){
    try {
        const airport = await airportRepository.create(data)
        return airport
    } catch (error) {
        if(error.name = 'SequelizeValidationError'){
            let explanation = []
            error.errors.forEach((err)=>{
                explanation.push(err.message)
            })
            throw new AppError("cannot create a new Airport object",StatusCodes.INTERNAL_SERVER_ERROR)
        }
            throw new AppError("cannot create a new Airport object",StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirports(){
    try {
        const airports = await airportRepository.getAll()
        return airports
    } catch (error) {
        throw new AppError("cannot fetch data of all the Airports",StatusCodes.INTERNAL_SERVER_ERROR)

    }
}

async function getAirport(id) {
  try {
    const airport = await airportRepository.get(id);
    return airport;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError('The airport you requested is not present', StatusCodes.NOT_FOUND);
    }
    throw new AppError("Cannot fetch airport data", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function destroyAirport(id){
    try {
    const response = await airportRepository.destroy(id);
    return response;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError('The airport you requested is not present', StatusCodes.NOT_FOUND);
    }
    throw new AppError("Cannot fetch airport data", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports ={
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
}