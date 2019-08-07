import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import GamePanle from "./GamePanel";

export default function FindGame() {
    return (
        <MDBContainer>
            {/* <div>
                <img src="https://cdn.mapsinternational.co.uk/pub/media/catalog/product/cache/afad95d7734d2fa6d0a8ba78597182b7/w/o/world-wall-map-political-without-flags_wm00001_h.jpg" style={{width: "100%"}} />
            </div> */}
            <div>
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                <MDBBtn outline color="warning" rounded size="sm" type="submit" className="mr-auto">
                Search
                </MDBBtn>
            </div>
            <div className="border d-flex flex-row flex-wrap">
                <GamePanle />
                <GamePanle />
                <GamePanle />
                <GamePanle />
                <GamePanle />
                <GamePanle />
                <GamePanle />
            </div>
        </MDBContainer>
    )
}
