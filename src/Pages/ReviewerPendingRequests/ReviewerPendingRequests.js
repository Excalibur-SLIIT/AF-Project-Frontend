import React, { Component } from 'react';
import HeaderModule from '../../Modules/CommonModules/HeaderModule';
import FooterModule from '../../Modules/CommonModules/FooterModule';
import PendingRequestsModule from '../../Modules/ReviewerDashboardModules/PendingRequestsModule/PendingRequestsModule';

class ReviewerPendingRequests extends Component {
    render() {
        return (
            <div>
                <HeaderModule />
                <PendingRequestsModule />
                <FooterModule />
            </div>
        )
    }
}

export default ReviewerPendingRequests
