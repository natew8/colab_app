import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import Error from './Components/Error'
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'
import Profile from './Components/Profile/Profile'
import Lab from './Components/Lab/Lab'

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/user/profile/lab/:id' component={Lab} />
        <Route path='/user/profile' component={Profile} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route component={Error} />
    </Switch>


)