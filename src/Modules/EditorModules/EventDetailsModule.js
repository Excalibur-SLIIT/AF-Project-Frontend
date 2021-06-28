import React, { Component } from 'react'

export class EventDetailsModule extends Component {
    render() {
        return (
            <div>
                <div class="container shadow-lg p-3 mb-5 bg-body rounded w-75 my-3">
                    <table class="table table-hover">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col-md-4">#</th>
                                <th scope="col-md-6">Event Name</th>
                                <th scope="col-md-4">Speaker</th>
                                <th scope="col-md-12">Time</th>
                                <th scope="col-md-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Accept</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Accept</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Accept</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Accept</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Decline</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Accept</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default EventDetailsModule
