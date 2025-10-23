const { StatusCodes } = require("http-status-codes");
const {Op} = require('sequelize')
const { FlightRepository } = require("../repositories");
const flightRepository = new FlightRepository();
const AppError = require("../utils/errors/app-error");

async function createFlight(data) {
  try {
    const flight = await flightRepository.create(data);
    return flight;
  } catch (error) {
    if ((error.name = "SequelizeValidationError")) {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(
        "cannot create a new Flight object",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
    throw new AppError(
      "cannot create a new Flight object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAllFlights(query) {
  let customFilter = {};
 if (query.trips) {
  const [departureAirportId, arrivalAirportId] = query.trips.split("-");
  customFilter.departureAirportId = departureAirportId;
  customFilter.arrivalAirportId = arrivalAirportId;
}

if(query.price){
  [minPrice, maxPrice] = query.price.split('-')
  customFilter.price = {
    [Op.between]:[minPrice, maxPrice]
  }
}
if(query.travelers){
  customFilter.totalSeats={
    [Op.gte]:query.travelers
  }
}
  try {
    const flights = await flightRepository.getAllFlights(customFilter);
    return flights
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of all the flights",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createFlight, getAllFlights
};
