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
      username: "",
      gender: "",
      introduction: "",
      favorite: []
    };
    this.updateProfileState = this.updateProfileState.bind(this);
  }
  componentDidMount() {
    this.loadProfile();
  }
  updateProfileState(userData) {
    this.setState( {image: userData.userImage} );
    this.setState( {username: userData.userName} );
    this.setState( {gender: userData.userGender} );
    this.setState( {introduction: userData.userIntro} );
    this.setState( {favorite: JSON.parse(userData.favoriteGames)} );
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
                <p className="pb-5 text-white">Uername: {this.state.username || "Unknown"}</p>
              </MDBCol>
              <MDBCol sm="6">
                <p className="pb-5 text-white">Gender: {this.state.gender || "Unknown"}</p>
              </MDBCol>
            </MDBRow>
            <p className="pb-5 text-white">Favorite Boardgames: {this.state.favorite || "Unknown"}</p>
            <p className="pb-5 text-white">Introduction: {this.state.introduction || "User has no introduction yet!"}</p>
          </MDBCol>
        </MDBRow>
        <UpdateProfileModal update={this.updateProfileState}/>


      </MDBContainer>


      
    )
  }
}








// export default function Profile() {
//     return (
//         <>
//             <MDBContainer id="profileContainer">
//       <h2 className="h1-responsive font-weight-bold text-center my-5">
//         Profile
//       </h2>
//       <p className="text-center w-responsive mx-auto pb-5">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
//         error amet numquam iure provident voluptate esse quasi, veritatis
//         totam voluptas nostrum quisquam eum porro a pariatur veniam.
//       </p>
//       <MDBRow>
//         <MDBCol md="9" className="md-0 mb-5">
//           <form>
//             <MDBRow>
//               <MDBCol md="6">
//                 <div className="md-form mb-0">
//                   <MDBInput type="text" id="allInput" label="Your name" />
//                 </div>
//               </MDBCol>
//               <MDBCol md="6">
//                 <div className="md-form mb-0">
//                   <MDBInput
//                     type="text"
//                     id="allInput"
//                     label="Your email"
//                   />
//                 </div>
//               </MDBCol>
//             </MDBRow>
//             <MDBRow>
//               <MDBCol md="12">
//                 <div className="md-form mb-0">
//                   <MDBInput type="text" id="allInput" label="Subject" />
//                 </div>
//               </MDBCol>
//             </MDBRow>
//             <MDBRow>
//               <MDBCol md="12">
//                 <div className="md-form mb-0">
//                   <MDBInput type="textarea" id="allInput" label="Your message" />
//                 </div>
//               </MDBCol>
//             </MDBRow>
//           </form>
//           <div className="text-center text-md-left">
//             <MDBBtn color="primary" size="md">
//               Send
//             </MDBBtn>
//           </div>
//         </MDBCol>
//         <MDBCol md="3" className="text-center">
//           <ul className="list-unstyled mb-0">
//             <li> 
//               <MDBIcon icon="far fa-map" size="2x" className="blue-text" />
//               <p>Ballard, WA 98117, USA</p>
//             </li>
//             <li>
//               <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
//               <p>+1 206 123 4567</p>
//             </li>
//             <li>
//               <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
//               <p>myemail@example.com</p>
//             </li>
//           </ul>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//         </>
//     )
// }
