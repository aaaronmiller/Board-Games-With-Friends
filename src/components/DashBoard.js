import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { MDBContainer } from 'mdbreact';
import GameCard from "./GameCard";
import CreateModal from './CreateModal';
import API from '../utils/API';
import Slider from "react-slick";


export default class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOwner: true,
            grabbedGames: [],
            hostedGames: [],
            defaultGame: {
                id: "0",
                eventTitle: "none",
                description: "none",
                capacity: "none",
                location: "none"
            },
            redirectPath: "/dashboard",
            isLoggedIn: sessionStorage.getItem("isLoggedIn")
        };
        this.loadRegistedGames();
    }
    // componentDidMount = () => {
    //     // this.renderRedirect();
    //     this.loadRegistedGames();
    // }
    // renderRedirect = () => {
    //     console.log("redirect");
    //     if (!this.state.isLoggedIn)
    //         this.setState({ redirectPath: "/" });
    // }
    loadRegistedGames = () => {
        API.getEvents ()
            .then((Response) => {
                this.setState(
                    {
                        grabbedGames: Response.data
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
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 5
          };
        return (

            <span>
            <MDBContainer>
            <h1 className="text-white" style={{textAlign: "center"}}>
            Upcoming Games
            {/*<CreateModal handleLoad={this.loadRegistedGames} />*/}
            <CreateModal />
            </h1>
            
            <span className="d-flex flex-row flex-wrap">
            <Slider {...settings}>
            <h2> Multiple items </h2>
                          
                      {this.state.grabbedGames ? 
                            (
                                <span>
                                {this.state.grabbedGames.map((data) => 
                                    (<GameCard id={data.id} key={data.id} eventTitle={data.eventTitle} description={data.description} location={data.location} capacity={data.capacity} />))}
                                </span>)
                                    : 
                                (<span>
                                    {this.state.defaultGame.map((data) => 
                                        (<GameCard id={data.id} key={data.id} eventTitle={data.eventTitle} description={data.description} location={data.location} capacity={data.capacity} />))}
                                </span>)
                                    }    
                                    
                                    </Slider>
                                    </span>
                                    </MDBCo ntainer>
                                  </span>
                                  
                                  
                                  )
    }

}

