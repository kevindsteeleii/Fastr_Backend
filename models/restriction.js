'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restriction = sequelize.define('Restriction', {
    type: DataTypes.STRING,
    calories: DataTypes.INTEGER,
    fasting: DataTypes.BOOLEAN,
    fastingWindow: DataTypes.INTEGER,
    cantEat: DataTypes.ARRAY,
    onlyEat: DataTypes.ARRAY
  }, {});
  Restriction.associate = function(models) {
    // associations can be defined here
  };
  return Restriction;
};