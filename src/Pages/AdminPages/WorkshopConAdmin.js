import React, { Component } from 'react';
import HeaderModule from '../../Modules/CommonModules/HeaderModule';
import FooterModule from '../../Modules/CommonModules/FooterModule';
import AllWorkShopCon from '../../Modules/AdminModules/userWorkShopAdmin/allWorkShopCon';
import WorkShopConfunction from '../../Modules/AdminModules/userWorkShopAdmin/WorkShopConfunction';

export default class WorkshopConAdmin extends Component {
    render() {
        return (
            <div>
                <HeaderModule />
                <WorkShopConfunction />
                <AllWorkShopCon />
                <FooterModule />
            </div>
        )
    }
}
