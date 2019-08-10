import React, { Component } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import API from "../utils/API";

// const CardExample = (props) => {
class CardExample extends Component {
  state = {
    //creator toggle
    isOwner: false, 
    // populated from user table:

    //populated from event table:
    // id: "",
    // description: "",
    // location: "",
    // capacity: "",
    // phone: "",
    // createdAt: "",
    // updatedAt: "",
    // userName: "",
    // UserId: "",
    // User: "",
    // gameImage: "",
    // Below are from the game table, not event table
  };

  componentDidMount() {
    this.loadEvents();
  };

  loadEvents = () => {
    API.getAllEvents()
      .then(res =>
        this.setState({ gameObj: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteEvent = id => {
    API.deleteEvent(id)
      .then(res => this.loadEvents())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  render() {
    return (
      <MDBCol md="4">
        <MDBCard className="text-black bg-light" style={{ textAlign: "center", margin: "30px" }}>
          <MDBCardImage className="img-fluid" src={this.props.gameImage} waves />
          <MDBCardBody>
            <MDBCardTitle>{this.props.eventTitle}</MDBCardTitle>
            <MDBCardText>
              <span><p>Location: {this.props.location}</p></span><br />
              {/* Created by:{CardExample.eventOwner}<br />c */}
              <span><p>Maximum: {this.props.capacity}</p></span><br />
              <span><p>Description: {this.props.description}</p></span><br />
              {/* <span>Curerent players: {CardExample.signedInPlayers}</span> */}
            </MDBCardText>
            <MDBBtn color="#1565c0 blue darken-3" style={{ color: "white" }} href="#"  onClick={this.handleSubmit}>Join</MDBBtn>
            {this.props.isOwner ? (<MDBBtn color="#1565c0 blue darken-3" style={{ color: "white" }} href="#"  onClick={this.handleSubmit}>Delete</MDBBtn>) : ("")}
            {this.props.isOwner ? (<MDBBtn color="#1565c0 blue darken-3" style={{ color: "white" }} href="#"  onClick={this.handleSubmit}>Edit</MDBBtn>): ("")}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    )
  }
}
  export default CardExample;