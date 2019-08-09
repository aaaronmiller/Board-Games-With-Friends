import React, { Component }  from 'react';
import { MDBBadge, MDBContainer } from "mdbreact";
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
                    <h1><MDBBadge color="primary">My</MDBBadge> Upcoming Game</h1>
                    <div className="d-flex flex-row flex-wrap">
                        {/* <GameCard />
                        <GameCard />
                        <GameCard />
                        <GameCard />
                        <GameCard /> */}

                    </div>
                </div>
                <div>
                    <h1><MDBBadge color="primary">My</MDBBadge> Hosted Game  <CreateModal /></h1>
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
