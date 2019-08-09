import React, { Component }  from 'react';
import { MDBBtn, MDBContainer } from 'mdbreact';
import GameCard from "./GameCard";
import CreateModal from './CreateModal';
import API from '../utils/API';


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
        API.loadGameEvents()
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
            <h1 className="text-white">Upcoming Games
            <MDBBtn color="#d50000 red accent-4" style={{ color: "white", marginLeft: "340px" }} href="#"  onClick={this.handleSubmit}>Create a Game</MDBBtn></h1>
            <div className="d-flex flex-row flex-wrap">
            {this.state.grabbedGames.map((data)=> 
                (<GameCard  key={data.id} eventTitle={data.eventTitle} description={data.description} location={data.location} capacity ={data.capacity}/>))}
                <CreateModal />
                    {/* </div>x x */}
                </div>
                {/* <div>
                <h1 className="text-white">Hosted Games</h1>

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
