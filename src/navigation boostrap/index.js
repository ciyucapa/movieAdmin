import React from 'react'
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom'
import NavbarBoo from "../ component boostrap/common boostrap/navbar";
import LoginBoo from "../scenes boostrap/auth boostrap/login boostrap";
import RegisterBoo from "../scenes boostrap/auth boostrap/register boostrap";

const NavigationBoo = () => {
    return(
    <Router>
        <NavbarBoo/>
        <Switch>
            <Route path="/" exact>
                <LoginBoo />
            </Route>
            <Route path="/register">
                <RegisterBoo />
            </Route>
        </Switch>
    </Router>
    )
};

export default NavigationBoo;