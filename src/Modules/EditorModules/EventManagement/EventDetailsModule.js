import React, { Component } from 'react'
import axios from 'axios';

const Item = props => (
    <tr>
        <td>{props.items.name}</td>
        <td>{props.items.speaker}</td>
        <td>{props.items.topic}</td>
        <td>{props.items.date}</td>
        <td>{props.items.time}</td>
    </tr>
);

export default class EventDetailsModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/event/')
            .then(response => {
                this.setState({items: response.data.results})
            })
            .catch(error => {
                alert(error.message)
            })

    }

    itemList() {
        return this.state.items.map(currentItems => {
            return <Item items={currentItems} key={currentItems._id} />;
        })
    }

    render() {
        return (
            <div>
                <div class="container shadow-lg p-3 mb-5 bg-body rounded w-75 my-3">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Event Name</th>
                                <th>Speaker</th>
                                <th>Topic</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.itemList()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

