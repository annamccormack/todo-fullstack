const connection = require('./connection')


module.exports = {
  listTasks,
  addTask,
  updateTask,
  deleteTask
}

function listTasks (db = connection) {
  return db('tasks')
    .select()
}

function addTask(newTask, db = connection) {
  const { task } = newTask
  return db('tasks')
    .insert({ task, completed: false })
    .then((ids) => {
      return {
        id: ids[0],
        task,
        completed: false
      }
    })
}

function updateTask (update, db = connection) {
  const { id, task, completed } = update
  return db('tasks')
    .select()
    .where('id', id)
    .first()
    .update(
      {
        task,
        completed
      }
    )
    .then((ids) => {
      return {
        id,
        task,
        completed
      }
    })
}

function deleteTask (id, db = connection) {
  return db('tasks')
  .where('id', id)
  .del()
}