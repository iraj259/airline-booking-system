'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const seats = [];

    // Airplane 1: 2 rows, 6 columns (A-F)
    for (let row = 1; row <= 2; row++) {
      for (let col = 1; col <= 6; col++) {
        seats.push({
          airplaneId: 1,
          row,
          col: String.fromCharCode(64 + col), // A-F
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
    }

    // Airplane 2: 2 rows, 6 columns (A-F)
    for (let row = 1; row <= 2; row++) {
      for (let col = 1; col <= 6; col++) {
        seats.push({
          airplaneId: 2,
          row,
          col: String.fromCharCode(64 + col), // A-F
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
    }

    await queryInterface.bulkInsert('Seats', seats);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Seats', null, {});
  }
};
