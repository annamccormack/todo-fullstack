import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updatedTodo } from '../actions/todos'

function Todo (props) {
  const { dispatch, todo } = props
  const { task, id, completed } = todo

  const initialStatus = !completed ? 'edit' : 'completed'
  const [status, setStatus] = useState(initialStatus)

  const [checked, setChecked] = useState(completed)

  function toggleCompleted () {
    const setCompleted = !completed
    setChecked(!checked)
    dispatch(updatedTodo({
      id,
      completed: setCompleted
    }))
    setCompleted === true ? setStatus('completed') : setStatus('edit')
  }
  
    return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={toggleCompleted} defaultChecked={checked} />
        <label>{todo.task}</label>
        {/* <button className="destroy" onClick={handleDelete}></button> */}
      </div>
    </li>
  )
}

export default connect()(Todo)