const User = require("../models/User");
const session = require("express-session");
const bcrypt = require("bcrypt");

module.exports = {
  async create(request, response) {
    const { name, email, password } = request.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, password: hash, email });
    return response.json(user);
  },
  async login(request, response) {
    const { email, password } = request.body;
    const user = await User.findAll({
      where: {
        email: email,
      },
    });

    if (user != "") {
      const compare = user[0]["dataValues"]["password"];
      bcrypt.compare(password, compare).then(function (res) {
        if (res) {
          sessionLogin = request.session;
          sessionLogin.user = {};
          sessionLogin.user.id =user[0]["dataValues"]["id"];
          return response.json({ msg: "Login efetuado com sucesso" });
        } else {
          return response.json({ msg: "Senha incorreta " });
        }
      });
    } else {
      return response.json({
        msg: "Usuario nao encontrado, verifiquei as credencias",
      });
    }
  },
  async logout(request, response) {
    const sessionLogin = request.session;
    sessionLogin.destroy(function (err) {
        if (err) response.json({ "msg": "Erro ao destruir a Session" });
        response.json({"msg":"Logoff realizado"});
    });
}
};