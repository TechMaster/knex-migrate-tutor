
exports.up = function(knex, Promise) {
  return Promise.all([
    //Khi dùng raw query thì lệnh withSchema không còn ý nghĩa nữa, phải ghi rõ blog.person_status
    knex.schema.raw("CREATE TYPE blog.person_status AS ENUM ('create', 'pending', 'processed')"),

    knex.schema.withSchema('blog').createTable('person', function(table){
      table.bigInteger('id').primary().defaultTo(knex.raw('util.id_generator()'));
      table.text('name').comment("person name");
      //table.enum('status', ['create', 'pending', 'processed']);  //traditional way
      table.specificType('status', 'blog.person_status')
      table.comment('base table');
    }),

    knex.schema.withSchema('blog').createTable('student', function(table){
      table.inherits('blog.person');
      table.text('class').comment("student class");
      table.comment('inherit table');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.withSchema('blog').dropTable('student'),
    knex.schema.withSchema('blog').dropTable('person'),
    knex.schema.raw("DROP TYPE blog.person_status")
  ]);
};
