import axios from 'axios';
import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.usernameHandler = this.usernameHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);

  }

  usernameHandler(event) {
    this.setState(
      {
        username: event.target.value
      }
    )
    console.log(this.state.username)
  }
  passwordHandler(event) {
    this.setState(
      {
        password: event.target.value
      }
    )
    console.log(this.state.username)
  }

  handlesubmit(event) {
    console.log(this.state.username, this.state.password);
    axios.post("https://arcane-spire-45572.herokuapp.com/api/createaccount"||'http://localhost:3000/createaccount', {
      userName: this.state.username,
      password: this.state.password
    })
    .then(function (response) {
    console.log(response);
    if (!response.data) {
        alert("wrong username or password")
    }
    })
    .catch(function (error) {
    console.log(error);
    });
    console.log("not work!");
  }
  render() {

    return (
      <div>
        <br></br>
        <MDBRow>
          <MDBCol md="3"></MDBCol>
          <MDBCol md="6">
          <MDBRow  style={{margin: "auto"}}>
          <MDBCol md="1"></MDBCol>
          <MDBCol md="11">
          <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                  "url(https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images-medium/chess-white-king-in-check-mate-position-adrian-pope.jpg)",
                backgroundSize: "100% 100%",
                width: "28rem"
            }}
          >
            <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
              <div className="text-center">
                <h3 className="text-white mb-5 mt-4 font-weight-bold">
                  <strong>SIGN</strong>
                  <a href="#!" className="#1565c0-text font-weight-bold">
                    <strong> UP</strong>
                  </a>
                </h3>
              </div>

              <MDBInput className="text-white" label="Your email" group icon="user" type="text" validate onChange={this.usernameHandler} />
              <MDBInput className="text-white" label="Your password" group icon="lock" type="password" validate onChange={this.passwordHandler}/>

              <MDBRow className="d-flex align-items-center mb-4">
                <div className="text-center mb-3 col-md-12">
                  <MDBBtn
                    color="#1565c0 blue darken-3"
                    rounded
                    type="button"
                    className="btn-block z-depth-1"
                    onClick={this.handlesubmit}
                  >
                    SIGN UP
                  </MDBBtn>
                </div>
              </MDBRow>
              <MDBCol md="12">
                <p className="font-small text-white d-flex justify-content-end">
                Already have an accout?
                  <a href="/" className="#1565c0-text ml-1 font-weight-bold">
                    Log in
                  </a>
                  </p>
                </MDBCol>
              </div>
            </MDBCard>
            </MDBCol>
           
            </MDBRow>
          </MDBCol>
          <MDBCol md="3"></MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default SignUp;