import React, { Component } from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn, MDBCol } from
  "mdbreact";


// const GamePanel = props => {

class GamePanel extends Component {
  // state = {
  // };

  // componentDidMount() {
  //   this.loadEvents();
  // }

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
      <MDBCol sm="4">
        <MDBCard style={{ width: "22rem", marginTop: "1rem" }} className="text-center">
          <MDBCardHeader color="secondary-color">
            {this.props.gameTitle}
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>
              <a href="`{this.props.gameUrl}`">
                {this.props.gameTitle}
              </a>
            </MDBCardTitle>
            <MDBCardText>
              {this.props.gameImage}<br />
              {this.props.gameDescription}<br />
            </MDBCardText>
            <MDBBtn color="secondary" size="sm">
              Create Event
        </MDBBtn>
          </MDBCardBody>
          <MDBCardFooter color="secondary-color">
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    );
  };
}

export default GamePanel;