import React, { Component } from 'react'

class HeaderModule extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-dark bg-dark p-5">
                    <div class="container-fluid">
                        <p class="navbar-brand font-monospace fs-2 position-absolute top-50 start-50 translate-middle"><b> 👨‍💻 ICAF 2021 Official Website 👨‍💻 </b></p>
                        <button class="position-absolute top-0 start-0 navbar-toggler p-2 m-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse p-2" id="navbarNavDropdown">
                            <ul class="navbar-nav p-2 m-2">
                                <li class="nav-item">
                                    <button type="button" class="btn btn-outline-light m-1">Home</button>
                                </li>
                                <li class="nav-item">
                                    <button type="button" class="btn btn-outline-light m-1">Conferences</button>
                                </li>
                                <li class="nav-item">
                                    <button type="button" class="btn btn-outline-light m-1">Events</button>
                                </li>
                                <li class="nav-item dropdown">
                                    <button type="button" class="btn btn-outline-light m-1">Contacts</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default HeaderModule
