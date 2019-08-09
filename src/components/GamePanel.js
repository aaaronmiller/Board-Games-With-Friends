import React, { Component } from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn, MDBCol } from
  "mdbreact";
import API from "../utils/API";

// const GamePanel = props => {

  class GamePanel extends Component {
    state = {
      id: "",
      eventTitle: "",
      eventOwner: "",
      description: "",
      location: "",
      locationGPS: "",
      dateTime: "",
      phone: "",
      maxOfPlayers: "",
      signedInPlayers: ""
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
          <MDBCard style={{ width: "22rem", marginTop: "1rem" }} className="text-center">
            <MDBCardHeader color="success-color">{GamePanel.eventTitle}</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>{GamePanel.eventTitle}</MDBCardTitle>
              <MDBCardText>
                <span>{GamePanel.description}</span>
                <span>{GamePanel.location}</span>
                <span>{GamePanel.phone}</span>
                <span>Max # of players: {GamePanel.maxOfPlayers}</span>
              </MDBCardText>
              <MDBBtn color="success" size="sm">
                Join Game
        </MDBBtn>
            </MDBCardBody>
            <MDBCardFooter color="success-color">2 days ago</MDBCardFooter>
          </MDBCard>
        </MDBCol>
      );
    };
}

export default GamePanel;