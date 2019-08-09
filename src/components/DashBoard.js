import React, { Component }  from 'react';
import { MDBBtn, MDBContainer } from 'mdbreact';
import GameCard from "./GameCard";
import CreateModal from './CreateModal';
import Axios from 'axios';


export default class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grabbedGames: [],
            HostedGames: [],
            isLoggedIn: sessionStorage.getItem("isLoggedIn")
        };
        this.loadRegistedGames();
      }

    ComponentdidMount = () => {
        
    }

    loadRegistedGames = () => {
        Axios.get("https://arcane-spire-45572.herokuapp.com/api/gameEvents")
        .then((Response) =>
        {
            this.setState(
                {
                    grabbedGames: Response.data
                }
            )
            console.log(Response);
        console.log(this.state.grabbedGames);

        })
        .catch(function(error){
            console.log(error)
        });

    }
    
    loadHostedGames = () => {
    
    }
    render() {
        return (
            <MDBContainer>
                <div>
                    <h1 className="text-white">Upcoming Games</h1>
                    <div className="d-flex flex-row flex-wrap">
                    {this.state.grabbedGames.map((data) => <GameCard  key={data.id} eventTitle={data.eventTitle} description={data.description} location={data.location} capacity ={data.capacity} />)}
                    </div>
                </div>
                <div>
                <h1 className="text-white">Hosted Games<CreateModal /></h1>
                    {/* <div className="d-flex flex-row flex-wrap">
                        <GameCard />
                        <GameCard />
                        <GameCard />
                        <GameCard />
                        <GameCard />
                    </div> */}
                </div>
            </MDBContainer>
        )
    }
}
