exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.string('vin').notNullable().unique();
    tbl.string('make').notNullable();
    tbl.string('model').notNullable();
    tbl.integer('mileage').notNullable();
    tbl.string('title').notNullable();
    tbl.string('transmission').notNullable();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};
