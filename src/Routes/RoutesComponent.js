import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AttendeeSignUp from '../Pages/AttendeeSignUp/AttendeeSignUp';
import Home from '../Pages/Home/Home';

class RoutesComponent extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/attendeesignup" exact component={AttendeeSignUp} />
                </Switch>
            </Router>
        )
    }
}

export default RoutesComponent
