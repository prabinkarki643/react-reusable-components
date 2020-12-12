
import React from 'react'
import {Switch,Route, Redirect } from 'react-router-dom'
import TestPage from '../pages/TestPage'

const Routes = () => {
    return (
      <Switch>
        <Redirect from="/" to="/test" exact/>
        <Route path="/test" component={TestPage}/>
        <Redirect to="/"/>
      </Switch>
    )
}

export default Routes
