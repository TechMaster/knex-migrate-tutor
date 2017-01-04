
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blog.person').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('blog.person').insert({name: 'John Harvard', status: 'create'}),
        knex('blog.person').insert({name: 'Ben Johnson', status: 'pending'}),
        knex('blog.person').insert({name: 'Bill Clinton', status: 'processed'}),
        //hood is not item in blog.person_status
        //knex('blog.person').insert({name: 'Jake Candy', status: 'hood'})
      ]);
    });
};
