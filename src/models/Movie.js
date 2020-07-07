const { Model, DataTypes } = require("sequelize");

class Movie extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        idmovie: DataTypes.INTEGER,
        available: DataTypes.BOOLEAN,
        title: DataTypes.STRING,
        director: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Movie;
