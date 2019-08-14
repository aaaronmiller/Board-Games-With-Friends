import React, { Component } from "react";
import { MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';
import API from '../utils/API';
import Slider from "react-slick";

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

  loadEventsNplayers = () => {
    API.getAllEvents()
      .then(res =>
        this.setState({ gameObj: res.data })
        .catch(err => console.log(err))
        );
        API.getPlayers(this.state.id)
          .then(res =>
            this.setState({ joinedPlayers : res.data})
            )
            .catch(err => console.log(err));
            let joinedPlayers = this.state.joinedPlayers;
            let listPlayers = joinedPlayers.join(",");
            this.setState({joinedPlayers : listPlayers})
   }

  deleteEvent = id => {
    API.deleteEvent(id)
      .then((response) => {
        window.location.reload();
      }).catch(function (error) {
        console.log(error);
      })
  }

  joinEvent = id => {
    API.joinEvent(sessionStorage.getItem("token").toString(), id )
      .then((response) => {
        console.log(response);
      });
  }


  render() {
    return (
  <div style={{display:"inline-block", textAlign:"center"}}>
  
  
  <MDBCard className="text-black bg-light" style={{ color: "black", display:"inline-block", textAlign: "center", margin: "30px", borderRadius: "30px", filter: "drop-shadow(10px 10px 9px #000000)", backgroundImage:
  "url(https://image.freepik.com/free-vector/stylish-blue-medical-background-with-hexagon_1017-19373.jpg)"}}>
  <MDBCardBody>
  <MDBCardTitle style={{ color: "black" }}>{this.props.eventTitle}</MDBCardTitle>
            <MDBCardText style={{ color: "white" }}>
            {this.props.gameName}<br /><br />
            <span><p>Location: {this.props.location}</p></span><br />
              {/* Created by:{CardExample.eventOwner}<br />c */}
              Date/time:{this.props.dateTime}<br />
              <span><p>Max Players: {this.props.maxPlayers}</p></span>
              <span><p>Description: {this.props.description}</p></span>
              {/* <span>Curerent players: {CardExample.signedInPlayers}</span> */}
              Joined Players: {this.props.listPlayers}
            </MDBCardText>
            
            <MDBBtn color="red" style={{ color: "white", borderRadius: "10px", filter: "drop-shadow(10px 10px 9px #000000)" }} href="#" onClick={()=>this.joinEvent(this.props.id)}>Join</MDBBtn>

            <MDBBtn color="#1565c0 blue darken-3" style={{ color: "white",borderRadius: "10px", filter: "drop-shadow(10px 10px 9px #000000)" }} href="#" onClick={()=> this.deleteEvent(this.props.id)} >Delete</MDBBtn>
            
            
            </MDBCardBody>
            </MDBCard>
           
            </div>
            
            )
  }

}
export default GameCard;



// {this.props.isOwner ? (<MDBBtn color="#1565c0 blue darken-3" style={{ color: "white" }} href="#" onClick={this.props.handleDelete}>Delete</MDBBtn>) : ("")}

// {this.props.isOwner ? (<MDBBtn color="#1565c0 blue darken-3" style={{ color: "white" }} href="#" onClick={this.props.handleEdit}>Edit</MDBBtn>) : ("")}