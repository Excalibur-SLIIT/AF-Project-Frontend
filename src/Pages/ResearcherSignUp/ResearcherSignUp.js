import React, { Component } from 'react';
import ResearcherSignUpFormModule from '../../Modules/ResearcherSignUpModules/ResearcherSignUpFormModule';
import HeaderModule from '../../Modules/CommonModules/HeaderModule';
import FooterModule from '../../Modules/CommonModules/FooterModule';

class ResearcherSignUp extends Component {
    render() {
        return (
            <div>
                <HeaderModule />
                <ResearcherSignUpFormModule />
                <FooterModule />
            </div>
        )
    }
}

export default ResearcherSignUp
