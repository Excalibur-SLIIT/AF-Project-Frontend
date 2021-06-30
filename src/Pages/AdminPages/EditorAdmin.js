import React, { Component } from 'react';
import HeaderModule from '../../Modules/CommonModules/HeaderModule';
import FooterModule from '../../Modules/CommonModules/FooterModule';
import Editorfunction from '../../Modules/AdminModules/userEditorAdmin/Editorfunction'
import AllEditor from '../../Modules/AdminModules/userEditorAdmin/allEditor';


export default class EditorAdmin extends Component {
    render() {
        return (
            <div>
                <HeaderModule />
             <Editorfunction />
                <AllEditor />
                <FooterModule />
            </div>
        )
    }
}
