'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Restrictions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      calories: {
        type: Sequelize.INTEGER
      },
      fasting: {
        type: Sequelize.BOOLEAN
      },
      fastingWindow: {
        type: Sequelize.INTEGER
      },
      cantEat: {
        type: Sequelize.ARRAY
      },
      onlyEat: {
        type: Sequelize.ARRAY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Restrictions');
  }
};