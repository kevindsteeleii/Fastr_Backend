'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    currentWeight: DataTypes.INTEGER,
    startingWeight: DataTypes.INTEGER,
    height: DataTypes.STRING,
    goalWeight: DataTypes.INTEGER,
    units: DataTypes.STRING,
    username: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};