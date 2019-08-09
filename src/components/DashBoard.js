import React, { Component }  from 'react';
import { MDBBtn, MDBContainer } from 'mdbreact';
import GameCard from "./GameCard";
import CreateModal from './CreateModal';
import Axios from 'axios';


export default class DashBoard extends Component {
    state = {
        RegistedGames: [],
        HostedGames: []
    }
    ComponentdidMount = () => {
        
    }

    loadRegistedGames = () => {
        // Axios.post()
        // {
        //     token: sessionStorage.getItem(token)
        // }
    }
    
    loadHostedGames = () => {
    
    }
    render() {
        return (
            <MDBContainer>
                <div>
                    <h1 className="text-white">Upcoming Games
                    <MDBBtn color="#d50000 red accent-4" style={{ color: "white", marginLeft: "340px" }} href="#"  onClick={this.handleSubmit}>Create a Game</MDBBtn></h1>
                    <div className="d-flex flex-row flex-wrap">
                        {/* <GameCard />
                        <GameCard />
                        <GameCard />
                        <GameCard />
                        <GameCard /> */}

                    </div>
                </div>
                <div>
                <h1 className="text-white">Hosted Games</h1>
                    <div className="d-flex flex-row flex-wrap">
                        <GameCard />
                        <GameCard />
                        <GameCard />
                        <GameCard />
                        <GameCard />
                    </div>
                </div>
            </MDBContainer>
        )
    }
}
