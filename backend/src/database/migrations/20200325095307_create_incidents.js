exports.up = function(knex) {
  return knex.schema.createTable("incidents", function(table) {
    table.increments(); //Primary Key - Auto Increment

    table.string("title").notNullable(); //Título do Caso(incident), Não Nulo
    table.string("description").notNullable(); //Descrição do Caso(incident), Não Nulo
    table.decimal("value").notNullable(); //Whatsapp do Caso(incident), Não Nulo

    // Relacionamento
    table.string("ong_id").notNullable();

    // Chave Estrangeira
    table
      .foreign("ong_id")
      .references("id")
      .inTable("ongs");
  });
};

exports.down = function(knex) {
  knex.schema.dropTable("incidents");
};
