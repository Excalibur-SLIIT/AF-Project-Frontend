import React, { Component } from 'react'

export default class Attendeefunction extends Component {
    render() {
        return (
            <div>
                <div class="container shadow p-5 mb-5 bg-body rounded w-75 mx-auto my-3">
                    <div class="col-md-6 mx-auto" >
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="createattendeetab" data-bs-toggle="tab" data-bs-target="#createattendee" type="button" role="tab" aria-controls="createattendee" aria-selected="true">Create Attendee</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="updateAttendeetab" data-bs-toggle="tab" data-bs-target="#updateAttendee" type="button" role="tab" aria-controls="updateAttendee" aria-selected="false">Update Attendee</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="createattendee" role="tabpanel" aria-labelledby="createattendeetab">
                                <div class="text-start">
                                    <h1>Create Attendee</h1>
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


                            <div class="tab-pane fade" id="updateAttendee" role="tabpanel" aria-labelledby="updateAttendeetab">
                                <div class="text-start">
                                    <h1>Update Attendee</h1>
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
                                            <button type="submit" class="btn btn-primary">Update</button>
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
