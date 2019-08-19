import React, { Component } from "react";
import { MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';
import API from '../utils/API';
import Slider from "react-slick";

// const CardExample = () => {
class GameCard extends Component {
    state = {
      objData: []
   
    };

  componentDidMount() {
    this.loadEvents();
  };

  loadEvents = () => {
    API.getJoinedPlayers(this.props.id)
      .then(res =>
        {
          this.setState(
            {
              objData : res.data
            }
          )
          console.log(this.state.objData)
        }
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
      window.location.reload();

  }

  joinEvent = id => {
    API.joinEvent(sessionStorage.getItem("token").toString(), id )
      .then((response) => {
        console.log(response);
      });
      window.location.reload();
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
              <span><p>JoinedPlayers:</p></span>
              
              {this.state.objData.map((data) =>  <span><p>{data.User.userName}</p></span>)}

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