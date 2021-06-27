import React, { Component } from 'react';
import HeaderModule from '../../Modules/CommonModules/HeaderModule';
import FooterModule from '../../Modules/CommonModules/FooterModule';
import HomeModule from '../../Modules/HomeModules/HomeModule';

class Home extends Component {
    render() {
        return (
            <div>
                <HeaderModule />
                <HomeModule />
                <FooterModule />
            </div>
        )
    }
}

export default Home
