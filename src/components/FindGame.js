import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import GamePanel from "./GamePanel";
import API from '../utils/API';
import GameModal from './GameModal';
import Slider from "react-slick";

export default class FindGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gamesToPlay: [],
            redirectPath: "/findgame",
            isLoggedIn: sessionStorage.getItem("isLoggedIn")
        };
    }
    componentDidMount = () => {
           this.loadGamesToPlay();
    }
    loadGamesToPlay = () => {
        API.getGames()
            .then((res) => {
                this.setState(
                    {
                        gamesToPlay: res.data
                    }
                )
                console.log(res);
                console.log(this.state.gamesToPlay);

            })
            .catch(function (error) {
                console.log(error)
            });

    }


    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 150,
            slidesToShow: 2,
            slidesToScroll: 1,
            slidePerRow: 1,
            centerMode: false,
            width: "300px"
        };
        return (
           <div>
                <div>
                <GameModal />
                </div>
           
           
           <MDBContainer style={{textgAlign:"center"}}>
            
           <MDBRow>
            <MDBCol sm="3">
            </MDBCol>
            <Slider {...settings} style={{width:"450px"}} >
            
            {this.state.gamesToPlay.map((data) =>
            (<GamePanel id={data.id} key={data.id} gameTitle={data.gameName} description={data.gameDescript} image={data.picture}  />))}
                
                
                </Slider>
                </MDBRow>
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
                
                </div> 
                )
            }
        }

