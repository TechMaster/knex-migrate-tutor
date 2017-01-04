
//We use https://www.npmjs.com/package/knex-seed-file to import CSV file
const path = require('path');
const seedFile = require('knex-seed-file');

exports.seed = function(knex, Promise) {
  return Promise.join(
      knex('blog.student').del(),
      seedFile(knex, path.resolve('./seeds/student.csv'), 'blog.student', [
      'name',
      'status',
      'class'
    ], {
      columnSeparator: ',',
      ignoreFirstLine: true
    })
  );
};
