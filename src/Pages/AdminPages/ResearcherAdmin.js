import React, { Component } from 'react';
import HeaderModule from '../../Modules/CommonModules/HeaderModule';
import FooterModule from '../../Modules/CommonModules/FooterModule';
import Researcherfunction from '../../Modules/AdminModules/userResearcherAdmin/Researcherfunction';
import AllResearcher from '../../Modules/AdminModules/userResearcherAdmin/allResearcher';

export default class ResearcherAdmin extends Component {
    render() {
        return (
            <div>
                <HeaderModule />
                <Researcherfunction />
                <AllResearcher />
                <FooterModule />
            </div>
        )
    }
}
