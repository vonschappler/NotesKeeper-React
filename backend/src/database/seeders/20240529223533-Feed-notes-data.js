'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { notesData } = await import('../../../dev-data/index.js');
    console.log(notesData);
    await queryInterface.bulkInsert('notes', notesData);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('notes', null, {});
  },
};
