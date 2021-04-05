import request from 'superagent'
const apiUrl = 'api/v1/todos'

// getTodos
export function getTodos () {
  return request.get(apiUrl)  
  .then(res => res.body}
}
// addTodos
export function addTodos () {
  return request.post(apiUrl)
  .send(newTask)
  .then(res => res.body)
}
// updateTodos
export function updateTask (update) {
  return request.patch(apiUrl)
    .send(update)
    .then(res => res.body)
}
// deleteTodos
export function deleteTask (id) {
  return request.del(apiUrl)
    .send({ id })
}
