const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  // Executar antes de cada teste
  beforeEach(async () => {
    //Zerar o banco de dados
    await connection.migrate.rollback();
    // Criar a migrate
    await connection.migrate.latest();
  });

  // Executar depois de todos os testes
  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        name: "APAD2",
        email: "contato@teste.com",
        whatsapp: "4700000000",
        city: "Rio do Sul",
        uf: "SC"
      });

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
