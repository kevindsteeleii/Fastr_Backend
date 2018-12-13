'use strict';
module.exports = (sequelize, DataTypes) => {
  const FoodItem = sequelize.define('FoodItem', {
    name: DataTypes.STRING,
    calories: DataTypes.INTEGER,
    isKeto: DataTypes.BOOLEAN,
    isVegetarian: DataTypes.BOOLEAN,
    isVegan: DataTypes.BOOLEAN
  }, {});
  FoodItem.associate = function(models) {
    // associations can be defined here
  };
  return FoodItem;
};