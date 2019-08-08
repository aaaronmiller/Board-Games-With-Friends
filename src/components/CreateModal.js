import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInputGroup, MDBInput } from 'mdbreact';

class CreateModal extends Component {
    state = {
        modal1: false,
        username: "",
        title: "",
        name: "",
        capacity: NaN,
        date: "",
        time: "",
        location: "",
        address: "",
        description: "" 
        
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };
    handleCreate = () => {
        this.setState({ modal1: false});
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
            <div style={{ display: "inline-block" }}>
                <a><i className="far fa-plus-square" onClick={this.toggle(1)}></i></a>
                <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} size="lg">
                    <MDBModalHeader toggle={this.toggle(1)}>Create a board game</MDBModalHeader>
                    <MDBModalBody>   
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
                            name="capcity"
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
                            name="location"
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
                            prepend="Description"
                            type="textarea"
                            hint="Extra Information"
                            name="description"
                            onChange={this.handleInputChange}
                        />

                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle(1)}>Close</MDBBtn>
                        <MDBBtn color="primary" onClick={this.handleCreate}>Create</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        );
    }
}

export default CreateModal;