import React, { Component } from 'react';

class ResearcherSignUpFormModule extends Component {
    render() {
        return (
            <div>
                <div class="col-5 mx-auto text-start p-4 m-5">
                    <h1>Researcher Sign Up</h1>
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
                            <label for="researchpapertopic" class="form-label">Research Paper Topic</label>
                            <input type="text" class="form-control" id="researchpapertopic" name="researchpapertopic" />
                        </div>
                        <div class="col-12">
                            <label for="researchpaperdescription" class="form-label">Research Paper Description</label>
                            <textarea type="text" class="form-control" id="researchpaperdescription" name="researchpaperdescription" />
                        </div>
                        <div class="col-12">
                            <label for="researchpaper" class="form-label">Upload Paper</label>
                            <input type="file" accept="application/PDF" class="form-control" id="researchpaper" name="researchpaper" />
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

export default ResearcherSignUpFormModule
