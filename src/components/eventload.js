import React, { Component } from 'react';
import GameCard from "./GameCard";
import API from '../utils/API';



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
            isLoggedIn: sessionStorage.getItem("isLoggedIn")
        };
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

        // const settings = {
        //     dots: true,
        //     infinite: true,
        //     speed: 500,
        //     slidesToShow: 3,
        //     slidesToScroll: 3
        // };
        return (
            // <Slider {...settings}>
            <div>
                {this.state.gorm ?
                    (
                        <span>
                            {this.state.grabbedGames.map((data) =>
                                (<GameCard id={data.id} key={data.id} eventTitle={data.eventTitle} description={data.description} location={data.location} capacity={data.capacity} />))}
                        </span>)
                    :
                    (<h1>no games yet</h1>)
                }
            </div>
            // </Slider>
        )
    }

}
