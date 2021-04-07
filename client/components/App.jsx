
import React, { useEffect } from 'react'
import ListTodos from './ListTodos'
import { connect } from 'react-redux'
import { fetchTodos } from '../actions/todos'

function App (props) {
const { todos } = props
console.log(todos)
  useEffect(() => {
    props.dispatch(fetchTodos())
  }, [])

    return (
      <>
        <header className="header">
          <h1>Todos</h1>
        </header>
        <section className="main">
          <ListTodos todos={todos}/>
        </section>
        <footer className="footer"></footer>
      </>
    )
  }

function mapStateToProps (state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(App)