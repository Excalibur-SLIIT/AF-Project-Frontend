import React, { Component } from 'react'

export default class Editorfunction extends Component {
    render() {
        return (
            <div>
                <div class="container shadow p-5 mb-5 bg-body rounded w-75 mx-auto my-3">
                    <div class="col-md-6 mx-auto" >
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="createeditortab" data-bs-toggle="tab" data-bs-target="#createeditor" type="button" role="tab" aria-controls="createeditor" aria-selected="true">Create Editor</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="updateEditortab" data-bs-toggle="tab" data-bs-target="#updateEditor" type="button" role="tab" aria-controls="updateEditor" aria-selected="false">Update Editor</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="deleteEditortab" data-bs-toggle="tab" data-bs-target="#deleteEditor" type="button" role="tab" aria-controls="deleteEditor" aria-selected="false">Delete Editor</button>
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
                            <div class="tab-pane fade" id="updateEditor" role="tabpanel" aria-labelledby="updateEditortab">
                                <div class="text-start">
                                    <h1>Update Editor</h1>
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
                            <div class="tab-pane fade" id="deleteEditor" role="tabpanel" aria-labelledby="deleteEditortab">
                                <div class="text-start">
                                    <h1>Delete Editor</h1>
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
            </div>
        )
    }
}
