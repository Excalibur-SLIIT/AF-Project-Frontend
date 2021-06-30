import React, { Component } from 'react'

export default class Researcherfunction extends Component {
    render() {
        return (
            <div>
                <div class="container shadow p-5 mb-5 bg-body rounded w-75 mx-auto my-3">
                    <div class="col-md-6 mx-auto" >
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="createresearchertab" data-bs-toggle="tab" data-bs-target="#createresearcher" type="button" role="tab" aria-controls="createresearcher" aria-selected="true">Create Researcher</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="updateResearchertab" data-bs-toggle="tab" data-bs-target="#updateResearcher" type="button" role="tab" aria-controls="updateResearcher" aria-selected="false">Update Researcher</button>
                            </li>
                            
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="createresearcher" role="tabpanel" aria-labelledby="createresearchertab">
                                <div class="text-start">
                                    <h1>Create Researcher</h1>
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
                                            <button type="submit" class="btn btn-primary">Create</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="updateResearcher" role="tabpanel" aria-labelledby="updateResearchertab">
                                <div class="text-start">
                                    <h1>Update Researcher</h1>
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
                                            <button type="submit" class="btn btn-primary">update</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
