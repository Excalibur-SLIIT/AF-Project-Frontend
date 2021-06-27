import React, { Component } from 'react'

class HeaderModule extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body rounded">
                    <div class="container-fluid">
                        <a class="navbar-brand font-monospace fs-2" href="#"><b>ICAF 2021</b></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav p-2">
                                <li class="nav-item">
                                    <button type="button" class="btn btn-outline-dark m-1">Home</button>
                                </li>
                                <li class="nav-item">
                                    <button type="button" class="btn btn-outline-primary m-1">Conferences</button>
                                </li>
                                <li class="nav-item">
                                    <button type="button" class="btn btn-outline-secondary m-1">Events</button>
                                </li>
                                <li class="nav-item dropdown">
                                    <button type="button" class="btn btn-outline-success m-1">Contacts</button>
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
