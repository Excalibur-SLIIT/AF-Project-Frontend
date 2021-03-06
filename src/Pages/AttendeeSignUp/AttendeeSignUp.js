import React, { Component } from 'react';
import AttendeeSignUpFormModule from '../../Modules/AttendeeSignUpModules/AttendeeSignUpFormModule';
import HeaderModule from '../../Modules/CommonModules/HeaderModule';
import FooterModule from '../../Modules/CommonModules/FooterModule';

class AttendeeSignUp extends Component {
    render() {
        return (
            <div>
                <HeaderModule />
                <AttendeeSignUpFormModule />
                <FooterModule />
            </div>
        )
    }
}

export default AttendeeSignUp
