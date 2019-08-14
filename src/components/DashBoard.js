import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { MDBContainer, MDBRow } from 'mdbreact';
import GameCard from "./GameCard";
import CreateModal from './CreateModal';
import API from '../utils/API';
import Eventload from './eventload';


const DashBoard =({props}) => {
        return (

            <div>
                <MDBContainer>
                    <div>
                        <h1 className="text-white" style={{textAlign: "center"}}>
                          Upcoming Games
                        {/*<CreateModal handleLoad={this.loadRegistedGames} />*/}
                        <CreateModal />
                        </h1>
                                <Eventload />
                    </div>
                </MDBContainer>

            </div>
        )
    

}

export default DashBoard

