import React, { Component } from 'react';
import HeaderModule from '../../Modules/CommonModules/HeaderModule';
import FooterModule from '../../Modules/CommonModules/FooterModule';
import AllAttendee from '../../Modules/AdminModules/userAttendeeAdmin/allAttendee';
import Attendeefunction from '../../Modules/AdminModules/userAttendeeAdmin/Attendeefunction';

export default class AttendeeAdmin extends Component {
    render() {
        return (
            <div>
                <HeaderModule />
                <Attendeefunction />
                <AllAttendee />
                <FooterModule />
            </div>
        )
    }
}
