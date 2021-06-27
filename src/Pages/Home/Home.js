import React, { Component } from 'react';
import HeaderModule from '../../Modules/CommonModules/HeaderModule';
import FooterModule from '../../Modules/CommonModules/FooterModule';

class Home extends Component {
    render() {
        return (
            <div>
                <HeaderModule />
                <h1>Home Page</h1>
                <FooterModule />
            </div>
        )
    }
}

export default Home
