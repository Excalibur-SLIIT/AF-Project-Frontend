import React, { Component } from 'react';
import HeaderModule from '../../Modules/CommonModules/HeaderModule';
import FooterModule from '../../Modules/CommonModules/FooterModule';
import ResearchPaperDisplayContainerModule from '../../Modules/ResearchPaperDisplayModules/ResearchPaperDisplayContainerModule/ResearchPaperDisplayContainerModule';

class ResearchPaper extends Component {
    render() {
        return (
            <div>
                <HeaderModule />
                <ResearchPaperDisplayContainerModule />
                <FooterModule />
            </div>
        )
    }
}

export default ResearchPaper
