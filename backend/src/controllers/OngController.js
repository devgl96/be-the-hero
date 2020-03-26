const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  // Listagem das Ongs
  async index(request, response) {
    const ongs = await connection("ongs").select("*");

    return response.json(ongs);
  },

  // Criação de Ongs
  async create(request, response) {
    //const params = request.query; // Query Params => http://localhost:3333/users?name=Diego&idade=25 | Método GET
    //const params = request.params; // Route Params => http://localhost:3333/users/1 | Método POST
    //const body = request.body; // Request Body => http://localhost:3333/users | Método POST

    const { name, email, whatsapp, city, uf } = request.body; // Desestruturar

    const id = crypto.randomBytes(4).toString("HEX"); // Id Gerada

    //Conectar e Inserir dados na tabela criada -> await é utilizado, pois pode demorar para inserir os dados
    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return response.json({ id });
  }
};
