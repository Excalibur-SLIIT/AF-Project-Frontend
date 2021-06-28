import React, { Component } from 'react'
import Header from "../../Modules/CommonModules/HeaderModule";
import Footer from "../../Modules/CommonModules/FooterModule";
import EditEventBody from '../../Modules/EditorModules/EditEventModule'

export class EditEvent extends Component {
    render() {
        return (
            <div>
                <Header />
                <EditEventBody />
                <Footer />
            </div>
        )
    }
}

export default EditEvent
