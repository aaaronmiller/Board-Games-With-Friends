import React, { Component } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import API from "../utils/API";

// const CardExample = (props) => {
class CardExample extends Component {
  state = {
    //creator toggle
    isOwner: false, 
    //populated from user table:

    //populated from event table:
    id: "",
    eventTitle: "dog",
    eventOwner: "",
    description: "",
    location: "",
    locationGPS: "",
    dateTime: "",
    maxOfPlayers: "",
    signedInPlayers: "",
    // Below are from the game table, not event table
    gameName: "Chess",
    gameImage: "http://miro.medium.com/max/1838/1*fcOemY1xrwLcWUnX8l8g8Q.jpeg",
  };

  // componentDidMount() {
  //   this.loadEvents();
  // }

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
        <MDBCard className="text-white bg-light" style={{ textAlign: "center", margin: "30px" }}>
          <MDBCardImage className="img-fluid" src={CardExample.gameImage} waves />
          <MDBCardBody>
            <MDBCardTitle>{CardExample.eventTitle}</MDBCardTitle>
            <MDBCardText>
            <span>{CardExample.gameName}</span><br />
              <span>{CardExample.dateTime}</span><br />
              <span>{CardExample.description}</span><br />
              <span>{CardExample.location}</span><br />
              Created by:{CardExample.eventOwner}<br />
              <span>Max # of players: {CardExample.maxOfPlayers}</span><br />
              <span>Curerent players: {CardExample.signedInPlayers}</span>
            </MDBCardText>
            <MDBBtn color="#1565c0 blue darken-3" style={{ color: "white" }} href="#"  onClick={this.handleSubmit}>Join</MDBBtn>
            <MDBBtn color="#1565c0 blue darken-3" style={{ color: "white" }} href="#"  onClick={this.handleSubmit}>Delete</MDBBtn>
            <MDBBtn color="#1565c0 blue darken-3" style={{ color: "white" }} href="#"  onClick={this.handleSubmit}>Edit</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    )
  }
}
  export default CardExample;