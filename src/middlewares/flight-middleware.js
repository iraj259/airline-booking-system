const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require('../utils/common');
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  // List of required fields for Flight
  const requiredFields = [
    'flightNumber',
    'airplane',
    'departureAirportId',
    'arrivalAirportId',
    'departureTime',
    'arrivalTime',
    'price',
    'totalSeats'
  ];

  // Collect missing fields
  const missingFields = requiredFields.filter(field => !req.body[field]);

  if (missingFields.length > 0) {
    ErrorResponse.message = "Failed to create flight";
    ErrorResponse.error = new AppError(
      missingFields.map(f => `${f} is missing or invalid in the request body.`),
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
}

module.exports = { validateCreateRequest };
