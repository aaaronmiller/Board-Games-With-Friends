import React, {Component} from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { Redirect, Route, Link } from "react-router-dom";
import API from "../utils/API"
import UpdateProfileModal from "./UpdateProfileModal";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "https://png.pngtree.com/svg/20161212/f93e57629c.svg",
      userName: "",
      gender: "",
      introduction: "",
      favorite: []
    };
    this.updateProfileState = this.updateProfileState.bind(this);
    // this.loadProfile();

  }
  componentDidMount() {
    this.loadProfile();
  }

  updateProfileState(userData) {
    console.log(userData);
    this.setState( {image: userData.userImage} );
    this.setState( {userName: userData.userName} );
    this.setState( {gender: userData.userGender} );
    this.setState( {introduction: userData.userIntro} );
    // this.setState( {favorite: JSON.parse(userData.favoriteGames)} );
  }

  loadProfile() {
    API.getProfile(sessionStorage.getItem("token"))
    .then(response =>{
      console.log("user data:",response.data);
      this.updateProfileState(response.data);
    }).catch(
      err => console.log(err)
    );
  }
  

  render() {
    return (
      <MDBContainer>
        <h2 className="h1-responsive font-weight-bold text-center my-5 text-white">Profile</h2>
        <MDBRow>
          <MDBCol sm="4">
            <img src={this.state.image} width="200"/>
          </MDBCol>
          <MDBCol sm="8">
            <MDBRow>
              <MDBCol sm="6">
                <p className="pb-5 text-white">Username: {this.state.userName || "Unknown"}</p>
              </MDBCol>
              <MDBCol sm="6">
                <p className="pb-5 text-white">Gender: {this.state.gender || "Unknown"}</p>
              </MDBCol>
            </MDBRow>
            <p className="pb-5 text-white">Favorite Boardgames: {this.state.favorite || "Unknown"}</p>
            <p className="pb-5 text-white">Introduction: {this.state.introduction || "User has no introduction yet!"}</p>
          </MDBCol>
        </MDBRow>
        <UpdateProfileModal  userName = {this.state.userName}update={this.updateProfileState}/>


      </MDBContainer>


      
    )
  }
}