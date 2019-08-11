import React, { Component } from 'react';
import { MDBContainer } from "mdbreact";
import GamePanel from "./GamePanel";
import API from '../utils/API';

export default class FindGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grabbedGames: [],
            redirectPath: "/findgame",
            isLoggedIn: sessionStorage.getItem("isLoggedIn")
        };
    }
    componentDidMount = () => {
           this.loadGamesToPlay();
    }
    loadGamesToPlay = () => {
        API.getGames()
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
            <MDBContainer>

                <div className="d-flex flex-row flex-wrap">
                    {this.state.grabbedGames.map((data) =>
                        (<GamePanel key={data.id} gameTitle={data.gameName} description={data.gameDescript} image={data.picture} timesPlayed={data.totalTimesPlayed} maxPlayers={data.maxOfPlayers} />))}

                </div>


            </MDBContainer>
        )
    }
}