import React from 'react'

function Todo (props) {
  const { todo } = props
    return (
    <li>
      <div className="view">
        {/* <input className="toggle" type="checkbox" onClick={toggleCompleted} defaultChecked={checked} /> */}
        <label>{todo.task}</label>
        {/* <button className="destroy" onClick={handleDelete}></button> */}
      </div>
    </li>
  )
}

export default Todo