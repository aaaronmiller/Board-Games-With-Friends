import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import { Redirect, Link } from "react-router-dom";
import API from "../utils/API";

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirectPath: "/signUp"
    };

    this.usernameHandler = this.usernameHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);


  }

  renderRedirect() {
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
    event.preventDefault();
    console.log(this.state.username, this.state.password);
    API.signUp(this.state.username, this.state.password)
      .then((response) => {
        sessionStorage.setItem("token", response.data);
        sessionStorage.setItem("isLoggedIn", true);
        console.log(response);
        alert("Thank you, please now login using your chosen username and password.")
        this.props.handleLogIn();
        this.renderRedirect();

        API.logIn(this.state.username, this.state.password)
          .then((response) => {
            if (!response.data) {
              alert("wrong username or password")
            } else {
              sessionStorage.setItem("token", response.data);
              sessionStorage.setItem("isLoggedIn", true);
              sessionStorage.setItem("userName", this.state.username);
              // this.props.handleLogIn();
              this.renderRedirect();
              window.location.reload();
            }
          })
          .catch(function (error) {
            console.log(error);
          });

        if (!response.data) {
          alert("wrong username or password")
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
                      <h3 className="text-white mb-5 mt-4 font-weight-bold" style={{ whiteSpace: "nowrap" }}>
                        <strong>SIGN</strong>
                        <a href="#!" className="#1565c0-text font-weight-bold">
                          <strong> UP</strong>
                        </a>
                      </h3>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                      <MDBInput className="text-white" label="Your email" group icon="user" type="text" validate onChange={this.usernameHandler} />
                      <MDBInput className="text-white" label="Your password" group icon="lock" type="password" validate onChange={this.passwordHandler} />

                      <MDBRow className="d-flex align-items-center mb-4">
                        <div className="text-center mb-3 col-md-12">
                          <MDBBtn
                            color="#1565c0 blue darken-3"
                            rounded
                            type="submit"
                            className="btn-block z-depth-1"
                            style={{
                              borderRadius: "8px",
                              filter: "drop-shadow(10px 10px 9px #000000)"
                            }}>
                            SIGN UP
                    </MDBBtn>
                        </div>
                      </MDBRow>
                    </form>
                    <MDBCol sm="12">
                      <p className="font-small text-white d-flex justify-content-end">
                        Already have an accout?
                <Link to="/" className="#1565c0-text ml-1 font-weight-bold">
                          Log in
                  </Link>
                      </p>
                    </MDBCol>
                  </div>
                </MDBCard>


              </MDBRow>
            </MDBCol>
            <MDBCol sm="3"></MDBCol>
          </MDBRow>
          <Redirect to={this.state.redirectPath} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </MDBContainer>
      </div >
    );
  }
}

export default SignUp;