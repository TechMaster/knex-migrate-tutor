
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blog.category').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('blog.category').insert({title: 'iOS'}),
        knex('blog.category').insert({title: 'Linux'}),
        knex('blog.category').insert({title: 'PHP'}),
        knex('blog.category').insert({title: 'Node.js'}),
        knex('blog.category').insert({title: 'Laravel'}),
        knex('blog.category').insert({title: 'Python'}),
        knex('blog.category').insert({title: 'Android'}),
        knex('blog.category').insert({title: 'Docker'})
      ]);
    });
};
