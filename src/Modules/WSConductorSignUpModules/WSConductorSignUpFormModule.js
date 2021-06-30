import React, { Component } from 'react';
import axios from 'axios';


class WSConductorSignUpFormModule extends Component {

    constructor(props) {
        super(props);

        this.onValueChange = this.onValueChange.bind(this);
        this.onRegister = this.onRegister.bind(this);

        this.state = {
            role: "WSConductor",
            username: "",
            fname: "",
            lname: "",
            email: "",
            mobile: "",
            password: "",
            profile: "",
            author: "",
            topic: "",
            description: "",
            time: "",
            venue: "",
            file: ""
        }
    }

    onValueChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onRegister(e) {

        e.preventDefault();

        const user = {
            role,
            username: this.state.username,
            fname: this.state.fname,
            lname: this.state.lname,
            password: this.state.password,
            email: this.state.email,
            mobile: this.state.mobile,
            profile: this.state.profile,
        }

        axios.post('http://localhost:5000/api/user/', user)
            .then(res => console.log(res.data))
            .catch(e => console.log(e));

        const workshop = {
            author: this.state.username,
            topic: this.state.topic,
            description: this.state.description,
            time: this.state.time,
            venue: this.state.venue,
            file: this.state.file,
        }

        axios.post('http://localhost:5000/api/workshop/', workshop)
            .then(res => console.log(res.data))
            .catch(e => console.log(e));

        window.location = "./signin";
    }

    render() {
        return (
            <div>
                <div class="container shadow-lg p-2 mb-5 bg-body rounded my-4 w-75">
                    <div class="col-md-6 mx-auto text-start p-4 m-5">
                        <h1>Work Shop Conductor Sign Up</h1>
                        <form class="row g-3" onSubmit={this.onRegister}>
                            <div class="col-12">
                                <label for="username" class="form-label">Username</label>
                                <input type="text" class="form-control" id="username" name="username" value={this.state.username} onChange={(e) => { this.onValueChange(e); }} />
                            </div>
                            <div class="col-md-6">
                                <label for="fname" class="form-label">First Name</label>
                                <input type="text" class="form-control" id="fname" name="fname" value={this.state.fname} onChange={(e) => { this.onValueChange(e); }} />
                            </div>
                            <div class="col-md-6">
                                <label for="lname" class="form-label">Last Name</label>
                                <input type="password" class="form-control" id="lname" name="lname" value={this.state.lname} onChange={(e) => { this.onValueChange(e); }} />
                            </div>
                            <div class="col-md-6">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" name="email" value={this.state.email} onChange={(e) => { this.onValueChange(e); }} />
                            </div>
                            <div class="col-md-6">
                                <label for="mobile" class="form-label">Mobile</label>
                                <input type="text" class="form-control" id="mobile" name="mobile" value={this.state.mobile} onChange={(e) => { this.onValueChange(e); }} />
                            </div>
                            <div class="col-12">
                                <label for="profile" class="form-label">Upload Profile Picture</label>
                                <input type="file" accept="image/png" class="form-control" id="profile" name="profile" value={this.state.profile} onChange={(e) => { this.onValueChange(e); }} />
                            </div>
                            <div class="col-12">
                                <label for="topic" class="form-label">Workshop Topic</label>
                                <input type="text" class="form-control" id="topic" name="topic" value={this.state.topic} onChange={(e) => { this.onValueChange(e); }} />
                            </div>
                            <div class="col-md-6">
                                <label for="time" class="form-label">Time</label>
                                <input type="datetime" class="form-control" id="time" name="time" value={this.state.time} onChange={(e) => { this.onValueChange(e); }} />
                            </div>
                            <div class="col-md-6">
                                <label for="venue" class="form-label">Venue</label>
                                <input type="text" class="form-control" id="venue" name="venue" value={this.state.venue} onChange={(e) => { this.onValueChange(e); }} />
                            </div>
                            <div class="col-12">
                                <label for="description" class="form-label">Workshop Description</label>
                                <textarea type="text" class="form-control" id="description" name="description" value={this.state.description} onChange={(e) => { this.onValueChange(e); }} />
                            </div>
                            <div class="col-12">
                                <label for="file" class="form-label">Upload Proposal</label>
                                <input type="file" accept="application/PDF" class="form-control" id="file" name="file" value={this.state.file} onChange={(e) => { this.onValueChange(e); }} />
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default WSConductorSignUpFormModule
