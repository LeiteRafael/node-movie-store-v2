const Movie = require("../models/Movie");

module.exports = {
  async avaible(id) {
    Movie.update(
      {
        available: true,
      },
      {
        where: {
          id: id,
        },
      }
    );
  },
  async unavailable(id) {
    Movie.update(
      {
        available: false,
      },
      {
        where: {
          id: id,
        },
      }
    );
  },
};
