import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AttendeeSignUp from '../Pages/AttendeeSignUp/AttendeeSignUp';
import Home from '../Pages/Home/Home';
import ResearcherSignUp from '../Pages/ResearcherSignUp/ResearcherSignUp';
import SignIn from '../Pages/SignIn/SignIn';
import WSConductorSignUp from '../Pages/WSConductorSignUp/WSConductorSignUp';

class RoutesComponent extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/attendeesignup" exact component={AttendeeSignUp} />
                    <Route path="/researchersignup" exact component={ResearcherSignUp} />
                    <Route path="/wsconductorsignup" exact component={WSConductorSignUp} />
                    <Route path="/signin" exact component={SignIn} />
                </Switch>
            </Router>
        )
    }
}

export default RoutesComponent
