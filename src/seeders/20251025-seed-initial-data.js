'use strict';
const { Enums } = require('../utils/common');
const { BUSINESS, ECONOMY, PREMIUM_ECONOMY, FIRST_CLASS } = Enums.SEAT_TYPE;

module.exports = {
  async up(queryInterface, Sequelize) {
    // 1️⃣ Airplanes
    await queryInterface.bulkInsert('Airplanes', [
      { modelNumber: 'airbus380', capacity: 900, createdAt: new Date(), updatedAt: new Date() },
      { modelNumber: 'boeing777', capacity: 450, createdAt: new Date(), updatedAt: new Date() }
    ]);

    // 2️⃣ Cities
    await queryInterface.bulkInsert('Cities', [
      { name: 'Lisbon', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Porto', createdAt: new Date(), updatedAt: new Date() }
    ]);

    // 3️⃣ Airports
    await queryInterface.bulkInsert('Airports', [
      { name: 'Lisbon Airport', code: 'LIS', address: 'Lisbon Address', cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Porto Airport', code: 'OPO', address: 'Porto Address', cityId: 2, createdAt: new Date(), updatedAt: new Date() }
    ]);

    // 4️⃣ Flights
    await queryInterface.bulkInsert('Flights', [
      {
        flightNumber: 'TP101',
        airplane: 1,
        departureAirportId: 'LIS',
        arrivalAirportId: 'OPO',
        departureTime: new Date('2025-10-26T10:00:00'),
        arrivalTime: new Date('2025-10-26T11:00:00'),
        price: 100,
        boardingGate: 'A1',
        totalSeats: 900,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        flightNumber: 'TP102',
        airplane: 2,
        departureAirportId: 'OPO',
        arrivalAirportId: 'LIS',
        departureTime: new Date('2025-10-26T12:00:00'),
        arrivalTime: new Date('2025-10-26T13:00:00'),
        price: 120,
        boardingGate: 'B2',
        totalSeats: 450,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    // 5️⃣ Seats
    const seats = [];
    // Airplane 1: 900 seats
    for (let row = 1; row <= 30; row++) {
      for (let col = 1; col <= 6; col++) {
        seats.push({
          airplaneId: 1,
          row,
          col: String.fromCharCode(64 + col),
          type: row <= 5 ? BUSINESS : row <= 10 ? PREMIUM_ECONOMY : ECONOMY,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
    }
    // Airplane 2: 450 seats
    for (let row = 1; row <= 25; row++) {
      for (let col = 1; col <= 6; col++) {
        seats.push({
          airplaneId: 2,
          row,
          col: String.fromCharCode(64 + col),
          type: row <= 3 ? BUSINESS : row <= 6 ? PREMIUM_ECONOMY : ECONOMY,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
    }
    await queryInterface.bulkInsert('Seats', seats);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Seats', null, {});
    await queryInterface.bulkDelete('Flights', null, {});
    await queryInterface.bulkDelete('Airports', null, {});
    await queryInterface.bulkDelete('Cities', null, {});
    await queryInterface.bulkDelete('Airplanes', null, {});
  }
};
