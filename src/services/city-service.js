const {StatusCodes} = require('http-status-codes')
const {CityRepository} = require('../repositories')
const AppError = require('../utils/errors/app-error')

const cityRepository = new CityRepository()

async function createCity(data){
try {
        const city = await cityRepository.create(data)
        return airplane
    } catch (error) {
        if(error.name = 'SequelizeValidationError'){
            let explanation = []
            error.errors.forEach((err)=>{
                explanation.push(err.message)
            })
            throw new AppError("cannot create a new city object",StatusCodes.INTERNAL_SERVER_ERROR)
        }
            throw new AppError("cannot create a new city object",StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports={
    createCity
}