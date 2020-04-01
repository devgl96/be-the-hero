const knex = require("knex");
const configuration = require("../../knexfile");

const config =
  process.env.NODE_ENV === "test"
    ? configuration.test
    : configuration.development; //Variáveis Ambientes

const connection = knex(config); //Conexão de Desenvolvimento (Development)

module.exports = connection;
