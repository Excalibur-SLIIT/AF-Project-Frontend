import React, { Component } from 'react';
import CreateSystemManagerFormModule from '../../Modules/CreateSystemManagerModules/CreateSystemManagerFormModule';
import HeaderModule from '../../Modules/CommonModules/HeaderModule';
import FooterModule from '../../Modules/CommonModules/FooterModule';

class CreateSystemManagers extends Component {
    render() {
        return (
            <div>
                <HeaderModule />
                <CreateSystemManagerFormModule />
                <FooterModule />
            </div>
        )
    }
}

export default CreateSystemManagers
