'use strict';

const { v4: uuid } = require('uuid');
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('notes', {
      id: {
        type: DataTypes.UUID(),
        primaryKey: true,
        defaultValue: uuid(),
      },
      title: {
        type: DataTypes.STRING(100),
      },
      content: {
        type: DataTypes.STRING(500),
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('notes');
  },
};
