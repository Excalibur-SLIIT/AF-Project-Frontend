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
import ReviewerAcceptedRequests from '../Pages/ReviewerAcceptedRequests/ReviewerAcceptedRequests';
import Workshop from '../Pages/Workshop/Workshop';
import ResearchPaper from '../Pages/ResearchPaper/ResearchPaper';
import AdminEditor from  '../Pages/AdminPages/EditorAdmin'
import AdminReviewer from '../Pages/AdminPages/ReviewerAdmin'

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
                    <Route path="/admin/Editor" exact component={AdminEditor} />
                    <Route path="/admin/Reviewer" exact component={AdminReviewer} />
                    <Route path="/createsystemmanager" exact component={CreateSystemManagers} />
                    <Route path="/addevent" exact component={AddEvent} />
                    <Route path="/eventdetails" exact component={EventDetails} />
                    <Route path="/editevent" exact component={EditEvent} />
                    <Route path="/reviewer/pendingrequests" exact component={ReviewerPendingRequests} />
                    <Route path="/reviewer/acceptedrequests" exact component={ReviewerAcceptedRequests} />
                    <Route path="/workshop" exact component={Workshop} />
                    <Route path="/researchpaper" exact component={ResearchPaper} />
                </Switch>
            </Router>
        )
    }
}

export default RoutesComponent
