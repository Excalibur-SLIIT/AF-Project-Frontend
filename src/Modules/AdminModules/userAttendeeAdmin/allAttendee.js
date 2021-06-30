import React, { Component } from 'react'
import axios from 'axios';

export default class allAttendee extends Component {
  
    constructor(props){
        super(props);
        this.state= {
            users: [],
            attendees: [],
            
        }
    }
  
    componentDidMount(){
        axios.get('http://localhost:5000/api/user/')
        .then(response =>{
            console.log('users:', response.data.results);
            this.setState({attendees: response.data.results})
            
            let filteredUsers = [];
            filteredUsers = response.data.results.filter((user) => user.role === "attendee");
            this.setState({attendees: filteredUsers})
            console.log('userrrs:', filteredUsers);
        });

       
    }
 deleteUser(id,e){  
    if(window.confirm('ARE YOU SURE?')){
            axios.delete(`http://localhost:5000/api/user/${id}`)  
              .then(res => setStatus('Delete successful!!'))  
                .catch(error => {
                    setErrorMessage(error.message);
                    console.error('There was an error!', error); 
              })

            }
            }
  
            navigateSubjectPage(e, userID){
                window.location = `/${userID}`
                }

    render() {

        
        return (
            <div>
                <div class="container shadow-lg p-3 mb-5 bg-body rounded w-75 my-3">
                <table class="table table-hover">
                        
                            
                            <thead>
                                <tr>
                                <th>#</th>
                                    <th>UserName</th>
                                    <th>Full Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Mobile Number</th>
                                    <th>ROLE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.attendees.length > 0 && this.state.attendees.map((item, index)=>(
                                
                                <tr>
                                <th scope="row">{index}</th>
                                <td>{item.username}</td>
                                <td>{item.fname}</td>
                                <td>{item.lname}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td>{item.role}</td>

                                <td> <button class="btn btn-outline-dark" onClick={(e)=>this.deleteUser(item._id,e)}>Delete</button></td>
                                <td><button class="btn btn-outline-dark" onClick={(e) => this.updateUser(item._id,e)}>Update</button>  </td>
                              </tr>
                        
                  ))}
                   </tbody>
                  </table> 
                </div>
            </div>
        )
    }
}
