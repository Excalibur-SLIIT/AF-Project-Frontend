import React, { Component } from 'react';
import HeaderModule from '../../Modules/CommonModules/HeaderModule';
import FooterModule from '../../Modules/CommonModules/FooterModule';
import Reviewerfunction from '../../Modules/AdminModules/userReviewerAdmin/Reviewerfunction';
import AllReviewer from '../../Modules/AdminModules/userReviewerAdmin/allReviewer';

export default class EditorAdmin extends Component {
    render() {
        return (
            <div>
                <HeaderModule />
                <Reviewerfunction />
                <AllReviewer />
                <FooterModule />
            </div>
        )
    }
}
