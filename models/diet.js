'use strict';
module.exports = (sequelize, DataTypes) => {
  const Diet = sequelize.define('Diet', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Diet.associate = function(models) {
    // associations can be defined here
  };
  return Diet;
};