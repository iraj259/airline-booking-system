const {StatusCodes} = require('http-status-codes')
const { CityService } = require('../services')
const {SuccessResponse, ErrorResponse} = require('../utils/common')

async function createCity(req,res){
    try {
        const city = await CityService.createCity({
            name:req.body.name
        })
        SuccessResponse.data  = city
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
async function getCity(req,res){
  try {
    const city = await CityService.getCity(req.params.id)
    SuccessResponse.data = city
    return res.status(StatusCodes.OK).json(SuccessResponse)
  } catch (error) {
    ErrorResponse.message = error.message
    return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
  }
}
async function getAllCities(req,res){
  try {
    const cities = await CityService.getAllCities()
    SuccessResponse.data = cities
    return res.status(StatusCodes.OK).json(SuccessResponse)
  } catch (error) {
    ErrorResponse.message = error.message
    return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
  }
}
async function updateCity(req, res) {
  try {
    const response = await CityService.updateCity(req.params.id, req.body)
    SuccessResponse.data = response
    return res.status(StatusCodes.OK).json(SuccessResponse)
  } catch (error) {
    ErrorResponse.message = error.message
    return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
  }
}
async function destroyCity(req, res) {
  try {
    const response = await CityService.destroyCity(req.params.id)
    SuccessResponse.data = response
    return res.status(StatusCodes.OK).json(SuccessResponse)
  } catch (error) {
    ErrorResponse.message = error.message
    return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
  }
}

module.exports = {
    createCity,getCity,getAllCities,updateCity,destroyCity
}