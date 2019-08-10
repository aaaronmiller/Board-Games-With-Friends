import React, { Component } from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class NewsCard extends Component {
  state = {

  };
  render() {
    return (
      <MDBCol md="4">
        <MDBCard className="text-black bg-light" style={{ textAlign: "center", margin: "30px" }}>
          <a href={this.props.link}>
            <MDBCardImage className="img-fluid" src={this.props.image} waves />
          </a>

          <MDBCardBody>
            <MDBCardTitle>
              <a href={this.props.link}>
                {this.props.gameTitle}
              </a>
            </MDBCardTitle>
            <MDBCardText>
              {this.props.summary}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    )
  }
}
export default NewsCard;