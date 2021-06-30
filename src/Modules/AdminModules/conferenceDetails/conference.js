import React, { Component } from "react";
import axios from "axios";

export default class conference extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      events: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/event/").then((response) => {
      console.log("users:", response.data.results);
      this.setState({ events: response.data.results });
    });
  }

  render() {
    return (
      <div>
        <div class="container shadow p-5 mb-5 bg-body rounded w-75 mx-auto my-3">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="alleventTab"
                data-bs-toggle="tab"
                data-bs-target="#allevent"
                type="button"
                role="tab"
                aria-controls="allevent"
                aria-selected="true"
              >
                ALL Events
              </button>
            </li>

            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pendingEventsTab"
                data-bs-toggle="tab"
                data-bs-target="#pendingEvents"
                type="button"
                role="tab"
                aria-controls="pendingEvents"
                aria-selected="false"
              >
                pending Events
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="acceptedEventsTab"
                data-bs-toggle="tab"
                data-bs-target="#acceptedEvents"
                type="button"
                role="tab"
                aria-controls="acceptedEvents"
                aria-selected="false"
              >
                Accepted Events
              </button>
            </li>

            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="DeclineEventsTab"
                data-bs-toggle="tab"
                data-bs-target="#DeclineEvents"
                type="button"
                role="tab"
                aria-controls="DeclineEvents"
                aria-selected="false"
              >
                Declined Events
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="allevent"
              role="tabpanel"
              aria-labelledby="alleventTab"
            >
              <h1>ALL EVENTS</h1>
              <br></br>
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Event Name</th>
                    <th>Speaker</th>
                    <th>Topic</th>
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.events.length > 0 &&
                    this.state.events.map((item, index) => (
                      <tr>
                        <th scope="row">{index}</th>
                        <td>{item.name}</td>
                        <td>{item.speaker}</td>
                        <td>{item.topic}</td>
                        <td>{item.date}</td>
                        <td>{item.time}</td>

                        
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>




            <div
              class="tab-pane fade"
              id="pendingEvents"
              role="tabpanel"
              aria-labelledby="pendingEventsTab"
            >
              <div class="text-start">
                <h1>Pending Events</h1>
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Event Name</th>
                      <th>Speaker</th>
                      <th>Topic</th>
                      <th>Date</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.events.length > 0 &&
                      this.state.events.map((item, index) => (
                        <tr>
                          <th scope="row">{index}</th>
                          <td>{item.name}</td>
                          <td>{item.speaker}</td>
                          <td>{item.topic}</td>
                          <td>{item.date}</td>
                          <td>{item.time}</td>

                          <td>
                            {" "}
                            <button class="btn btn-outline-dark">accept</button>
                          </td>
                          <td>
                            <button class="btn btn-outline-dark">
                              decline
                            </button>{" "}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          
          
          
          
            <div
              class="tab-pane fade"
              id="acceptedEvents"
              role="tabpanel"
              aria-labelledby="acceptedEventsTab"
            >
              <div class="text-start">
                <h1>Accepted Events</h1>
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Event Name</th>
                      <th>Speaker</th>
                      <th>Topic</th>
                      <th>Date</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.events.length > 0 &&
                      this.state.events.map((item, index) => (
                        <tr>
                          <th scope="row">{index}</th>
                          <td>{item.name}</td>
                          <td>{item.speaker}</td>
                          <td>{item.topic}</td>
                          <td>{item.date}</td>
                          <td>{item.time}</td>

                          
                          <td>
                            <button class="btn btn-outline-dark">
                              decline
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            
            
            <div
              class="tab-pane fade"
              id="DeclineEvents"
              role="tabpanel"
              aria-labelledby="DeclineEventsTab"
            >
              <div class="text-start">
                <h1>Decline Events</h1>
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Event Name</th>
                      <th>Speaker</th>
                      <th>Topic</th>
                      <th>Date</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.events.length > 0 &&
                      this.state.events.map((item, index) => (
                        <tr>
                          <th scope="row">{index}</th>
                          <td>{item.name}</td>
                          <td>{item.speaker}</td>
                          <td>{item.topic}</td>
                          <td>{item.date}</td>
                          <td>{item.time}</td>

                          <td>
                            
                            <button class="btn btn-outline-dark">Delete</button>
                          </td>
                         
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
