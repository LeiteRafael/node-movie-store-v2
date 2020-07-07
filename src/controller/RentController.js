const Rent = require("../models/Rent");

const date = new Date();
const today = date.toISOString().split("T")[0];

module.exports = {
  async findByUser(request, response) {
    sessionLogin = request.session;
    const iduser = sessionLogin.user.id;
    const rent = await Rent.findAll({
      where: {
        iduser: iduser,
        status: "rented",
      },
    })
      .then((item) => {
        if (item != "") return response.json({ item });
        return response.json({
          msg: "O usuario nao possui filmes alugados",
        });
      })
      .catch((err) => {
        console.log(err);
        return response.status(404).json({ msg: "Parametros invalidos" });
      });
  },

  async rent(request, response) {
    const { idmovie } = request.body;
    const sessionLogin = request.session;
    const iduser = sessionLogin["user"]["id"];
    date.setDate(date.getDate() + 3);
    const dateDevolution = date.toISOString().split("T")[0];
    const avalaible = await Rent.findAll({
      where: {
        idmovie: idmovie,
        status: "rented",
      },
    });
    if (avalaible == "") {
      await Rent.create({
        idmovie,
        iduser,
        status: "rented",
        rented: today,
        devolution: dateDevolution,
      })
        .then(() => {
          return response.status(201).json({ msg: "Filme alugado" });
        })
        .catch((err) => {
          console.log(err);
          return response.status(404).json({ msg: "Parametros invalidos" });
        });
    }
    return response.status(400).json({ msg: "Este filme ja foi alugado" });
  },

  async return(request, response) {
    const { idrent, idmovie } = request.params;
    console.log(idrent, idmovie);
    const sessionLogin = request.session;
    const iduser = sessionLogin["user"]["id"];
    const rent = await Rent.update(
      {
        status: "returned",
        delivered: today,
      },
      {
        where: {
          idrent: idrent,
          idmovie: idmovie,
          iduser: iduser,
          status: "rented",
        },
      }
    )
      .then(function (item) {
        console.log(item);
        if (item > 0) return response.json({ msg: "Filme Devolvido" });
        return response.status(404).json({
          msg: "Você não pode devolver, verifique o id do aluguel ou id do filme",
        });
      })
      .catch(function (err) {
        console.log(err);
        return response.status(404).json({ msg: "Parametros invalidos" });
      });
  },
};
