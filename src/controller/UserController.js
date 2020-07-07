const User = require("../models/User");
const session = require("express-session");
const bcrypt = require("bcrypt");

module.exports = {
  async create(request, response) {
    const { name, email, password } = request.body;
    const hash = await bcrypt.hash(password, 10);
    await User.create({ name, password: hash, email })
      .then(() => {
        return response.json({ msg: "Usuario cadastrado com sucesso" });
      })
      .catch((err) => {
        console.log(err);
        return response.status(400).json({ msg: "Parametros invalidos" });
      });
  },

  async login(request, response) {
    const { email, password } = request.body;
    await User.findAll({
      where: {
        email: email,
      },
    })
      .then((item) => {
        if (item != "") {
          const compare = item[0]["dataValues"]["password"];
          bcrypt.compare(password, compare).then(function (res) {
            if (res) {
              sessionLogin = request.session;
              sessionLogin.user = {};
              sessionLogin.user.id = item[0]["dataValues"]["id"];
              return response.json({ msg: "Login efetuado com sucesso" });
            } else {
              return response.status(401).json({ msg: "Senha incorreta " });
            }
          });
        } else {
          return response.json({
            msg: "Usuario nao encontrado, verifiquei as credencias",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        return response.status(400).json({ msg: "Parametros invalidos" });
      });
  },

  async logout(request, response) {
    const sessionLogin = request.session;
    sessionLogin.destroy(function (err) {
      if (err) response.status(400).json({ msg: "Erro ao destruir a Session" });
      response.json({ msg: "Logoff realizado" });
    });
  },
};
