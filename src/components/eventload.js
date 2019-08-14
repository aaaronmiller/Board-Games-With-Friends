import React, { Component } from 'react';
import GameCard from "./GameCard";
import API from '../utils/API';
import Slider from "react-slick";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';

export default class Eventload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOwner: true,
            gorm: false,
            grabbedGames: [],
            hostedGames: [],
            defaultGame: [{
                id: "0",
                eventTitle: "none",
                description: "none",
                capacity: "none",
                location: "none"
            }],
            redirectPath: "/dashboard",
            isLoggedIn: sessionStorage.getItem("isLoggedIn"),
            userName: sessionStorage.getItem("userName")
        };
        // this.loadRegistedGames();
    }

  componentDidMount() {
    this.loadRegistedGames();
  }

    loadRegistedGames = () => {
        API.getEvents()
            .then((Response) => {
                this.setState(
                    {
                        grabbedGames: Response.data,
                        gorm: true
                    }
                )
                console.log(Response);
                console.log(this.state.grabbedGames);
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
            <MDBContainer>
            <MDBRow>
            <MDBCol sm="3">
            </MDBCol>
            <Slider {...settings} style={{width:"450px"}}>
            
         
            {this.state.grabbedGames.map((data) =>
                
                <GameCard id={data.id} key={data.id} eventTitle={data.eventTitle} 
                gameName={data.gameName}   
                description={data.description} location={data.location} maxPlayers={data.maxPlayers}
                dateTime={data.dateTime}
                />
                
                ) }
                
           
                
              
                </Slider >
                </MDBRow>
                </MDBContainer>          
                );
            }
        }
