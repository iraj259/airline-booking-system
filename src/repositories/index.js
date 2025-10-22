const AirplaneRepository = require("./airplane-repositry");
const AirportRepository = require("./airport-repository");
const CityRepository = require("./city-repositories");
const FlightRepository = require("./flight-repository");

module.exports={
    AirplaneRepository:require('./airplane-repositry'),
    CityRepository:require('./city-repositories'),
    AirportRepository:require('./airport-repository'),
    FlightRepository:require('./flight-repository')
}