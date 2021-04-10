import React from 'react'
import Todo from './Todo'

function ListTodos (props) {
  const { todos } = props
  return (
      <ul className="todo-list">
        {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo}/>
        })
      }
      </ul>
  )
}

export default ListTodos