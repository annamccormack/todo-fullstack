import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '../actions/todos'

import Header from './Header'
import ListTodos from './ListTodos'
import Footer from './Footer'

function Main(props) {
  const { filter, todos } = props
  let tasks = todos
  console.log(tasks)


  if (filter) { tasks = todos.filter(todo => (filter === 'active' && !todo.completed) || (filter === 'completed' && todo.completed)) }

  useEffect(() => {
    props.dispatch(fetchTodos())
  }, [])

  return (
    <>
      <Header />
      <section className="main">
        <ListTodos todos={tasks} />
      </section>
      <Footer filter={filter} />
    </>
  )
}

function mapStateToProps (state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(Main)