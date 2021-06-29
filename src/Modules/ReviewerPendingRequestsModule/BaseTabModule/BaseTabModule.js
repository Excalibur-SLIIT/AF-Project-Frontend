import React, { Component } from 'react';
import ResearchPaperCardModule from '../ResearchPaperCardModule/ResearchPaperCardModule';
import WorkshopCardModule from '../WorkshopCardModule/WorkshopCardModule';

class BaseTabModule extends Component {
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
                                <ResearchPaperCardModule />
                            </div>
                            {/* WorkShop Section */}
                            <div class="tab-pane fade" id="pendingworkshop" role="tabpanel" aria-labelledby="pendingworkshoptab">
                                <WorkshopCardModule />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BaseTabModule
