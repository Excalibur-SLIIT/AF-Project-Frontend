import React, { Component } from 'react';
import HeaderModule from '../../Modules/CommonModules/HeaderModule';
import FooterModule from '../../Modules/CommonModules/FooterModule';
import ReviewerFunction from '../../Modules/AdminModules/userReviewerAdmin/Reviewerfunction'
import AllReviewer from '../../Modules/AdminModules/userReviewerAdmin/allReviewer'

export default class ReviewerAdmin extends Component {
    render() {
        return (
            <div>
                <HeaderModule />
                <ReviewerFunction />
                <AllReviewer />
                <FooterModule />
            </div>
        )
    }
}
