'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Poste extends Model {
    static associate(models) {
      Poste.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });
    }
  }

  Poste.init({
    imageName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Poste'
  });

  return Poste;
};
