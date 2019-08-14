import React, { Component } from 'react';
import { MDBBtn, MDBInput, MDBModalFooter, MDBModalHeader, MDBModalBody, MDBModal, MDBContainer} from "mdbreact";
import API from "../utils/API";
import { element } from 'prop-types';
import GameTag from "./GameTag"


export default class UpdateProfileModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updateModal: false,
            image: "https://png.pngtree.com/svg/20161212/f93e57629c.svg",
            userName: this.props.userName,
            gender: "",
            introduction: "",
            favorite: [],
            gameItem: "",
            favoriteGamesLen: 0
        }
        this.selectGender = this.selectGender.bind(this);
    }
    
    modalToggle = () => {
        let mod = "updateModal";
        this.setState({ [mod]: !this.state[mod] });
    }
    selectGender = event => {
        this.setState( {gender: event.target.value} );
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    addGame = () => {
        if (this.state.gameItem) {
            let tempArr = this.state.favorite;
            tempArr.push(this.state.gameItem);
            this.setState( {favorite: tempArr, gameItem: ""} );
        }
    }
    handleUpdate = () => {
        console.log(this.state);
        this.modalToggle();
        let profileObj = {
            userName: this.props.userName,
            userImage: this.state.image,
            userGender: this.state.gender,
            userIntro: this.state.introduction,
            favoriteGames: JSON.stringify(this.state.favorite)
        };
        console.log(profileObj);
        API.updateProfile(sessionStorage.getItem("token"), profileObj).then(res => {
            console.log(res);
        }).catch(err => 
            console.log(err)
        );
        this.props.update(profileObj);
    }
    render() {
        return (
            <MDBContainer>
                <MDBBtn className="text-white" color="#d50000 red accent-4" style={{ color: "white", borderRadius: "30px", filter: "drop-shadow(10px 10px 9px #000000)" }} href="#" onClick={()=>this.modalToggle()}>Update </MDBBtn>

                <MDBModal isOpen={this.state.updateModal} toggle={()=>this.modalToggle()} size="lg">
                    <MDBModalHeader style={{ textAlign: "center", color: "black" }} toggle={()=>this.modalToggle()}> Update Your Profile </MDBModalHeader>
                    <MDBModalBody>
                        <MDBInput    
                            className="mb-2 mt-0"
                            name="image"
                            hint="Input Image URL"
                            onChange={this.handleInputChange}
                        />
                        <select  
                            className="mb-2 mt-0 browser-default custom-select"
                            name="gender"
                            onChange={this.selectGender}
                            value={this.state.gender}
                        >
                            <option value="Unknown">Choose your gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select> 
                        <MDBInput    
                            className="mb-2 mt-0"
                            name="introduction"
                            hint="Introduce yourself"
                            type="text"
                            onChange={this.handleInputChange}
                        />
                        <div className="mb-2 mt-0">
                            <MDBInput className="" name="gameItem" hint="Name of Games You Like" onChange={this.handleInputChange} value={this.state.gameItem}/>
                            <MDBBtn className="" onClick={this.addGame}>ADD</MDBBtn>
                            {this.state.favorite.map((element) => (
                                <GameTag name={element}  color="success"/>
                            ))}
                        </div>
                        
                    </MDBModalBody>

                    <MDBModalFooter>
                        <MDBBtn color="#01579b light-blue darken-4" onClick={() =>this.modalToggle()}>Close</MDBBtn>
                        <MDBBtn color="#d50000 red accent-4" onClick={()=>this.handleUpdate()}>Confirm</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        )
    }
}
