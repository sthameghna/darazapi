exports.up =async function(knex, Promise) {
    await knex.schema.hasTable('users');
    return await knex.schema.createTable('users', table=>{
        table.increments('userid');
        table.string('fullname');
        table.string('email').unique();
        table.string('password');
        table.string('smsCode');
        table.string('phone');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
