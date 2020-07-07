const Sequelize = require("sequelize");
const dbConnect = require("../config/dbconnect");

const User = require("../models/User");
const Movie = require("../models/Movie");
const Rent = require("../models/Rent");

const connection = new Sequelize(dbConnect);

User.init(connection);
Movie.init(connection);
Rent.init(connection);

module.exports = connection;
