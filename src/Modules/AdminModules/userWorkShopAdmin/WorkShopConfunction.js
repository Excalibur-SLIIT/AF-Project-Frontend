import React, { Component } from 'react'

export default class WorkShopConfunction extends Component {
    render() {
        return (
            <div>
                <div class="container shadow p-5 mb-5 bg-body rounded w-75 mx-auto my-3">
                    <div class="col-md-6 mx-auto" >
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="createrworkshopContab" data-bs-toggle="tab" data-bs-target="#createrworkshopCon" type="button" role="tab" aria-controls="createrworkshopCon" aria-selected="true">Create WorkShopConductor</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="updateworkshopContab" data-bs-toggle="tab" data-bs-target="#updateworkshopCon" type="button" role="tab" aria-controls="updateworkshopCon" aria-selected="false">Update WorkShopConductor</button>
                            </li>
                            
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="createrworkshopCon" role="tabpanel" aria-labelledby="createrworkshopContab">
                                <div class="text-start">
                                    <h1>Create WorkShopConductor</h1>
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
                            <div class="tab-pane fade" id="updateworkshopCon" role="tabpanel" aria-labelledby="updateworkshopContab">
                                <div class="text-start">
                                    <h1>Update WorkShopConductor</h1>
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
                            <div class="tab-pane fade" id="deleterReviewer" role="tabpanel" aria-labelledby="deleterReviewertab">
                                <div class="text-start">
                                    <h1>Delete WorkShopConductor</h1>
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
