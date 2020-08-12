import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import LoginNav from "../scenes/auth/login";
import RegisterNav from "../scenes/auth/register/register";
import NavBar from "../component/commons/NavBar";

const Navigation = () => {

    return(
        <Router>
            <NavBar/>
                <Switch>
                    <Route path="/" exact>
                        <LoginNav />
                    </Route>
                    <Route path="/register">
                        <RegisterNav />
                    </Route>
                </Switch>
        </Router>
    );
};

export default Navigation;
