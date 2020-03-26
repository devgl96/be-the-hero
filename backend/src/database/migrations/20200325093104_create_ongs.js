exports.up = function(knex) {
  return knex.schema.createTable("ongs", function(table) {
    table.string("id").primary(); //Primary Key - Create by myself
    table.string("name").notNullable(); //Nome da ONG, Não Nulo
    table.string("email").notNullable(); //Email da ONG, Não Nulo
    table.string("whatsapp").notNullable(); //Whatsapp da ONG, Não Nulo
    table.string("city").notNullable(); //Cidade da ONG, Não Nulo
    table.string("uf", 2).notNullable(); //UF da ONG, Não Nulo
  });
};

exports.down = function(knex) {
  knex.schema.dropTable("ongs");
};
