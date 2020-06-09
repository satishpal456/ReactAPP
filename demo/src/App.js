import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Test from './components/test'
import Name from './components/name'
import Car from './components/car'
import Taco from './components/demo'
import Form from './components/form'
import NewForm from './components/Normal_form'
import MaterialForm from './components/material_ui'
import APICall from './components/ApiCall'
import Login from './components/login'
import SignUp from './components/signup'
import navabr from './components/navbar'
import ClippedDrawer from './components/sidebar'
import GetData  from './components/artistry_get'

import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch 
} from 'react-router-dom'; 


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/table" component={GetData}></Route>
        <Route path="/" exact component={navabr}></Route>
        <Route path="/sidebar" exact component={ClippedDrawer}></Route>
      <Route path="/about" component={Test}></Route>
      <Route path="/signup" component={SignUp}></Route>
        <Route path="/login" component={Login}></Route>
        </Switch>
        </Router>
           
    </div>

  );
}

export default App;
