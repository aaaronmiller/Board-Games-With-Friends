import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';
import API from '../utils/API';
import { number } from 'prop-types';

class GameModal extends Component {
    state = {
        modal1: false,
        name: "",
        description: "",
        capacity: number,
        picture: ""

    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleCreate = () => {
        this.setState({ modal1: false });

        API.saveGame({
            gameName: this.state.name,
            gameDescript: this.state.description,
            maxOfPlayers: this.state.capacity,
            picture: this.state.picture,
          })
            .then((response) => {
                // console.log("event created");
                // console.log(response);
                window.location.reload();
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
            <MDBContainer style={{textAlign: "center"}}>
                <div style={{ display: "inline-block"}}>

                    <MDBBtn className="text-white" color="#d50000 red accent-4" style={{color: "white", borderRadius: "30px", filter: "drop-shadow(10px 10px 9px #000000)" }} href="#" onClick={this.toggle(1)}>Create a Game</MDBBtn>

                    <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} size="lg">
                        <MDBModalHeader style={{ textAlign: "center", color: "black" }} toggle={this.toggle(1)}>Create a board game</MDBModalHeader>
                        <MDBModalBody>
                            <div className="md-form">
                                <MDBInput
                                    material
                                    containerClassName="mb-2 mt-0"
                                    hint="Game Title"
                                    name="name"
                                    onChange={this.handleInputChange}
                                />

                                <MDBInput
                                    material
                                    containerClassName="mb-2 mt-0"
                                    hint="Description"
                                    name="description"
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
                                    hint="Image URL"
                                    name="picture"
                                    onChange={this.handleInputChange}
                                />
                            </div>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="#01579b light-blue darken-4" style={{ color:"white", borderRadius: "10px", filter: "drop-shadow(5px 5px 5px #000000)"}} onClick={this.toggle(1)}>Close</MDBBtn>
                            <MDBBtn color="#d50000 red accent-4" style={{color:"white", borderRadius: "10px", filter: "drop-shadow(5px 5px 5px #000000)"}} onClick={this.handleCreate}>Create</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                </div>
            </MDBContainer>
        );
    }
}

export default GameModal;