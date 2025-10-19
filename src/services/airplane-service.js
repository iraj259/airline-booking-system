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

module.exports ={
    createAirplane
}