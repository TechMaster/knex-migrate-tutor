
exports.up = function(knex, Promise) {
  //Create 3 tables in schema 'blog'
  return Promise.all([
    knex.schema.withSchema('blog').createTable('post', function(table){
      table.bigInteger('id').primary().defaultTo(knex.raw('util.id_generator()'));
      table.text('title').comment("You can comment a column");
      table.specificType('authors', knex.raw('text[]'));
      table.comment('All posts will store here');
    }),

    knex.schema.withSchema('blog').createTable('category', function(table){
      table.bigInteger('id').primary().defaultTo(knex.raw('util.id_generator()'));
      table.text('title');
      table.comment('Category blog post');
    }),

    knex.schema.withSchema('blog').createTable('category_post', function(table){
      table.bigInteger('id').primary().defaultTo(knex.raw('util.id_generator()'));
      table.bigInteger('post_id').references('id').inTable('blog.post');
      table.bigInteger('category_id').references('id').inTable('blog.category');
      table.unique(['post_id', 'category_id']);
      table.comment('Intersection table')
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.withSchema('blog').dropTable('category_post'),
    knex.schema.withSchema('blog').dropTable('post'),
    knex.schema.withSchema('blog').dropTable('category')
  ]);
};
