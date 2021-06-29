import React, { Component } from 'react';
import WorkshopDetailCardModule from '../WorkshopDetailCardModule/WorkshopDetailCardModule';

class WorkshopDisplayContainerModule extends Component {
    render() {
        return (
            <div>
                <div class="shadow-lg p-3 bg-body rounded my-3 mx-auto" style={{ width: "99%" }}>
                    <h1>Workshops</h1>
                    <WorkshopDetailCardModule />
                </div>
            </div>
        )
    }
}

export default WorkshopDisplayContainerModule
