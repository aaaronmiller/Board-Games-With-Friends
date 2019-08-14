import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
// import { Redirect } from "react-router-dom";
import Slider from "react-slick";

export default class SimpleSlider2 extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
      <div>
      
      <Slider {...settings}>
      <h2> Multiple items </h2>
        <div style={{textAlign: "center"}}>
        <MDBCard className="text-black bg-light" style={{ color: "black", display:"inline-block", textAlign: "center", margin: "30px", borderRadius: "30px", filter: "drop-shadow(10px 10px 9px #000000)" }}>
            <MDBCardTitle style={{ color: "black", textAlign: "center"}}>AAAAAAA</MDBCardTitle>
              <MDBCardText>
              <span><p>Location: </p>sfdgsdfg</span><br />
                <span><p>Max Players: </p>sdfgsd</span><br />
                <span><p>Description: </p>gsdfgsd</span><br />
              </MDBCardText>
              <MDBBtn color="#1565c0 blue darken-3" style={{ color: "white" }} href="#" >Join</MDBBtn>
              
              <MDBBtn color="#1565c0 blue darken-3" style={{ color: "white" }} href="#" >Delete</MDBBtn>
            </MDBCard>
          </div>
        <div style={{textAlign: "center"}}>
       
 
        <MDBCol sm="12" style={{textAlign: "center"}}>
        <MDBCard className="text-black bg-light" style={{ color: "black", display:"inline-block", textAlign: "center", margin: "30px", borderRadius: "30px", filter: "drop-shadow(10px 10px 9px #000000)" }}>
  
  
        <MDBCardTitle style={{ color: "black", textAlign: "center"}}>AAAAAAA</MDBCardTitle>
              <MDBCardText>
              <span><p>Location: </p>sfdgsdfg</span><br />
                {/* Created by:{CardExample.eventOwner}<br />c */}
                <span><p>Max Players: </p>sdfgsd</span><br />
                <span><p>Description: </p>gsdfgsd</span><br />
                {/* <span>Curerent players: {CardExample.signedInPlayers}</span> */}
              </MDBCardText>
              
              <MDBBtn color="#1565c0 blue darken-3" style={{ color: "white" }} href="#" >Join</MDBBtn>
              
              <MDBBtn color="#1565c0 blue darken-3" style={{ color: "white" }} href="#" >Delete</MDBBtn>
             </MDBCard>
            </MDBCol>
          </div>
        <div style={{textAlign: "center"}}>
       
 
        <MDBCol sm="12" style={{textAlign: "center"}}>
        <MDBCard className="text-black bg-light" style={{ color: "black", display:"inline-block", textAlign: "center", margin: "30px", borderRadius: "30px", filter: "drop-shadow(10px 10px 9px #000000)" }}>
  
  
        <MDBCardTitle style={{ color: "black", textAlign: "center"}}>AAAAAAA</MDBCardTitle>
              <MDBCardText>
              <span><p>Location: </p>sfdgsdfg</span><br />
                {/* Created by:{CardExample.eventOwner}<br />c */}
                <span><p>Max Players: </p>sdfgsd</span><br />
                <span><p>Description: </p>gsdfgsd</span><br />
                {/* <span>Curerent players: {CardExample.signedInPlayers}</span> */}
              </MDBCardText>
              
              <MDBBtn color="#1565c0 blue darken-3" style={{ color: "white" }} href="#" >Join</MDBBtn>
              
              <MDBBtn color="#1565c0 blue darken-3" style={{ color: "white" }} href="#" >Delete</MDBBtn>
             </MDBCard>
            </MDBCol>
          </div>
        <div style={{textAlign: "center"}}>
       
 
        <MDBCol sm="12" style={{textAlign: "center"}}>
        <MDBCard className="text-black bg-light" style={{ color: "black", display:"inline-block", textAlign: "center", margin: "30px", borderRadius: "30px", filter: "drop-shadow(10px 10px 9px #000000)" }}>
  
  
        <MDBCardTitle style={{ color: "black", textAlign: "center"}}>AAAAAAA</MDBCardTitle>
              <MDBCardText>
              <span><p>Location: </p>sfdgsdfg</span><br />
                {/* Created by:{CardExample.eventOwner}<br />c */}
                <span><p>Max Players: </p>sdfgsd</span><br />
                <span><p>Description: </p>gsdfgsd</span><br />
                {/* <span>Curerent players: {CardExample.signedInPlayers}</span> */}
              </MDBCardText>
              
              <MDBBtn color="#1565c0 blue darken-3" style={{ color: "white" }} href="#" >Join</MDBBtn>
              
              <MDBBtn color="#1565c0 blue darken-3" style={{ color: "white" }} href="#" >Delete</MDBBtn>
             </MDBCard>
            </MDBCol>
          </div>
    </Slider>


      </div>
    );
  }
}