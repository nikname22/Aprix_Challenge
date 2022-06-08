const { Router } = require('express');

const apiController = require('./Controllers/apiController.js');

const routes = new Router();

routes.get("/hello_world", apiController.helloMessage);
routes.post("/distinct", apiController.findRepeated);

module.exports = routes;