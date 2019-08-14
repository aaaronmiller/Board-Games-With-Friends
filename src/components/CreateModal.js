import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';
import API from '../utils/API';
import { number } from 'prop-types';

class CreateModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal1: false,
            eventTitle: "",
            gameName: "",
            description: "",
            location: "",
            maxPlayers: "",
            dateTime: "",
            gpsLocation: ""
        }
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleCreate = () => {
        this.setState({ modal1: false });
        API.saveEvent({
            // token: sessionStorage.getItem("token"),
            eventTitle: this.state.eventTitle,
            gameName: this.state.gameName,
            description: this.state.description,
            location: this.state.location,
            maxPlayers: this.state.maxPlayers,
            dateTime: this.state.dateTime,
            gpsLocation: this.state.gpsLocation,
            // enrolledPlayers: 
            // time: this.state.time,
        })
            .then((response) => {
                console.log("event created");
                console.log(response);
                window.location.reload();
            }).catch(function (error) {
                console.log(error);
            })
    }



    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    render() {
        return (
            <MDBContainer>
                <div style={{ display: "inline-block" }}>

                    <MDBBtn className="text-white" color="#d50000 red accent-4" style={{ color: "white", borderRadius: "30px", filter: "drop-shadow(10px 10px 9px #000000)" }} href="#" onClick={this.toggle(1)}>Create a Game</MDBBtn>

                    <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} size="lg">
                        <MDBModalHeader style={{ textAlign: "center", color: "black" }} toggle={this.toggle(1)}>Create a board game</MDBModalHeader>
                        <MDBModalBody>
                            <div className="md-form">
                                <MDBInput
                                    
                                    className="mb-2 mt-0"
                                    hint="Event Title"
                                    name="eventTitle"
                                    onChange={this.handleInputChange}
                                />

                                <MDBInput
                                    
                                    className="mb-2 mt-0"
                                    name="gameName"
                                    hint="The Name Of The Boardgame"
                                    onChange={this.handleInputChange}
                                />

                                <MDBInput
                                    
                                    className="mb-2 mt-0"
                                    hint="Maximum Number of People"
                                    name="maxPlayers"
                                    type="number"
                                    onChange={this.handleInputChange}
                                />

                                <MDBInput
                                    
                                    className="mb-2 mt-0"
                                    hint="Date and start time"
                                    name="dateTime"
                                    onChange={this.handleInputChange}
                                />

                                <MDBInput
                                    
                                    className="mb-2 mt-0"
                                    hint="GPSlocation"
                                    name="gpslocation"
                                    onChange={this.handleInputChange}
                                />

                                <MDBInput
                                    
                                    className="mb-2 mt-0"
                                    hint="Location"
                                    name="location"
                                    onChange={this.handleInputChange}
                                />

                                <MDBInput
                                    
                                    className="mb-2 mt-0"
                                    type="textarea"
                                    hint="Extra Information"
                                    name="description"
                                    onChange={this.handleInputChange}
                                />

                            </div>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="#01579b light-blue darken-4" style={{color:"white", borderRadius: "10px", filter: "drop-shadow(5px 5px 5px #000000)"}} onClick={this.toggle(1)}>Close</MDBBtn>
                            <MDBBtn color="#d50000 red accent-4" style={{color:"white", borderRadius: "10px", filter: "drop-shadow(5px 5px 5px #000000)"}} onClick={this.handleCreate}>Create</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                </div>
            </MDBContainer>
        );
    }
}

export default CreateModal;