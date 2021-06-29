import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AttendeeSignUp from '../Pages/AttendeeSignUp/AttendeeSignUp';
import Home from '../Pages/Home/Home';
import ResearcherSignUp from '../Pages/ResearcherSignUp/ResearcherSignUp';
import SignIn from '../Pages/SignIn/SignIn';
import WSConductorSignUp from '../Pages/WSConductorSignUp/WSConductorSignUp';
import AdminDashBoard from '../Pages/AdminPages/dashboardPage'
import CreateSystemManagers from '../Pages/CreateSystemManagers/CreateSystemManagers';
import AddEvent from '../Pages/EditorPages/AddEvent';
import EventDetails from '../Pages/EditorPages/EventDetails';
import EditEvent from '../Pages/EditorPages/EditEvent';
import ReviewerPendingRequests from '../Pages/ReviewerPendingRequests/ReviewerPendingRequests';

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
                    <Route path="/admin/dashboard" exact component={AdminDashBoard} />
                    <Route path="/createsystemmanager" exact component={CreateSystemManagers} />
                    <Route path="/addevent" exact component={AddEvent} />
                    <Route path="/eventdetails" exact component={EventDetails} />
                    <Route path="/editevent" exact component={EditEvent} />
                    <Route path="/reviewer/pendingrequests" exact component={ReviewerPendingRequests} />
                </Switch>
            </Router>
        )
    }
}

export default RoutesComponent
