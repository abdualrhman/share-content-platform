exports.up = function(knex, Promise) {
  return knex.schema.createTable('items',
       function (t) {
          t.increments('id').unsigned().primary();
          t.string('title', 500).notNull();
          t.string('description', 2500);
          t.string('link').notNull();
          t.integer('rate_up', 10).defaultTo(0)
          t.integer('rate_down', 10).defaultTo(0);
          t.integer('category_id').unsigned()
          t.foreign('category_id').references('category.id')
          t.integer('type_id').unsigned()
          t.foreign('type_id').references('type.id')
          t.integer('difficulty_id').unsigned()
          t.foreign('difficulty_id').references('difficulty.id')
      });
};

exports.down = function(knex, Promise) {
  return knex.dropTable('items');
};
