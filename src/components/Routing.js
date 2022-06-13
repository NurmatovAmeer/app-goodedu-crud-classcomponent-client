import React from 'react';
import NavBar from "./navigationBar/NavBar";
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import Levels from "../pages/Levels";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Words from "../pages/Words";
import Support from "../pages/Support";


const Routing = () => {
    return (
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/users" exact component={Users}/>
                    <Route path="/levels" exact component={Levels}/>
                    <Route path="/words" exact component={Words}/>
                    <Route path="/support" exact component={Support}/>
                </Switch>
            </BrowserRouter>
    );
};

export default Routing;