import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addNewTodo } from '../actions/todos'

function AddTodo (props) {
  const [newTodo, setNewTodo] = useState('')

  function handleChange (e) {
    const { value } = e.target
    setNewTodo(value)
  }
   console.log('new', newTodo)
  function handleSubmit (e) {
    e.preventDefault()
    props.dispatch(addNewTodo({ task: newTodo }))
    setNewTodo('')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={newTodo}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true} />
      </form>
    </>
  )
 }

 export default connect()(AddTodo)