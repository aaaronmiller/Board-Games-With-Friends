import React, { Component } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import API from '../utils/API';

// const CardExample = () => {
class GameCard extends Component {
  //   state = {
  //     isOwner: true, 
  //     isAdmin: true,
  //   };

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
      .then((response) => {
        window.location.reload();
      }).catch(function (error) {
        console.log(error);
      })
  }

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  render() {
    return (
      <MDBCol sm="4">
        <MDBCard className="text-black bg-light" style={{ color: "white", textAlign: "center", margin: "30px", borderRadius: "30px", filter: "drop-shadow(10px 10px 9px #000000)" }}>
          <MDBCardImage className="img-fluid" src={this.props.gameImage} waves />
          <MDBCardBody>
            <MDBCardTitle style={{ color: "black" }}>{this.props.eventTitle}</MDBCardTitle>
            <MDBCardText>
              <span><p>Location: {this.props.location}</p></span><br />
              {/* Created by:{CardExample.eventOwner}<br />c */}
              <span><p>Max Players: {this.props.capacity}</p></span><br />
              <span><p>Description: {this.props.description}</p></span><br />
              {/* <span>Curerent players: {CardExample.signedInPlayers}</span> */}
            </MDBCardText>
            <MDBBtn color="#1565c0 blue darken-3" style={{ color: "white" }} href="#" onClick={this.props.handleSubmit}>Join</MDBBtn>

            <MDBBtn color="#1565c0 blue darken-3" style={{ color: "white" }} href="#" onClick={() => this.deleteEvent(this.props.id)} >Delete</MDBBtn>

            {this.props.isOwner ? (<MDBBtn color="#1565c0 blue darken-3" style={{ color: "white" }} href="#" onClick={this.props.handleDelete}>Delete</MDBBtn>) : ("")}

            {this.props.isOwner ? (<MDBBtn color="#1565c0 blue darken-3" style={{ color: "white" }} href="#" onClick={this.props.handleEdit}>Edit</MDBBtn>) : ("")}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    )
  }

}
export default GameCard;