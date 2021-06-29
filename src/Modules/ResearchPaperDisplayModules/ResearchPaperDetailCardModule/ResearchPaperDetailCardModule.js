import React, { Component } from 'react'

class ResearchPaperDetailCardModule extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="card p-4 mb-5 rounded my-3 mx-3" style={{ width: "20rem" }}>
                        <div class="card-body text-center">
                            <h5 class="card-title">Topic</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Author</h6>
                            <p class="card-text">Description</p>
                            <button class="btn btn-primary mb-3" type="button">Download Paper</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResearchPaperDetailCardModule
