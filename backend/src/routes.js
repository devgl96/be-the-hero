const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

// Login Ong
routes.post("/sessions", SessionController.create);

// Listar Ongs
routes.get("/ongs", OngController.index);

// Cadastrar Ongs
routes.post("/ongs", OngController.create);

// Listar Caso Específico
routes.get("/profile", ProfileController.index);

// Listar Casos
routes.get("/incidents", IncidentController.index);

// Cadastrar Casos
routes.post("/incidents", IncidentController.create);

// Deletar Caso
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
