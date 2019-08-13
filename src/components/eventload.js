import React, { Component } from 'react';
import GameCard from "./GameCard";
import API from '../utils/API';


export default class Eventload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOwner: true,
            grabbedGames: [],
            hostedGames: [],
            redirectPath: "/dashboard",
            isLoggedIn: sessionStorage.getItem("isLoggedIn")
        };
        this.loadRegistedGames();
    }

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

        return (

            <div>

                {this.state.grabbedGames.map((data) => 
                    (<GameCard id={data.id} key={data.id} eventTitle={data.eventTitle} description={data.description} location={data.location} capacity={data.capacity} />))}

            </div>
        )
    }

}
