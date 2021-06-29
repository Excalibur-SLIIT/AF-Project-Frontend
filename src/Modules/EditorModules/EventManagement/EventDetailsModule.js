import React, { Component } from 'react'

export class EventDetailsModule extends Component {
    render() {
        return (
            <div>
                <div class="container shadow-lg p-3 mb-5 bg-body rounded w-75 my-3">
                    <table class="table table-hover">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col" class="col-md-1 p-3">#</th>
                                <th scope="col" class="col-md-2 p-3">Event Name</th>
                                <th scope="col" class="col-md-2 p-3">Speaker</th>
                                <th scope="col" class="col-md-2 p-3">Time</th>
                                <th scope="col" class="col-md-3 p-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>
                                    <button type="button" class="btn btn-success mx-1">Accept</button>
                                    <button type="button" class="btn btn-warning mx-1">Edit</button>
                                    <button type="button" class="btn btn-danger mx-1">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>
                                    <button type="button" class="btn btn-success mx-1">Accept</button>
                                    <button type="button" class="btn btn-warning mx-1">Edit</button>
                                    <button type="button" class="btn btn-danger mx-1">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>
                                    <button type="button" class="btn btn-success mx-1">Accept</button>
                                    <button type="button" class="btn btn-warning mx-1">Edit</button>
                                    <button type="button" class="btn btn-danger mx-1">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>
                                    <button type="button" class="btn btn-success mx-1">Accept</button>
                                    <button type="button" class="btn btn-warning mx-1">Edit</button>
                                    <button type="button" class="btn btn-danger mx-1">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>
                                    <button type="button" class="btn btn-success mx-1">Accept</button>
                                    <button type="button" class="btn btn-warning mx-1">Edit</button>
                                    <button type="button" class="btn btn-danger mx-1">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>
                                    <button type="button" class="btn btn-success mx-1">Accept</button>
                                    <button type="button" class="btn btn-warning mx-1">Edit</button>
                                    <button type="button" class="btn btn-danger mx-1">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>
                                    <button type="button" class="btn btn-success mx-1">Accept</button>
                                    <button type="button" class="btn btn-warning mx-1">Edit</button>
                                    <button type="button" class="btn btn-danger mx-1">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default EventDetailsModule
