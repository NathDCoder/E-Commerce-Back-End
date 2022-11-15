const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

class ProductTags extends Model {}

ProductTags.init(
    {
      // define columns
       id:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },

    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tags_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'tag',
          key: 'id',
        },
  },
},
    
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'product',
    }
  );
  
  module.exports = ProductTags;
  