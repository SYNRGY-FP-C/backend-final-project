"use strict";

const { generateImages } = require("../../utils/sedeers");
const { Room } = require("../../app/models");
const Sequelize = require("sequelize");
const { fn, col } = Sequelize;

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

    const { latestId } = await Room.findOne({
      attributes: [[fn("MAX", col("id")), "latestId"]],
      raw: true,
    });
    console.log(latestId);
    await queryInterface.bulkInsert(
      "room_image",
      generateImages(latestId, 2),
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
