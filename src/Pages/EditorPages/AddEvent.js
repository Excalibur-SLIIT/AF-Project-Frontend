import React, { Component } from 'react';
import Header from "../../Modules/CommonModules/HeaderModule";
import Footer from "../../Modules/CommonModules/FooterModule";
import Eventbody from "../../Modules/EditorModules/EventManagement/AddEventModule"

export class AddEvent extends Component {
    render() {
        return (
            <div>
                <Header />
                <Eventbody />
                <Footer />
            </div>
        )
    }
}

export default AddEvent
