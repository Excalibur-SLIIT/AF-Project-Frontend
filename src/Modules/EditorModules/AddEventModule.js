import React, { Component } from 'react'

export class AddEventModule extends Component {
    render() {
        return (
            <div>
                <div class="container shadow-lg p-3 mb-5 bg-body rounded w-75 my-3">
                    <div class="col-md-6 mx-auto text-start p-4 m-5">
                        <h1><b>Add New Event</b></h1>
                        <form class="row g-3">
                            <div class="col-12">
                                <label for="username" class="form-label">Event Name</label>
                                <input type="text" class="form-control" id="username" name="username" />
                            </div>
                            <div class="col-md-6">
                                <label for="fname" class="form-label">Speaker First Name</label>
                                <input type="text" class="form-control" id="fname" name="fname" />
                            </div>
                            <div class="col-md-6">
                                <label for="lname" class="form-label">Speaker Last Name</label>
                                <input type="password" class="form-control" id="lname" name="lname" />
                            </div>
                            <div class="col-12">
                                <label for="researchpapertopic" class="form-label">Event Topic</label>
                                <input type="text" class="form-control" id="researchpapertopic" name="researchpapertopic" />
                            </div>
                            <div class="col-12">
                                <label for="researchpaperdescription" class="form-label">Event Description</label>
                                <textarea type="text" class="form-control" id="researchpaperdescription" name="researchpaperdescription" />
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddEventModule
