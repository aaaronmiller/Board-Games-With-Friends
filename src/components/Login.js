import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import { Redirect, Route, Link } from "react-router-dom";
import DashBoard from "./DashBoard";
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
          console.log(this.props.message);
          sessionStorage.setItem("token", response.data);
          sessionStorage.setItem("isLoggedIn", true);
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
        <br></br>
        <MDBRow>
          <MDBCol md="3"></MDBCol>
          <MDBCol md="6">
            <MDBRow style={{ margin: "auto" }}>
              <MDBCol md="1"></MDBCol>
              <MDBCol md="11">
                <MDBCard
                  className="card-image "
                  style={{
                    backgroundImage:
                      "url(https://i.ibb.co/CbxQtDM/chess.jpg)",
                    backgroundSize: "100% 100%",
                    width: "28rem",
                    align: "center"
                  }}
                >
                  <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                    <div className="text-center">
                      <h3 className="white-text mb-5 mt-4 font-weight-bold">
                        <strong>LOG</strong>
                        <a href="#!" className="red-text font-weight-bold">
                          <strong> IN</strong>
                        </a>
                      </h3>
                    </div>
                    <div className="text-white">

                  <MDBInput className="text-white" label="Your email" group icon="user" type="text" validate onChange={this.usernameHandler}/>
                  <MDBInput label="Your password" group icon="lock" type="password" validate onChange={this.passwordHandler}/>
                </div>
                <MDBRow className="d-flex align-items-center mb-4">
                  <div className="text-center mb-3 col-md-12">
                    <MDBBtn
                      color="red"
                      rounded
                      type="button"
                      className="btn-block z-depth-1"
                      onClick={this.handleSubmit}
                    >
                      LOG IN
                  </MDBBtn>
                      </div>
                    </MDBRow>
                    <MDBCol md="12">
                      <p className="font-small white-text d-flex justify-content-end">
                        Don't have an account?
                  <Link to="/signUp" className="red-text ml-1 font-weight-bold">
                          Sign up
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
              </MDBCol>

            </MDBRow>
          </MDBCol>
          <MDBCol md="3"></MDBCol>
        </MDBRow>
        <Redirect to={this.state.redirectPath} />

      </div>

    );
  }

}

export default Login;