import React, { Component }  from 'react';
import { Redirect } from "react-router-dom";
import { MDBBtn, MDBContainer } from 'mdbreact';
import GameCard from "./GameCard";
import CreateModal from './CreateModal';
import API from '../utils/API';


export default class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grabbedGames: [],
            hostedGames: [],
            redirectPath: "/dashboard",
            isLoggedIn: sessionStorage.getItem("isLoggedIn")
        };
      }
    componentDidMount = () => {
        this.renderRedirect();
        this.loadHostedGames();
    }
    renderRedirect = () => {
        console.log("redirect");
        if (!this.state.isLoggedIn)
            this.setState({ redirectPath: "/" });
    }
    loadRegistedGames = () => {
        API.getAllEvents()
        .then((Response) =>
        {
            this.setState(
                {
                    hostedGames: Response.data
                }
            )
            console.log(Response);
        console.log(this.state.hostedGames);

        })
        .catch(function(error){
            console.log(error)
        });

    }
    
    loadHostedGames = () => {
        API.getHostedEvents(sessionStorage.getItem("token"))
        .then((Response) =>
        {
            this.setState(
                {
                    hostedGames: Response.data
                }
            )
            console.log(Response);
        console.log(this.state.hostedGames);

        })
        .catch(function(error){
            console.log(error)
        });
    }
    render() {
        return (
            <div>
            <MDBContainer>

            <div>
            <h1 className="text-white">Upcoming Games
            <CreateModal handleLoad={this.loadRegistedGames}/></h1>
            <div className="d-flex flex-row flex-wrap">
            {this.state.hostedGames.map((data)=> 
                (<GameCard  key={data.id} eventTitle={data.eventTitle} description={data.description} location={data.location} capacity ={data.capacity} isOwner={true}/>))}
                
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
            <Redirect to={this.state.redirectPath} />
            </div>
        )
    }

}
