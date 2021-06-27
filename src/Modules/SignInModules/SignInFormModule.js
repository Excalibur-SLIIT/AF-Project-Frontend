import React, { Component } from 'react'

class SignInFormModule extends Component {
    render() {
        return (
            <div>
                <div class="col-2 mx-auto text-start p-4">
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
        )
    }
}

export default SignInFormModule
