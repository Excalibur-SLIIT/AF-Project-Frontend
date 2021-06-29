import React, { Component } from 'react';
import HeaderModule from '../../Modules/CommonModules/HeaderModule';
import FooterModule from '../../Modules/CommonModules/FooterModule';
import WorkshopDisplayContainerModule from '../../Modules/WorkshopDisplayModules/WorkshopDisplayContainerModule/WorkshopDisplayContainerModule';

class Workshop extends Component {
    render() {
        return (
            <div>
                <HeaderModule />
                <WorkshopDisplayContainerModule />
                <FooterModule />
            </div>
        )
    }
}

export default Workshop
