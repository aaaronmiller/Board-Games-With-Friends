import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';
import API from '../utils/API';
import { number } from 'prop-types';

class CreateModal extends Component {
    state = {
        modal1: false,
        username: "",
        title: "",
        name: "",
        capacity: number,
        date: "",
        time: "",
        location: "",
        address: "",
        description: "",
        phone: number

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
            eventTitle: this.state.title,
            description: this.state.description,
            location: this.state.address,
            capacity: this.state.capacity,
            phone: this.state.phone,
            date: this.state.date,
            specificLocation: this.state.location,
            time: this.state.time,
            gameName: this.state.name,
        })
            .then((response) => {
                console.log("event created");
                console.log(response);
                this.props.handleLoad();
            }).catch(function (error) {
                console.log(error);
            })
        console.log(this.state);
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
                                    material
                                    containerClassName="mb-2 mt-0"
                                    hint="Event Title"
                                    name="title"
                                    onChange={this.handleInputChange}
                                />

                                <MDBInput
                                    material
                                    containerClassName="mb-2 mt-0"
                                    prepend="Name"
                                    name="name"
                                    hint="The Name Of The Boardgame"
                                    onChange={this.handleInputChange}
                                />

                                <MDBInput
                                    material
                                    containerClassName="mb-2 mt-0"
                                    prepend="Capacity"
                                    hint="Maximum Number of People"
                                    name="capacity"
                                    type="number"
                                    onChange={this.handleInputChange}
                                />

                                <MDBInput
                                    material
                                    containerClassName="mb-2 mt-0"
                                    prepend="Event Date"
                                    hint="MM/DD/YYYY"
                                    name="date"
                                    onChange={this.handleInputChange}
                                />

                                <MDBInput
                                    material
                                    containerClassName="mb-2 mt-0"
                                    prepend="Start Time"
                                    hint="HH:MM"
                                    name="time"
                                    onChange={this.handleInputChange}
                                />

                                <MDBInput
                                    material
                                    containerClassName="mb-2 mt-0"
                                    prepend="Location"
                                    hint="Room/Apt. Number"
                                    name="GPSlocation"
                                    onChange={this.handleInputChange}
                                />

                                <MDBInput
                                    material
                                    containerClassName="mb-2 mt-0"
                                    prepend=" "
                                    hint="Address"
                                    name="address"
                                    onChange={this.handleInputChange}
                                />
                                <MDBInput
                                    material
                                    containerClassName="mb-2 mt-0"
                                    prepend=" "
                                    hint="Phone Number"
                                    name="phone"
                                    onChange={this.handleInputChange}
                                />

                                <MDBInput
                                    material
                                    containerClassName="mb-2 mt-0"
                                    prepend="Description"
                                    type="textarea"
                                    hint="Extra Information"
                                    name="description"
                                    onChange={this.handleInputChange}
                                />

                            </div>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="#01579b light-blue darken-4" onClick={this.toggle(1)}>Close</MDBBtn>
                            <MDBBtn color="#d50000 red accent-4" onClick={this.handleCreate}>Create</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                </div>
            </MDBContainer>
        );
    }
}

export default CreateModal;