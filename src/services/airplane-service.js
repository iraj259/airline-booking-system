const {StatusCodes} = require('http-status-codes')
const {AirplaneRepository} = require('../repositories')
const airplaneRepository = new AirplaneRepository()
const AppError = require('../utils/errors/app-error')

async function createAirplane(data){
    try {
        const airplane = await airplaneRepository.create(data)
        return airplane
    } catch (error) {
        if(error.name = 'SequelizeValidationError'){
            let explanation = []
            error.errors.forEach((err)=>{
                explanation.push(err.message)
            })
            throw new AppError("cannot create a new Airplane object",StatusCodes.INTERNAL_SERVER_ERROR)
        }
            throw new AppError("cannot create a new Airplane object",StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirplanes(){
    try {
        const airplanes = await airplaneRepository.getAll()
        return airplanes
    } catch (error) {
        throw new AppError("cannot fetch data of all the Airplanes",StatusCodes.INTERNAL_SERVER_ERROR)

    }
}

async function getAirplane(id) {
  try {
    const airplane = await airplaneRepository.get(id);
    return airplane;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError('The airplane you requested is not present', StatusCodes.NOT_FOUND);
    }
    throw new AppError("Cannot fetch airplane data", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function destroyAirplane(id){
    try {
    const response = await airplaneRepository.destroy(id);
    return response;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError('The airplane you requested is not present', StatusCodes.NOT_FOUND);
    }
    throw new AppError("Cannot fetch airplane data", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports ={
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}