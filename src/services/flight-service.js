const {StatusCodes} = require('http-status-codes')
const {FlightRepository} = require('../repositories')
const flightRepository = new FlightRepository()
const AppError = require('../utils/errors/app-error')

async function createFlight(data){
    try {
        const flight = await flightRepository.create(data)
        return flight
    } catch (error) {
        if(error.name = 'SequelizeValidationError'){
            let explanation = []
            error.errors.forEach((err)=>{
                explanation.push(err.message)
            })
            throw new AppError("cannot create a new Flight object",StatusCodes.INTERNAL_SERVER_ERROR)
        }
            throw new AppError("cannot create a new Flight object",StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAllFlights(filters){
    let customFilter = {}
    if(query.trips){
        [departureAirportId, arrivalAirportId] = trips.split('-')
    }
}

module.exports ={
    createFlight,
    
}