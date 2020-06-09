import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
 const navabr = ()=>{
    {
        return (<div>
            <br />
            <ul>
            <Link to="/login"><li>Login</li></Link>
            <Link to="/signup"><li>Signup</li></Link>
            <Link to="/about"> <li>About</li></Link>
            </ul>
        </div>)
    }
}
export default navabr;