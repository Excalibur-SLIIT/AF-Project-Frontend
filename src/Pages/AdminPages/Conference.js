import React, { Component } from 'react';
import HeaderModule from '../../Modules/CommonModules/HeaderModule';
import FooterModule from '../../Modules/CommonModules/FooterModule';
import Conference from '../../Modules/AdminModules/conferenceDetails/conference';

export default class WorkshopConAdmin extends Component {
    render() {
        return (
            <div>
                <HeaderModule />
                <Conference/>
                <FooterModule />
            </div>
        )
    }
}