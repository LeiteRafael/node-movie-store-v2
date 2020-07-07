const { Router } = require("express");
const MovieController = require("./controller/MovieController.js");
const UserController = require("./controller/UserController.js");
const RentController = require("./controller/RentController.js");

const routes = Router();

const midLogin = function (req, res, next) {
  sessionLogin = req.session;
  if (sessionLogin.user) {
    next();
  } else {
    return res.status(401).json({ msg: "Acesso restrito" });
  }
};

routes.post("/users", UserController.create);
routes.post('/users/login', UserController.login);
routes.get('/users/logout', UserController.logout);

routes.get("/movies/availables", midLogin, MovieController.availables);
routes.get("/movies/:idmovie/availables", midLogin, MovieController.copiesAvailable);
routes.get("/movies", midLogin, MovieController.find);
routes.get("/movies/title/:title", midLogin, MovieController.findByTitle);

routes.get('/rents', midLogin, RentController.findByUser);
routes.post('/rents',midLogin, RentController.rent);
routes.patch('/rents/:idrent/movie/:idmovie', midLogin, RentController.return);

module.exports = routes;
