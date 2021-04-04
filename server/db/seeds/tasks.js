exports.seed = function (knex) {
  return knex('tasks').del()
    .then(function () {
      return knex('tasks').insert([
        { id: 1, task: 'Build the migrations and seed data', completed: false },
        { id: 2, task: 'Build an API', completed: false },
        { id: 3, task: 'Test your API with Insomnia', completed: false },
        { id: 4, task: 'Build Build react components', completed: false },
        { id: 5, task: 'design redux global state', completed: false },
        { id: 6, task: 'Build redux reducers', completed: false },
        { id: 7, task: 'Build API client', completed: false },
        { id: 8, task: 'Build thunk actions', completed: false },
        { id: 9, task: 'Build redux actions', completed: false }
      ])
    })
}