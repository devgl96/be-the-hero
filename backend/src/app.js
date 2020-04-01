const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");
const routes = require("./routes");

// Instanciando o Express
const app = express();

// Módulo de Segurança para dá permissão pra quem quer acessar a aplicação - Em desenvolvimento
app.use(cors());

// Em Produção
/**
 * app.use(cors({
 *  origin: 'http://meuapp.com',
 * }));
 */

// Utilizando JSON para as requisições
app.use(express.json());
app.use(routes);
app.use(errors());

//app.listen(3333);
module.exports = app;
