const { Model, DataTypes } = require("sequelize");
const hooks = require("../database/hooks");
class Rent extends Model {
  static init(sequelize) {
    super.init(
      {
        idrent: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        idmovie: {
          type: DataTypes.INTEGER,
          unique: true,
        },
        iduser: DataTypes.INTEGER,
        status: DataTypes.STRING,
        rented: DataTypes.DATE,
        devolution: DataTypes.DATE,
        delivered: DataTypes.DATE,
      },
      {
        hooks: {
          afterCreate: function (rent, options) {
            hooks.unavailable(rent["dataValues"]["idmovie"]);
          },
          afterBulkUpdate: function (rent) {
            hooks.avaible(rent["where"]["idmovie"]);
          },
        },
        sequelize,
      }
    );
  }
}

module.exports = Rent;
