import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { MDBContainer } from 'mdbreact';
import GameCard from "./GameCard";
import CreateModal from './CreateModal';
import API from '../utils/API';


export default class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOwner: true,
            grabbedGames: [],
            HostedGames: [],
            redirectPath: "/dashboard",
            isLoggedIn: sessionStorage.getItem("isLoggedIn")
        };
    }
    componentDidMount = () => {
        // this.renderRedirect();
        this.loadRegistedGames();
    }
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
        return (
            <div>
                <MDBContainer>
                    <div>
                        <h1 className="text-white" style={{textAlign: "center"}}>
                          Upcoming Games
                        {/*<CreateModal handleLoad={this.loadRegistedGames} />*/}
                        <CreateModal />
                        </h1>
                        <div className="d-flex flex-row flex-wrap">
                            {this.state.grabbedGames.map((data) => 
                                (<GameCard id={data.id} key={data.id} eventTitle={data.eventTitle} description={data.description} location={data.location} capacity={data.capacity} />))}

                        </div>
                    </div>
                </MDBContainer>

            </div>
        )
    }

}
