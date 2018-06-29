// eslint-disable-next-line
import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './Components/DashBoard/Dashboard';
import Explore from './Components/Explore/Explore';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import './App.css';
import withAuthentication from './withAuthentication';

const App = () => {
    return(
      <div className="App">
     
       <HashRouter>
         <Switch>
           <Route path='/' component={Login} exact/>
           <Route path='/dashboard' component={Dashboard}/>
           <Route path='/explore' component={Explore}/>
           <Route path='/profile/:username' component={Profile}/>
         </Switch>
       </HashRouter>
     
      </div>
    )
};

export default withAuthentication(App);
