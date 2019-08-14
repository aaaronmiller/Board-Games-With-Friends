import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import { Redirect, Link } from "react-router-dom";
import API from "../utils/API";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirectPath: "/"
    };

    this.usernameHandler = this.usernameHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);


  }
  renderRedirect(){
    console.log("redirect");
    this.setState(
      {

        redirectPath: "/dashboard"
      }
    )
  }
  usernameHandler(event) {
    this.setState(
      {
        username: event.target.value
      }
    )
  }
  passwordHandler(event) {
    this.setState(
      {
        password: event.target.value
      }
    )
  }

  handleSubmit(event) {
    API.logIn(this.state.username, this.state.password)
      .then((response) => {
        if (!response.data) {
          alert("wrong username or password")
        } else {
          sessionStorage.setItem("token", response.data);
          sessionStorage.setItem("isLoggedIn", true);
          sessionStorage.setItem("userName", this.state.username);
          this.props.handleLogIn();
          this.renderRedirect();
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  render() {

    return (
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol sm="3"></MDBCol>
            <MDBCol sm="6">
              <MDBRow style={{ margin: "auto" }}>
                <MDBCard
                  className="card-image"
                  style={{
                    backgroundImage:
                      "url(https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images-medium/chess-white-king-in-check-mate-position-adrian-pope.jpg)",
                    backgroundSize: "100% 100%",
                    width: "28rem",
                    align: "center",
                    margin: "30px",
                    borderRadius: "20px",
                    filter: "drop-shadow(10px 10px 9px #000000)"
                  }}>
                  <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4" style={{ borderRadius: "20px", color: "white" }}>
                    <div className="text-center">
                      <h3 className="text-white mb-5 mt-4 font-weight-bold" style={{ whiteSpace: "nowrap"}}>
                        <strong>LOG</strong>
                        <a href="#!" className="red-text font-weight-bold">
                          <strong>IN</strong>
                        </a>
                      </h3>
                    </div>

                    <MDBInput className="text-white" label="Your email" group icon="user" type="text" validate onChange={this.usernameHandler} />
                    <MDBInput className="text-white" label="Your password" group icon="lock" type="password" validate onChange={this.passwordHandler} />

                    <MDBRow className="d-flex align-items-center mb-4">
                      <div className="text-center mb-3 col-md-12">
                        <MDBBtn
                          color="red"
                          rounded
                          type="button"
                          className="btn-block z-depth-1"
                          onClick={this.handleSubmit}
                          style={{
                          borderRadius: "8px",
                          filter: "drop-shadow(10px 10px 9px #000000)"
                        }}>
                          LOG IN
                    </MDBBtn>
                        </div>
                      </MDBRow>
                  <MDBCol sm="12">
                    <p className="font-small text-white d-flex justify-content-end">
                      Don't have an accout?
                <Link to="/signUp" className="red-text ml-1 font-weight-bold">
                        Sign Up
                  </Link>
                    </p>
                  </MDBCol>
                  <MDBCol md="12">
                      <p className="font-small white-text d-flex justify-content-end">
                        Forgot
                  <a href="#!" className="red-text ml-1 font-weight-bold">
                          Password?
                  </a>
                      </p>
                    </MDBCol>
                    </div>
                  </MDBCard>
                

              </MDBRow>
            </MDBCol>
          <MDBCol sm="3"></MDBCol>
          </MDBRow>
        <Redirect to={this.state.redirectPath} />

        </MDBContainer>
      </div >
    );
  }
}
export default Login;