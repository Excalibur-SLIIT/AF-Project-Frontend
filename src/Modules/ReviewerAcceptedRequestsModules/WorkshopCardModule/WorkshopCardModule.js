import React, { Component } from 'react'

class WorkshopCardModule extends Component {
    render() {
        return (
            <div class="row">
                <div class="card shadow-sm p-4 mb-5 bg-body rounded my-3 mx-3" style={{ width: "20rem" }}>
                    <div class="card-body text-center">
                        <h5 class="card-title">Workshop Topic</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Conductor Name</h6>
                        <p class="card-text">Description</p>
                        <button class="btn btn-primary mb-3" type="button">Download Proposal</button>
                        <br />
                        <button type="button" class="btn btn-outline-danger mx-auto">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkshopCardModule
