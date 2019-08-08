import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn, MDBCol } from
  "mdbreact";

const GamePanel = props => {
  return (
    <MDBCol md="4">
      <MDBCard style={{ width: "22rem", marginTop: "1rem" }} className="text-center">
        <MDBCardHeader color="success-color">Featured</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Special title treatment</MDBCardTitle>
          <MDBCardText>
            With supporting text below as a natural lead-in to additional
            content.
        </MDBCardText>
          <MDBBtn color="success" size="sm">
            go somewhere
        </MDBBtn>
        </MDBCardBody>
        <MDBCardFooter color="success-color">2 days ago</MDBCardFooter>
      </MDBCard>
    </MDBCol>
  );
};

export default GamePanel;