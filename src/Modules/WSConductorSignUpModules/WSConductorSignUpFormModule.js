import React, { Component } from 'react'

class WSConductorSignUpFormModule extends Component {
    render() {
        return (
            <div>
                <div class="col-5 mx-auto text-start p-4">
                    <h1>Work Shop Conductor Sign Up</h1>
                    <form class="row g-3">
                        <div class="col-12">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" id="username" name="username" />
                        </div>
                        <div class="col-md-6">
                            <label for="fname" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="fname" name="fname" />
                        </div>
                        <div class="col-md-6">
                            <label for="lname" class="form-label">Last Name</label>
                            <input type="password" class="form-control" id="lname" name="lname" />
                        </div>
                        <div class="col-md-6">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" name="email" />
                        </div>
                        <div class="col-md-6">
                            <label for="mobile" class="form-label">Mobile</label>
                            <input type="text" class="form-control" id="mobile" name="mobile" />
                        </div>
                        <div class="col-12">
                            <label for="workshoptopic" class="form-label">Workshop Topic</label>
                            <input type="text" class="form-control" id="workshoptopic" name="workshoptopic" />
                        </div>
                        <div class="col-12">
                            <label for="workshopdescription" class="form-label">Workshop Description</label>
                            <textarea type="text" class="form-control" id="workshopdescription" name="workshopdescription" />
                        </div>
                        <div class="col-12">
                            <label for="workshopproposal" class="form-label">Upload Proposal</label>
                            <input type="file" accept="application/PDF" class="form-control" id="workshopproposal" name="workshopproposal" />
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default WSConductorSignUpFormModule
