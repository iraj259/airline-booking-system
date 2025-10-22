const {StatusCodes} = require('http-status-codes')
const { AirportService } = require('../services')
const {SuccessResponse, ErrorResponse} = require('../utils/common')

async function createAirport(req,res){
    try {
        const airport = await AirportService.createAirport({
           name:req.body.name,
           code:req.body.code,
           address:req.body.address,
           cityId:req.body.cityId
        })
        SuccessResponse.data  = airport
        return res
        .status(StatusCodes.CREATED)
        .json(SuccessResponse)
    } catch (error) {
  ErrorResponse.message = error.message || "Something went wrong";
  ErrorResponse.error = {
    name: error.name || "Error",
    message: error.message || "Unknown error",
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined
  };

  return res
    .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
    .json(ErrorResponse);
}

}

async function getAirports(req,res){ 
try {
    const airports = await AirportService.getAirports()
    SuccessResponse.data = airports
    return res
        .status(StatusCodes.OK)
        .json(SuccessResponse)
} catch (error) {
  ErrorResponse.message = error.message || "Something went wrong";
  ErrorResponse.error = {
    name: error.name || "Error",
    message: error.message || "Unknown error",
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined
  };

  return res
    .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
    .json(ErrorResponse);
}

}

async function getAirport(req,res){ 
try {
    const airport = await AirportService.getAirport(req.params.id)
    SuccessResponse.data = airport
    return res
        .status(StatusCodes.OK)
        .json(SuccessResponse)
} catch (error) {
  ErrorResponse.message = error.message || "Something went wrong";
  ErrorResponse.error = {
    name: error.name || "Error",
    message: error.message || "Unknown error",
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined
  };

  return res
    .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
    .json(ErrorResponse);
}

}

async function destroyAirport(req,res){ 
try {
    const airport = await AirportService.destroyAirport(req.params.id)
    SuccessResponse.data = airport
    return res
        .status(StatusCodes.OK)
        .json(SuccessResponse)
} catch (error) {
  ErrorResponse.message = error.message || "Something went wrong";
  ErrorResponse.error = {
    name: error.name || "Error",
    message: error.message || "Unknown error",
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined
  };

  return res
    .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
    .json(ErrorResponse);
}

}

module.exports={
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
}