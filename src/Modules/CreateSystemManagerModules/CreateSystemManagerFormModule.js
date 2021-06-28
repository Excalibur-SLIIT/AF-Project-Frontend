import React, { Component } from 'react';

class CreateSystemManagerFormModule extends Component {
    render() {
        return (
            <div>
                <div class="col-5 mx-auto" >
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="createeditortab" data-bs-toggle="tab" data-bs-target="#createeditor" type="button" role="tab" aria-controls="createeditor" aria-selected="true">Create Editor</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="createreviwertab" data-bs-toggle="tab" data-bs-target="#createreviwer" type="button" role="tab" aria-controls="createreviwer" aria-selected="false">Create Reviwer</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="createeditor" role="tabpanel" aria-labelledby="createeditortab">
                            <div class="text-start">
                                <h1>Create Editor</h1>
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
                        <div class="tab-pane fade" id="createreviwer" role="tabpanel" aria-labelledby="createreviwertab">
                            <div class="text-start">
                                <h1>Create Reviwer</h1>
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
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateSystemManagerFormModule
