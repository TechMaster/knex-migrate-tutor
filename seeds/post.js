
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blog.post').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('blog.post').insert({title: 'iOS is fun', authors: '{"Steve Jobs", "Plant", "Jones", "Bonham"}'}),
        knex('blog.post').insert({title: 'Linux is cool', authors: '{"Linux Torvalds", "Plant", "Jones", "Bonham"}'})
      ]);
    });
};
