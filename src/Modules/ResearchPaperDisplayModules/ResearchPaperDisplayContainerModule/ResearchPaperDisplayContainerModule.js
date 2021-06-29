import React, { Component } from 'react';
import ResearchPaperDetailCardModule from '../ResearchPaperDetailCardModule/ResearchPaperDetailCardModule';

class ResearchPaperDisplayContainerModule extends Component {
    render() {
        return (
            <div class="shadow-lg p-3 bg-body rounded my-3 mx-auto" style={{ width: "99%" }}>
                <h1>Research Papers</h1>
                <ResearchPaperDetailCardModule />
            </div>
        )
    }
}

export default ResearchPaperDisplayContainerModule
