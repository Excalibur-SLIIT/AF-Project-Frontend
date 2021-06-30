import React, { Component } from 'react'
import axios from 'axios';

const Item = props => (
    <tr>
        <td>{props.item.name}</td>
        <td>{props.item.speaker}</td>
        <td>{props.item.topic}</td>
        <td>{props.item.date}</td>
        <td>{props.item.time}</td>
    </tr>
);

export default class EventDetailsModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/event/')
            .then(response => {
                this.setState([{ items: response.data }])
                console.log(response.data);
            })
            .catch(error => {
                alert(error.message)
            })

    }
    itemList() {
        return this.state.items.map(currentitems => {
            return <Item item={currentitems}
                key={currentitems._id} />;
        })

    }

    render() {
        return (
            <div>
                <div class="container shadow-lg p-3 mb-5 bg-body rounded w-75 my-3">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Event Name</th>
                                <th>Speaker</th>
                                <th>Topic</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>{this.itemList()}</tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

