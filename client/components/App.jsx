
import React from 'react'
import { Route } from 'react-router-dom'

import Main from './Main'

function App () {

    return (
       <>
      <Route
        path='/:filter?'
        render={(routeProps) => {
          const filter = routeProps.match.params.filter
          // console.log('filter', filter)
          return (
            <>
              <Main filter={filter}/>
            </>
          )
        }}
      />
    </>
    )
}

export default App