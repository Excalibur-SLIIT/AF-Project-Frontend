import React, { Component } from 'react';
import WSConductorSignUpFormModule from '../../Modules/WSConductorSignUpModules/WSConductorSignUpFormModule';
import HeaderModule from '../../Modules/CommonModules/HeaderModule';
import FooterModule from '../../Modules/CommonModules/FooterModule';

class WSConductorSignUp extends Component {
    render() {
        return (
            <div>
                <HeaderModule />
                <WSConductorSignUpFormModule />
                <FooterModule />
            </div>
        )
    }
}

export default WSConductorSignUp
