import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {AuthProvider} from "./Auth";
import PrivateRoute from "./PrivateRoute";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import ResetPass from "./components/ResetPass";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/sign-in" component={LogIn}/>
                        <Route exact path="/sign-up" component={SignUp}/>
                        <Route exact path="/reset-pass" component={ResetPass}/>
                        <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

export default App;
