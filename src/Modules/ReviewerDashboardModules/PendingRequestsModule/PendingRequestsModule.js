import React, { Component } from 'react'

class PendingRequestsModule extends Component {
    render() {
        return (
            <div>
                <div class="shadow-lg p-3 mb-5 bg-body rounded my-3 mx-auto" style={{ width: "95%" }}>
                    <div class="mx-auto" >
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pendingresearchpapertab" data-bs-toggle="tab" data-bs-target="#pendingresearchpaper" type="button" role="tab" aria-controls="pendingresearchpaper" aria-selected="true">Research Papers</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pendingworkshoptab" data-bs-toggle="tab" data-bs-target="#pendingworkshop" type="button" role="tab" aria-controls="pendingworkshop" aria-selected="false">Workshops</button>
                            </li>
                        </ul>
                        {/* Research Paper Segment */}
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="pendingresearchpaper" role="tabpanel" aria-labelledby="pendingresearchpapertab">
                                <div class="row">
                                    <div class="card shadow-sm p-4 mb-5 bg-body rounded my-3 mx-3" style={{ width: "20rem" }}>
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Topic</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Author</h6>
                                            <p class="card-text">Description</p>
                                            <button class="btn btn-primary mb-3" type="button">Download Paper</button>
                                            <br />
                                            <button type="button" class="btn btn-outline-success mx-2">Accept</button>
                                            <button type="button" class="btn btn-outline-danger mx-2">Decline</button>
                                        </div>
                                    </div>
                                    <div class="card shadow-sm p-4 mb-5 bg-body rounded my-3 mx-3" style={{ width: "20rem" }}>
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Topic</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Author</h6>
                                            <p class="card-text">Description</p>
                                            <button class="btn btn-primary mb-3" type="button">Download Paper</button>
                                            <br />
                                            <button type="button" class="btn btn-outline-success mx-2">Accept</button>
                                            <button type="button" class="btn btn-outline-danger mx-2">Decline</button>
                                        </div>
                                    </div>
                                    <div class="card shadow-sm p-4 mb-5 bg-body rounded my-3 mx-3" style={{ width: "20rem" }}>
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Topic</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Author</h6>
                                            <p class="card-text">Description</p>
                                            <button class="btn btn-primary mb-3" type="button">Download Paper</button>
                                            <br />
                                            <button type="button" class="btn btn-outline-success mx-2">Accept</button>
                                            <button type="button" class="btn btn-outline-danger mx-2">Decline</button>
                                        </div>
                                    </div>
                                    <div class="card shadow-sm p-4 mb-5 bg-body rounded my-3 mx-3" style={{ width: "20rem" }}>
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Topic</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Author</h6>
                                            <p class="card-text">Description</p>
                                            <button class="btn btn-primary mb-3" type="button">Download Paper</button>
                                            <br />
                                            <button type="button" class="btn btn-outline-success mx-2">Accept</button>
                                            <button type="button" class="btn btn-outline-danger mx-2">Decline</button>
                                        </div>
                                    </div>
                                    <div class="card shadow-sm p-4 mb-5 bg-body rounded my-3 mx-3" style={{ width: "20rem" }}>
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Topic</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Author</h6>
                                            <p class="card-text">Description</p>
                                            <button class="btn btn-primary mb-3" type="button">Download Paper</button>
                                            <br />
                                            <button type="button" class="btn btn-outline-success mx-2">Accept</button>
                                            <button type="button" class="btn btn-outline-danger mx-2">Decline</button>
                                        </div>
                                    </div>
                                    <div class="card shadow-sm p-4 mb-5 bg-body rounded my-3 mx-3" style={{ width: "20rem" }}>
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Topic</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Author</h6>
                                            <p class="card-text">Description</p>
                                            <button class="btn btn-primary mb-3" type="button">Download Paper</button>
                                            <br />
                                            <button type="button" class="btn btn-outline-success mx-2">Accept</button>
                                            <button type="button" class="btn btn-outline-danger mx-2">Decline</button>
                                        </div>
                                    </div>
                                    <div class="card shadow-sm p-4 mb-5 bg-body rounded my-3 mx-3" style={{ width: "20rem" }}>
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Topic</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Author</h6>
                                            <p class="card-text">Description</p>
                                            <button class="btn btn-primary mb-3" type="button">Download Paper</button>
                                            <br />
                                            <button type="button" class="btn btn-outline-success mx-2">Accept</button>
                                            <button type="button" class="btn btn-outline-danger mx-2">Decline</button>
                                        </div>
                                    </div>
                                    <div class="card shadow-sm p-4 mb-5 bg-body rounded my-3 mx-3" style={{ width: "20rem" }}>
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Topic</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Author</h6>
                                            <p class="card-text">Description</p>
                                            <button class="btn btn-primary mb-3" type="button">Download Paper</button>
                                            <br />
                                            <button type="button" class="btn btn-outline-success mx-2">Accept</button>
                                            <button type="button" class="btn btn-outline-danger mx-2">Decline</button>
                                        </div>
                                    </div>
                                    <div class="card shadow-sm p-4 mb-5 bg-body rounded my-3 mx-3" style={{ width: "20rem" }}>
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Topic</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Author</h6>
                                            <p class="card-text">Description</p>
                                            <button class="btn btn-primary mb-3" type="button">Download Paper</button>
                                            <br />
                                            <button type="button" class="btn btn-outline-success mx-2">Accept</button>
                                            <button type="button" class="btn btn-outline-danger mx-2">Decline</button>
                                        </div>
                                    </div>
                                    <div class="card shadow-sm p-4 mb-5 bg-body rounded my-3 mx-3" style={{ width: "20rem" }}>
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Topic</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Author</h6>
                                            <p class="card-text">Description</p>
                                            <button class="btn btn-primary mb-3" type="button">Download Paper</button>
                                            <br />
                                            <button type="button" class="btn btn-outline-success mx-2">Accept</button>
                                            <button type="button" class="btn btn-outline-danger mx-2">Decline</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* WorkShop Section */}
                            <div class="tab-pane fade" id="pendingworkshop" role="tabpanel" aria-labelledby="pendingworkshoptab">
                                <div class="row">
                                    <div class="card shadow-sm p-4 mb-5 bg-body rounded my-3 mx-3" style={{ width: "20rem" }}>
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Workshop Topic</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Conductor Name</h6>
                                            <p class="card-text">Description</p>
                                            <button class="btn btn-primary mb-3" type="button">Download Proposal</button>
                                            <br />
                                            <button type="button" class="btn btn-outline-success mx-2">Accept</button>
                                            <button type="button" class="btn btn-outline-danger mx-2">Decline</button>
                                        </div>
                                    </div>
                                    <div class="card shadow-sm p-4 mb-5 bg-body rounded my-3 mx-3" style={{ width: "20rem" }}>
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Workshop Topic</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Conductor Name</h6>
                                            <p class="card-text">Description</p>
                                            <button class="btn btn-primary mb-3" type="button">Download Proposal</button>
                                            <br />
                                            <button type="button" class="btn btn-outline-success mx-2">Accept</button>
                                            <button type="button" class="btn btn-outline-danger mx-2">Decline</button>
                                        </div>
                                    </div>
                                    <div class="card shadow-sm p-4 mb-5 bg-body rounded my-3 mx-3" style={{ width: "20rem" }}>
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Workshop Topic</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Conductor Name</h6>
                                            <p class="card-text">Description</p>
                                            <button class="btn btn-primary mb-3" type="button">Download Proposal</button>
                                            <br />
                                            <button type="button" class="btn btn-outline-success mx-2">Accept</button>
                                            <button type="button" class="btn btn-outline-danger mx-2">Decline</button>
                                        </div>
                                    </div>
                                    <div class="card shadow-sm p-4 mb-5 bg-body rounded my-3 mx-3" style={{ width: "20rem" }}>
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Workshop Topic</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Conductor Name</h6>
                                            <p class="card-text">Description</p>
                                            <button class="btn btn-primary mb-3" type="button">Download Proposal</button>
                                            <br />
                                            <button type="button" class="btn btn-outline-success mx-2">Accept</button>
                                            <button type="button" class="btn btn-outline-danger mx-2">Decline</button>
                                        </div>
                                    </div>
                                    <div class="card shadow-sm p-4 mb-5 bg-body rounded my-3 mx-3" style={{ width: "20rem" }}>
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Workshop Topic</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Conductor Name</h6>
                                            <p class="card-text">Description</p>
                                            <button class="btn btn-primary mb-3" type="button">Download Proposal</button>
                                            <br />
                                            <button type="button" class="btn btn-outline-success mx-2">Accept</button>
                                            <button type="button" class="btn btn-outline-danger mx-2">Decline</button>
                                        </div>
                                    </div>
                                    <div class="card shadow-sm p-4 mb-5 bg-body rounded my-3 mx-3" style={{ width: "20rem" }}>
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Workshop Topic</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Conductor Name</h6>
                                            <p class="card-text">Description</p>
                                            <button class="btn btn-primary mb-3" type="button">Download Proposal</button>
                                            <br />
                                            <button type="button" class="btn btn-outline-success mx-2">Accept</button>
                                            <button type="button" class="btn btn-outline-danger mx-2">Decline</button>
                                        </div>
                                    </div>
                                    <div class="card shadow-sm p-4 mb-5 bg-body rounded my-3 mx-3" style={{ width: "20rem" }}>
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Workshop Topic</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Conductor Name</h6>
                                            <p class="card-text">Description</p>
                                            <button class="btn btn-primary mb-3" type="button">Download Proposal</button>
                                            <br />
                                            <button type="button" class="btn btn-outline-success mx-2">Accept</button>
                                            <button type="button" class="btn btn-outline-danger mx-2">Decline</button>
                                        </div>
                                    </div>
                                    <div class="card shadow-sm p-4 mb-5 bg-body rounded my-3 mx-3" style={{ width: "20rem" }}>
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Workshop Topic</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Conductor Name</h6>
                                            <p class="card-text">Description</p>
                                            <button class="btn btn-primary mb-3" type="button">Download Proposal</button>
                                            <br />
                                            <button type="button" class="btn btn-outline-success mx-2">Accept</button>
                                            <button type="button" class="btn btn-outline-danger mx-2">Decline</button>
                                        </div>
                                    </div>
                                    <div class="card shadow-sm p-4 mb-5 bg-body rounded my-3 mx-3" style={{ width: "20rem" }}>
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Workshop Topic</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Conductor Name</h6>
                                            <p class="card-text">Description</p>
                                            <button class="btn btn-primary mb-3" type="button">Download Proposal</button>
                                            <br />
                                            <button type="button" class="btn btn-outline-success mx-2">Accept</button>
                                            <button type="button" class="btn btn-outline-danger mx-2">Decline</button>
                                        </div>
                                    </div>
                                    <div class="card shadow-sm p-4 mb-5 bg-body rounded my-3 mx-3" style={{ width: "20rem" }}>
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Workshop Topic</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Conductor Name</h6>
                                            <p class="card-text">Description</p>
                                            <button class="btn btn-primary mb-3" type="button">Download Proposal</button>
                                            <br />
                                            <button type="button" class="btn btn-outline-success mx-2">Accept</button>
                                            <button type="button" class="btn btn-outline-danger mx-2">Decline</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PendingRequestsModule
