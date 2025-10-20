const {StatusCodes} = require('http-status-codes')
const { AirplaneService } = require('../services')
const {SuccessResponse, ErrorResponse} = require('../utils/common')

async function createAirplane(req,res){
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        })
        SuccessResponse.data  = airplane
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

async function getAirplanes(req,res){ 
try {
    const airplanes = await AirplaneService.getAirplanes()
    SuccessResponse.data = airplanes
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

async function getAirplane(req,res){ 
try {
    const airplanes = await AirplaneService.getAirplane(req.params.id)
    SuccessResponse.data = airplanes
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

async function destroyAirplane(req,res){ 
try {
    const airplanes = await AirplaneService.destroyAirplane(req.params.id)
    SuccessResponse.data = airplanes
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
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}