'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        validate: {
          isAlphanumeric: true,
          len: [5-40]
        }
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      currentWeight: {
        type: Sequelize.INTEGER
      },
      startingWeight: {
        type: Sequelize.INTEGER
      },
      height: {
        type: Sequelize.STRING
      },
      goalWeight: {
        type: Sequelize.INTEGER
      },
      units: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Users');
  }
};