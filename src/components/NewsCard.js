import React, { Component } from "react";
import { MDBCard, MDBBtn, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import API from '../utils/API';

class NewsCard extends Component {
  state = {

  };

  deleteNews = id => {
    API.deleteNews(id)
      .then((response) => {
        window.location.reload();
      }).catch(function (error) {
        console.log(error);
      })
  }


  render() {
    return (
      <MDBCol md="4">
        <MDBCard className="text-black bg-light" style={{ textAlign: "center", margin: "30px", borderRadius: "30px", filter: "drop-shadow(30px 30px 9px #000000)" }}>
        <br />
          <a href={this.props.link}>
            <MDBCardImage className="img-fluid rounded mx-auto d-block" src={this.props.image}  style={{ height : "80%", width :   "80%", borderRadius: "25px"}} waves />
          </a>
         <MDBCardBody>
            <MDBCardTitle>
              <a href={this.props.link} style={{color: "gray" , fontSize: "18px"}}>
                {this.props.gameTitle}
              </a>
            </MDBCardTitle>
            <MDBCardText style={{color: "black", textAlign:"left"}}>
              {this.props.summary}
            </MDBCardText>
            <MDBBtn color="#1565c0 blue darken-3" style={{color:"white", borderRadius: "8px", filter: "drop-shadow(5px 5px 5px #000000)"}}  href="#" onClick={() => this.deleteNews(this.props.id)} >Delete</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    )
  }
}
export default NewsCard;