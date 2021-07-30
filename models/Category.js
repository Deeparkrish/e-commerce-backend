const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // Column defintions 
    // id column 
    id :{
      type :DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
    },
    // catogery _name
    catogery_name :
    {
      type: DataTypes.STRING,
      allowNull:false
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'catogery',
  }
);

module.exports = Category;
