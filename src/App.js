import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { withAuthentication } from './components/Authentication'
import Routes from './routes'

 const App = () => {
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  )
}

export default App