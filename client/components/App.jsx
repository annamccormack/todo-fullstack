
import React from 'react'
import Todo from './Todo'

class App extends React.Component {
  componentDidMount () {}

  render () {
    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <Todo />
        </header>
        <section className="main"></section>
        <footer className="footer"></footer>
      </>
    )
  }
}

export default App