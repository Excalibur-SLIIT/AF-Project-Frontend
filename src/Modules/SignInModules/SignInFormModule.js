import React, { Component } from 'react'

class SignInFormModule extends Component {
    render() {
        return (
            <div>
                <div class="container p-3 mx-auto my-4 w-50 shadow-lg p-3 mb-5 bg-body rounded">
                    <div class="col-md-4 mx-auto w-75 text-start p-3 m-5">
                        <h1 class="text-center">Sign In</h1>
                        <form class="row g-3">
                            <div class="col-12">
                                <label for="username" class="form-label">Username</label>
                                <input type="text" class="form-control" id="username" name="username" />
                            </div>
                            <div class="col-12">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" name="password" />
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignInFormModule
