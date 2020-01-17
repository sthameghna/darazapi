exports.up =async function(knex, Promise) {
    await knex.schema.hasTable('products');
    return await knex.schema.createTable('products', table=>{
        table.increments('productid');
        table.string('imgName');
        table.string('ProductName');
        table.string('price');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products')
};
