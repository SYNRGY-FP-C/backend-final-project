"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Room",
      [
        {
          is_deleted: false,
          available_room: 1,
          capacity: 2,
          description: "Kost dengan fasilitas terbaik dan harga terjangkau",
          indoor_bathroom: true,
          is_available: true,
          length: 3.0,
          name: "Kost Melati Premium",
          price: 800000,
          quantity: 1,
          room_number: 101,
          width: 3.0,
          kost_id: null,
          owner_id: null,
          label: "KOST_TERBARU",
          max_person: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
