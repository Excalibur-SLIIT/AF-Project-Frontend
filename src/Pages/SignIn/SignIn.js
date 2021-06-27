import React, { Component } from 'react';
import HeaderModule from '../../Modules/CommonModules/HeaderModule';
import SignInFormModule from '../../Modules/SignInModules/SignInFormModule';
import FooterModule from '../../Modules/CommonModules/FooterModule';


class SignIn extends Component {
    render() {
        return (
            <div>
                <HeaderModule />
                <SignInFormModule />
                <FooterModule />
            </div>
        )
    }
}

export default SignIn
