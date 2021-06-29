// import React, { Component } from 'react'
// import axios from 'axios';

// export class EventDetailsModule extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             events: [],
//         }
//     }
//     componentDidMount() {
//         axios.get(`http://localhost:5000/api/event/${this.props.match.params.id}`)
//             .then(response => {
//                 this.setState({ events: response.data.data })
//                 console.log(events);
//             })
//             .catch(error => {
//                 alert(error.message)
//             })


//     }
//     render() {
//         return (
//             <div>
//                 <div class="container shadow-lg p-3 mb-5 bg-body rounded w-75 my-3">
//                     <table class="table table-hover">
//                         <tbody>
//                             <tr>
//                                 {this.state.events.length > 0 && this.state.events.map((item, index) => (
//                                     <div key={index} className="card mb-3">
//                                         <div className="p-3">
//                                             <h4>Event Name: {item.name}</h4>
//                                             <h5>Speaker: {item.speaker}</h5>
//                                             <h5>Topic: {item.topic}</h5>
//                                             <h5>Date: {item.date}</h5>
//                                             <h5>Time: {item.time}</h5>
//                                         </div>
//                                     </div>
//                                 ))}

//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         )
//     }
// }

// export default EventDetailsModule

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Event = (props) => (
//     <tr>
//         <td>{props.events.name}</td>
//         <td>{props.events.speaker}</td>
//         <td>{props.events.topic}</td>
//         <td>{props.events.date}</td>
//         <td>{props.events.time}</td>
//         <td>
//             <button className="edit">
//                 <Link to={"/editevent/" + props.events._id} className="link">
//                     Edit
//                 </Link>
//             </button>{" "}
//             <button
//                 className="delete"
//                 onClick={() => {
//                     props.deleteEvent(props.events._id);
//                 }}
//             >
//                 Delete
//             </button>
//         </td>
//     </tr>
// );

// export default class EventDetails extends Component {
//     constructor(props) {
//         super(props);
//         this.deleteEvent = this.deleteEvent.bind(this);
//         this.state = {
//             events: [],
//             searchEvent: "",
//         };
//     }

//     componentDidMount() {
//         axios
//             .get("http://localhost:5000/api/event/")
//             .then((response) => {
//                 this.setState({ events: response.data.data });
//                 console.log(response.data);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }

//     deleteEvent(id) {
//         axios
//             .delete("http://localhost:5000/api/event/" + id)
//             .then((res) => console.log(res.data));

//         this.setState({
//             events: this.state.events.filter((el) => el._id !== id),
//         });
//     }

//     eventList() {
//         return this.state.events.map((currentEvents) => {
//             return (
//                 <Event
//                     events={currentEvents}
//                     deleteEvent={this.deleteEvent}
//                     key={currentEvents._id}
//                 />
//             );
//         });
//     }

//     searchEventList() {
//         return this.state.events.map((currentEvents) => {
//             if (
//                 currentEvents.name
//                     .toLowerCase()
//                     .includes(this.state.searchEvent.toLowerCase())
//             ) {
//                 return (
//                     <div class="p-4">
//                         <tr>
//                             <td style={{ width: "20%" }}>{currentEvents.name}</td>
//                             <td style={{ width: "20%" }}>{currentEvents.speaker}</td>
//                             <td style={{ width: "20%" }}>{currentEvents.topic}</td>
//                             <td style={{ width: "20%" }}>{currentEvents.date}</td>
//                             <td style={{ width: "20%" }}>{currentEvents.time}</td>
//                             <td style={{ width: "20%" }}>
//                                 <div class="row">
//                                     {
//                                         <button className="edit">
//                                             <Link
//                                                 to={"/editevent/" + currentEvents._id}
//                                                 className="link"
//                                             >
//                                                 Edit
//                                             </Link>
//                                         </button>
//                                     }
//                                 </div>

//                                 <div class="row">
//                                     {
//                                         <button
//                                             className="delete"
//                                             onClick={() => {
//                                                 //Delete the selected record
//                                                 axios
//                                                     .delete(
//                                                         "http://localhost:5000/event/" + currentEvents._id
//                                                     )
//                                                     .then(() => {
//                                                         alert("Delete Success");
//                                                         //Get data again after delete
//                                                         axios
//                                                             .get("http://localhost:5000/event")
//                                                             .then((res) => {
//                                                                 console.log(res.data);
//                                                                 this.setState({
//                                                                     events: res.data,
//                                                                 });
//                                                             })
//                                                             .catch((err) => console.log(err));
//                                                     })
//                                                     .catch((err) => {
//                                                         alert(err);
//                                                     });
//                                             }}
//                                         >
//                                             Delete
//                                         </button>
//                                     }
//                                 </div>
//                             </td>
//                         </tr>
//                     </div>
//                 );
//             }
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <div class="container">
//                     <h1>Event List</h1>
//                     <br />
//                     {/* <img src="http://localhost:5000/images/item-image/image-1621784967701" /> */}

//                     <div class="row container-fluid">
//                         <div class="d-flex justify-content-center">
//                             <div class="card rounded col col-md-6 col-lg-8 shadow-lg mb-2 m-5 p-4">
//                                 <div class="card-body p-2 rounded mw-auto">
//                                     <div class="d-flex align-items-center p-1 mx-auto">
//                                         <div class="content position-absolute top-50 start-50">
//                                             <tr>
//                                                 <div className="d-flex justify-content-start p-5">
//                                                     <input
//                                                         style={{ width: "200px", marginTop: "10px" }}
//                                                         class="form-control"
//                                                         type="text"
//                                                         placeholder="Search by Event Name"
//                                                         aria-label="Search"
//                                                         onChange={(e) => {
//                                                             this.setState({
//                                                                 searchEvent: e.target.value,
//                                                             });
//                                                         }}
//                                                     />
//                                                 </div>
//                                             </tr>
//                                             <tr>
//                                                 <table class="table">
//                                                     <thead>
//                                                         <tr>
//                                                             <th className="tbhead">Event Name</th>
//                                                             <th className="tbhead">Speaker</th>
//                                                             <th className="tbhead">Topic</th>
//                                                             <th className="tbhead">Date</th>
//                                                             <th className="tbhead">Time</th>
//                                                         </tr>
//                                                     </thead>
//                                                     <tbody>
//                                                         {this.state.searchEvent == ""
//                                                             ? this.eventList()
//                                                             : this.searchEventList()}
//                                                     </tbody>
//                                                 </table>
//                                             </tr>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <br />
//                 <br />
//             </div>
//         );
//     }
// }



import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Item = (props) => (
    <tr>
        <td>{props.items.name}</td>
        <td>{props.items.speaker}</td>
        <td>{props.items.topic}</td>
        <td>{props.items.date}</td>
        <td>{props.items.time}</td>
        <td>
            <button className="edit">
                <Link to={"/editevent/" + props.items._id} className="link">
                    Edit
                </Link>
            </button>{" "}
            <button
                className="delete"
                onClick={() => {
                    props.deleteItem(props.items._id);
                }}
            >
                Delete
            </button>
        </td>
    </tr>
);

export default class EventDetailsModule extends Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            items: [],
            searchItem: "",
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/api/event/")
            .then((response) => {
                this.setState([{ items: response.data }]);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteItem(id) {
        axios
            .delete("http://localhost:5000/api/event/" + id)
            .then((res) => console.log(res.data));

        this.setState({
            items: this.state.items.filter((el) => el._id !== id),
        });
    }

    itemList() {
        return this.state.items.map((currentItems) => {
            return (
                <Item
                    items={currentItems}
                    deleteItem={this.deleteItem}
                    key={currentItems._id}
                />
            );
        });
    }

    searchItemList() {
        return this.state.items.map((currentItems) => {
            if (
                currentItems.brand
                    .toLowerCase()
                    .includes(this.state.searchItem.toLowerCase())
            ) {
                return (
                    <div class="p-4">
                        <tr>
                            <td style={{ width: "20%" }}>{currentItems.name}</td>
                            <td style={{ width: "20%" }}>{currentItems.speaker}</td>
                            <td style={{ width: "20%" }}>{currentItems.topic}</td>
                            <td style={{ width: "20%" }}>{currentItems.date}</td>
                            <td style={{ width: "20%" }}>{currentItems.time}</td>
                            <td style={{ width: "20%" }}>
                                <div class="row">
                                    {
                                        <button className="edit">
                                            <Link
                                                to={"/editevent/" + currentItems._id}
                                                className="link"
                                            >
                                                Edit
                                            </Link>
                                        </button>
                                    }
                                </div>

                                <div class="row">
                                    {
                                        <button
                                            className="delete"
                                            onClick={() => {
                                                //Delete the selected record
                                                axios
                                                    .delete(
                                                        "http://localhost:5000/api/event/" + currentItems._id
                                                    )
                                                    .then(() => {
                                                        alert("Delete Success");
                                                        //Get data again after delete
                                                        axios
                                                            .get("http://localhost:5000/api/event")
                                                            .then((res) => {
                                                                console.log(res.data);
                                                                this.setState({
                                                                    items: res.data,
                                                                });
                                                            })
                                                            .catch((err) => console.log(err));
                                                    })
                                                    .catch((err) => {
                                                        alert(err);
                                                    });
                                            }}
                                        >
                                            Delete
                                        </button>
                                    }
                                </div>
                            </td>
                        </tr>
                    </div>
                );
            }
        });
    }

    render() {
        return (
            <div>
                <div class="container">
                    <h1>Event List</h1>
                    <br />
                    {/* <img src="http://localhost:5000/images/item-image/image-1621784967701" /> */}

                    <div class="row container-fluid">
                        <div class="d-flex justify-content-center">
                            <div class="card rounded col col-md-6 col-lg-8 shadow-lg mb-2 m-5 p-4">
                                <div class="card-body p-2 rounded mw-auto">
                                    <div class="d-flex align-items-center p-1 mx-auto">
                                        <div class="content position-absolute top-50 start-50">
                                            <tr>
                                                <div className="d-flex justify-content-start p-5">
                                                    <input
                                                        style={{ width: "200px", marginTop: "10px" }}
                                                        class="form-control"
                                                        type="text"
                                                        placeholder="Search by Brand Name"
                                                        aria-label="Search"
                                                        onChange={(e) => {
                                                            this.setState({
                                                                searchItem: e.target.value,
                                                            });
                                                        }}
                                                    />
                                                </div>
                                            </tr>
                                            <tr>
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                            <th className="tbhead">Name</th>
                                                            <th className="tbhead">Speaker</th>
                                                            <th className="tbhead">Topic</th>
                                                            <th className="tbhead">Date</th>
                                                            <th className="tbhead">Time</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            {this.state.searchItem == ""
                                                                ? this.itemList()
                                                                : this.searchItemList()}
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </tr>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <br />
            </div>
        );
    }
}
