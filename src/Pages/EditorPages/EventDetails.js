import React, { Component } from 'react'
import Header from '../../Modules/CommonModules/HeaderModule';
import Footer from '../../Modules/CommonModules/FooterModule';
import EventDetailsBody from '../../Modules/EditorModules/EventDetailsModule'

export class EventDetails extends Component {
    render() {
        return (
            <div>
                <Header />
                <EventDetailsBody />
                <Footer />
            </div>
        )
    }
}

export default EventDetails
