import React from 'react'

function Footer (props) {
  return (
    <footer className="footer">
      <ul className="filters">
        <li>
          <a className="selected" href="#/">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer