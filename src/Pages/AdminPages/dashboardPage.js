import React, { Component } from 'react';
import HeaderModule from '../../Modules/CommonModules/HeaderModule';
import FooterModule from '../../Modules/CommonModules/FooterModule';
import Dashboard from '../../Modules/AdminModules/DashBoard/dashboardNav'

export default class dashboardPage extends Component {
    render() {
        return (
            <div>
                 <HeaderModule />
                <Dashboard />
                <FooterModule />
                
            </div>
        )
    }
}

