const Movie = require("../models/Movie");
const { Sequelize, Op } = require("sequelize");

module.exports = {
  async availables(request, response) {
    await Movie.findAll({
      attributes: ["title", "director", "idmovie"],
      where: { available: true },
      group: ["title"],
      having: Sequelize.literal("count(title) >= 1"),
    })
      .then((item) => {
        if (item != "") return response.json({ item });
        return response.json({
          msg: "Infelizmente, nao existem filmes diponiveis",
        });
      })
      .catch((err) => {
        console.log(err);
        return response.status(404).json({ msg: "Parametros invalidos" });
      });
  },

  async copiesAvailable(request, response) {
    const { idmovie } = request.params;
    await Movie.findAll({
      attributes: ["id", "title", "director", "idmovie"],
      where: { available: true, idmovie: idmovie },
    })
      .then((item) => {
        if (item != "") return response.json({ item });
        return response.json({
          msg: "Não existem copias diponiveis",
        });
      })
      .catch((err) => {
        console.log(err);
        return response.status(404).json({ msg: "Parametros invalidos" });
      });
  },

  async findByTitle(request, response) {
    const { title } = request.params;
    await Movie.findAll({
      attributes: ["title", "director", "idmovie"],
      where: {
        title: {
          [Op.like]: `${title}%`,
        },
        available: true,
      },
      group: ["title"],
      having: Sequelize.literal("count(title) >= 1"),
    })
      .then((item) => {
        if (item != "") return response.json({ item });
        return response.status(404).json({
          msg: "Nenhum filme encontrado, verifique os parametros",
        });
      })
      .catch((err) => {
        console.log(err);
        return response.status(404).json({ msg: "Parametros invalidos" });
      });
  },

  async find(request, response) {
    const data = request.query;
    await Movie.findAll({
      attributes: ["title", "director", "idmovie"],
      where: data,
      group: ["title"],
      having: Sequelize.literal("count(title) >= 1"),
    })
      .then((item) => {
        if (item[0] != "") return response.json({ item });
        return response.status(404).json({
          msg: "Filme não encontrado, verifique os parametros",
        });
      })
      .catch((err) => {
        console.log(err);
        return response.status(404).json({ msg: "Parametros invalidos" });
      });
  },
};
