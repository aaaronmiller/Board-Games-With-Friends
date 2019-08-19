import React from 'react';
import { MDBContainer } from 'mdbreact';
import CreateModal from './CreateModal';
import Eventload from './eventload';
// import GameCard from "./GameCard";
// import API from '../utils/API';
// import { Redirect } from "react-router-dom";


const DashBoard = ({ props }) => {
    return (
        <div>
            <MDBContainer>
                <div>
                    <h1 className="text-white" style={{ textAlign: "center" }}>
                        Upcoming Games<br />
                          <CreateModal />
                    </h1>
                            <Eventload />
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </MDBContainer>
        </div>
    )
}

export default DashBoard

