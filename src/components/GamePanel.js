import React, { Component } from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter, MDBCardImage, MDBBtn, MDBCol } from
  "mdbreact";
import API from '../utils/API';

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


  componentDidMount() {
    this.loadEvents();
  };

  loadEvents = () => {
    API.getGames()
      .then(res =>
        this.setState({ gameObj: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteGame = id => {
    API.deleteGame(id)
      .then((response) => {
        window.location.reload();
      }).catch(function (error) {
        console.log(error);
      })
  }
  render() {

    return (
      <div>
       
          <MDBCard style={{ color: "white", textAlign: "center", margin: "30px", borderRadius: "30px", filter: "drop-shadow(10px 10px 9px #000000)",backgroundImage:
          "url(https://previews.123rf.com/images/tashechka/tashechka1701/tashechka170100695/70080103-abstract-geometric-style-yellow-background-illustration-yellow-white-colors-.jpg)" }} >
            <MDBCardHeader color="#ffa726 orange lighten-1">
              {this.props.gameTitle}
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>
                <a href="`{this.props.gameUrl}`" style={{fontSize: "20px", whiteSpace: "nowrap", color:"black" }}>
                  {this.props.gameTitle}
                </a>
              </MDBCardTitle>
              <MDBCardText style={{color:"black" }}>
                <MDBCardImage className="img-fluid rounded mx-auto d-block" src={this.props.image} style={{ height: "80%", width: "80%", borderRadius: "25px" }} />
                <br />
                {this.props.description}<br />
              </MDBCardText>
              <MDBBtn color="#e65100 orange darken-4" size="sm" style={{ color: "white",borderRadius: "10px", filter: "drop-shadow(5px 5px 9px #000000)" }}>
                Create Event
        </MDBBtn>

              <MDBBtn color="#1565c0 blue darken-3" style={{ color: "white",borderRadius: "10px", filter: "drop-shadow(5px 5px 9px #000000)" }} href="#" onClick={() => this.deleteGame(this.props.id)} >Delete</MDBBtn>
            </MDBCardBody>
            <MDBCardFooter color="secondary-color">
            </MDBCardFooter>
          </MDBCard>
      
      </div>
    );
  };
}

export default GamePanel;