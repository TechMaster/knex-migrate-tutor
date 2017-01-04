## Knex Migrate to postgresql tutorial

[Please see KnexMigrateTutor.pdf for detail](KnexMigrateTutor.pdf)

### To run this tutorial

```
git clone https://github.com/TechMaster/knex-migrate-tutor.git
cd knex-migrate-tutor
npm install
npm install -g knex-migrate
```
Edit knexfile.js to point to your postgresql database, then start to migrate and pour sample data.
```
knex-migrate up
knex seed:run
```

Use PGAdmin or pgcli to query data

Written by Trinh Minh Cuong, cuong@techmaster.vn
