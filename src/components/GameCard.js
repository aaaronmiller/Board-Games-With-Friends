import React, { Component } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import API from "../utils/API";

// const CardExample = (props) => {
class CardExample extends Component {
  state = {
    //creator toggle
    isOwner: false, 
    //populated from user table:

    // //populated from event table:
    // "id": 2,
    // "description": "this desc",
    // "location": "jersy",
    // "capacity": 8,
    // "phone": 1234123,
    // "createdAt": "2019-08-09T05:22:28.000Z",
    // "updatedAt": "2019-08-09T05:22:28.000Z",
    // "userName": null,
    // "UserId": null,
    // "User": null
    // Below are from the game table, not event table
    gameImage: "http://miro.medium.com/max/1838/1*fcOemY1xrwLcWUnX8l8g8Q.jpeg",
  };

  // // componentDidMount() {
  // //   this.loadEvents();
  // // }

  // loadEvents = () => {
  //   API.getAllEvents()
  //     .then(res =>
  //       this.setState({ gameObj: res.data })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteEvent = id => {
  //   API.deleteEvent(id)
  //     .then(res => this.loadEvents())
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };
  
  render() {
    return (
      <MDBCol md="4">
        <MDBCard className="text-white bg-light" style={{ textAlign: "center", margin: "30px" }}>
          <MDBCardImage className="img-fluid" src={this.gameImage} waves />
          <MDBCardBody>
            <MDBCardTitle>{this.props.eventTitle}</MDBCardTitle>
            <MDBCardText>
            <span>{this.props.eventTitle}</span><br />
              {/* <span>{CardExample.dateTime}</span><br /> */}
              <span>{this.props.description}</span><br />
              <span>{this.props.location}</span><br />
              {/* Created by:{CardExample.eventOwner}<br />c */}
              <span>Max # of players: {this.props.capacity}</span><br />
              {/* <span>Curerent players: {CardExample.signedInPlayers}</span> */}
            </MDBCardText>
            <MDBBtn color="#1565c0 blue darken-3" style={{ color: "white" }} href="#"  onClick={this.handleSubmit}>Join</MDBBtn>
            {this.state.isOwner ? (<MDBBtn color="#1565c0 blue darken-3" style={{ color: "white" }} href="#"  onClick={this.handleSubmit}>Delete</MDBBtn>) : ("")}
            {this.state.isOwner ? (<MDBBtn color="#1565c0 blue darken-3" style={{ color: "white" }} href="#"  onClick={this.handleSubmit}>Edit</MDBBtn>): ("")}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    )
  }
}
  export default CardExample;