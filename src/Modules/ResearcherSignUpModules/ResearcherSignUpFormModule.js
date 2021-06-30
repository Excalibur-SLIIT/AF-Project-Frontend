import React, { Component } from 'react';
import axios from 'axios';

class ResearcherSignUpFormModule extends Component {
    constructor(props) {
        super(props);

        this.onValueChange = this.onValueChange.bind(this);
        this.onRegister = this.onRegister.bind(this);

        this.state = {
            role: "Researcher",
            username: "",
            fname: "",
            lname: "",
            email: "",
            mobile: "",
            password: "",
            topic: "",
            description: "",
            file: ""
        }
    }

    onValueChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onRegister =  (e) => {

        e.preventDefault();

        // const user = {
        //     role,
        //     username: this.state.username,
        //     fname: this.state.fname,
        //     lname: this.state.lname,
        //     password: this.state.password,
        //     email: this.state.email,
        //     mobile: this.state.mobile,
        //     profile: this.state.profile,
        // }

        // axios.post('http://localhost:5000/api/user/', user)
        //     .then(res => console.log(res.data))
        //     .catch(e => console.log(e));

        // const paper = {
        //     conductor: this.state.username,
        //     topic: this.state.topic,
        //     description: this.state.description,
        //     file: this.state.file,
        // }

        // axios.post('http://localhost:5000/api/researchpaper/', paper)
        //     .then(res => console.log(res.data))
        //     .catch(e => console.log(e));


        const user = new FormData();
        user.append("username",this.state.username);
        user.append("password",this.state.password);
        user.append("role",this.state.role);
        user.append("fname",this.state.fname);
        user.append("lname",this.state.lname);
        user.append("email",this.state.email);
        user.append("mobile",this.state.mobile);
        user.append("image", this.state.image);
        
        const userConfig = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        axios.post('http://localhost:5000/api/user/', user, userConfig)
            .then(res => {
                localStorage.setItem("x-auth-token", res.data.token)
            })
            .catch(e => console.log(e));


        const config = {
            headers: {
                "x-auth-token": localStorage.getItem("x-auth-token")
            }
        };

        const paper = {
            topic: this.state.topic,
            description: this.state.description,
            file: this.state.file,
        }

        axios.post('http://localhost:5000/api/research_paper/', paper, config)
            .then(res => {
                if (res.data.status == "successful") {
                    window.location = "./signin";
                } else {
                    alert(res.data.description);
                }
            })
            .catch(e => console.log(e));

    }

    onFileChange = (e) => {
        this.setState({ [e.target.name]: e.target.files[0] })
    };

    render() {
        return (
            <div>
                <div class="container shadow-lg p-3 mb-5 bg-body rounded w-75 my-3">
                    <div class="col-md-6 mx-auto text-start p-4 m-5">
                        <h1>Researcher Sign Up</h1>
                        <form class="row g-3" onSubmit={this.onRegister}>
                            <div class="col-12">
                                <label for="username" class="form-label">Username</label>
                                <input type="text" class="form-control" id="username" name="username" value={this.state.username} onChange={(e) => { this.onValueChange(e); }} />
                            </div>
                            <div class="col-12">
                                <label for="username" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" name="password" value={this.state.password} onChange={(e) => { this.onValueChange(e); }} />
                            </div>
                            <div class="col-md-6">
                                <label for="fname" class="form-label">First Name</label>
                                <input type="text" class="form-control" id="fname" name="fname" value={this.state.fname} onChange={(e) => { this.onValueChange(e); }} />
                            </div>
                            <div class="col-md-6">
                                <label for="lname" class="form-label">Last Name</label>
                                <input type="text" class="form-control" id="lname" name="lname" value={this.state.lname} onChange={(e) => { this.onValueChange(e); }} />
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
                                <input type="file" accept="image/png" class="form-control" id="image" name="image" onChange={(e) => { this.onFileChange(e); }} />
                            </div>
                            <div class="col-12">
                                <label for="topic" class="form-label">Research Paper Topic</label>
                                <input type="text" class="form-control" id="topic" name="topic" value={this.state.topic} onChange={(e) => { this.onValueChange(e); }} />
                            </div>
                            <div class="col-12">
                                <label for="description" class="form-label">Research Paper Description</label>
                                <textarea type="text" class="form-control" id="description" name="description" value={this.state.description} onChange={(e) => { this.onValueChange(e); }} />
                            </div>
                            <div class="col-12">
                                <label for="file" class="form-label">Upload Paper</label>
                                <input type="file" accept="application/PDF" class="form-control" id="file" name="file" onChange={(e) => { this.onFileChange(e); }} />
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

export default ResearcherSignUpFormModule
