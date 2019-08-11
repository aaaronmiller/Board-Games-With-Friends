import React, { Component } from 'react';
import { MDBContainer } from "mdbreact";
import GamePanel from "./GamePanel";
import API from '../utils/API';
import GameModal from './GameModal';

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
            .then((Response) => {
                this.setState(
                    {
                        gamesToPlay: Response.data
                    }
                )
                console.log(Response);
                console.log(this.state.gamesToPlay);

            })
            .catch(function (error) {
                console.log(error)
            });

    }


    render() {
        return (
            <MDBContainer style={{textgAlign:"center"}}>
                <GameModal />
                <div className="d-flex flex-row flex-wrap">
                    {this.state.gamesToPlay.map((data) =>
                        (<GamePanel id={data.id} key={data.id} gameTitle={data.gameName} description={data.gameDescript} image={data.picture} timesPlayed={data.totalTimesPlayed} maxPlayers={data.maxOfPlayers} />))}

                </div>


            </MDBContainer>
        )
    }
}