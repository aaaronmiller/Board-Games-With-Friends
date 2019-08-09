import React, { Component } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import API from "../utils/API";

// const CardExample = (props) => {
class CardExample extends Component {
  state = {
    //populated from user table:

    //populated from event table:
    id: "",
    eventTitle: "",
    eventOwner: "",
    description: "",
    location: "",
    locationGPS: "",
    dateTime: "",
    phone: "",
    maxOfPlayers: "",
    signedInPlayers: "",
    // Below are from the game table, not event table
    gameName: "",
    gameImage: "https://images-na.ssl-images-amazon.com/images/I/61Uzk6kyVyL.jpg",
  };

  componentDidMount() {
    this.loadEvents();
  }

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
        <MDBCard>
          <MDBCardImage className="img-fluid" src="{CardExample.gameImage}" waves />
          <MDBCardBody>
            <MDBCardTitle>{CardExample.eventTitle}</MDBCardTitle>
            <MDBCardText>
            <span>{CardExample.gameName}</span><br />
              <span>{CardExample.dateTime}</span><br />
              <span>{CardExample.description}</span><br />
              <span>{CardExample.location}</span><br />
              Created by:{CardExample.eventOwner}<br />

              <span>{CardExample.phone}</span><br />
              <span>Max # of players: {CardExample.maxOfPlayers}</span><br />
              <span>Curerent players: {CardExample.signedInPlayers}</span>
            </MDBCardText>
            <MDBBtn color="#1565c0 blue darken-3" style={{ color: "white" }} href="#"  onClick={this.handlesubmit}>Join</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    )
  }
}
  export default CardExample;