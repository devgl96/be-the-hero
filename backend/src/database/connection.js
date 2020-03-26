const knex = require("knex");
const configuration = require("../../knexfile");

const connection = knex(configuration.development); //Conexão de Desenvolvimento (Development)

module.exports = connection;
