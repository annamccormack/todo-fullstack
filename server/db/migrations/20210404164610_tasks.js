exports.up = (knex) => {
  return knex.schema.createTable('tasks', table => {
    table.increments('id')
    table.string('task')
    table.boolean('completed')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('tasks')
}