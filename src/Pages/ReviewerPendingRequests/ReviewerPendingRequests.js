import React, { Component } from 'react';
import HeaderModule from '../../Modules/CommonModules/HeaderModule';
import FooterModule from '../../Modules/CommonModules/FooterModule';
import BaseTabModule from '../../Modules/ReviewerPendingRequestsModule/BaseTabModule/BaseTabModule';

class ReviewerPendingRequests extends Component {
    render() {
        return (
            <div>
                <HeaderModule />
                <BaseTabModule />
                <FooterModule />
            </div>
        )
    }
}

export default ReviewerPendingRequests
