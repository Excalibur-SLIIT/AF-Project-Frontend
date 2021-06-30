import React, { Component } from 'react'
import axios from 'axios';

export class AddEventModule extends Component {

    constructor(props) {
        super(props);

        this.onChangeEventName = this.onChangeEventName.bind(this);
        this.onChangeSpeaker = this.onChangeSpeaker.bind(this);
        this.onChangeTopic = this.onChangeTopic.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            name: '',
            speaker: '',
            topic: '',
            date: '',
            time: '',
        }
    }
    onChangeEventName(event) {
        this.setState({
            name: event.target.value
        });
    }
    onChangeSpeaker(event) {
        this.setState({
            speaker: event.target.value
        });
    }
    onChangeTopic(event) {
        this.setState({
            topic: event.target.value
        });
    }
    onChangeDate(event) {
        this.setState({
            date: event.target.value
        });
    }
    onChangeTime(event) {
        this.setState({
            time: event.target.value
        });
    }
    onSubmit(event) {

        event.preventDefault();

        const item = {
            name: this.state.name,
            speaker: this.state.speaker,
            topic: this.state.topic,
            date: this.state.date,
            time: this.state.time,


        }

        console.log(item);

        axios.post('http://localhost:5000/api/event', item)
            .then(res => console.log(res.data))
            .catch(e => console.log(e));

        window.location = './eventdetails'
    }
    render() {
        return (
            <div>
                <div class="container shadow-lg p-3 mb-5 bg-body rounded w-75 my-3">
                    <div class="col-md-6 mx-auto text-start p-4 m-5">
                        <h1><b>Add New Event</b></h1>
                        <form class="row g-3" onSubmit={this.onSubmit}>
                            <div class="col-12">
                                <label for="username" class="form-label">Event Name</label>
                                <input type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Event Name"
                                    required="" className="form-control"
                                    value={this.state.name}
                                    onChange={this.onChangeEventName}
                                />
                                <div class="col-md-6">
                                    <label for="fname" class="form-label">Speaker Name</label>
                                    <input type="text"
                                        name="speaker"
                                        id="speaker"
                                        placeholder="Speaker"
                                        required="" className="form-control"
                                        value={this.state.speaker}
                                        onChange={this.onChangeSpeaker}
                                    />
                                </div>
                                <div class="col-12">
                                    <label for="topic" class="form-label">Event Topic</label>
                                    <input type="topic"
                                        name="topic"
                                        id="topic"
                                        placeholder="Topic"
                                        required="" className="form-control"
                                        value={this.state.topic}
                                        onChange={this.onChangeTopic}
                                    />
                                </div>
                                <div class="col-6">
                                    <label for="researchpaperdescription" class="form-label">Date</label>
                                    <textarea type="text"
                                        name="date"
                                        id="date"
                                        placeholder="Date"
                                        required="" className="form-control"
                                        value={this.state.date}
                                        onChange={this.onChangeDate}
                                    />
                                </div>
                                <div class="col-6">
                                    <label for="researchpaperdescription" class="form-label">Time</label>
                                    <textarea type="text"
                                        name="time"
                                        id="time"
                                        placeholder="Time"
                                        required="" className="form-control"
                                        value={this.state.time}
                                        onChange={this.onChangeTime}
                                    />
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddEventModule
