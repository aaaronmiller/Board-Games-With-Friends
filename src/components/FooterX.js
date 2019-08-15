import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBContainer} from "mdbreact";

class FooterX extends Component{
    render() {
        return(
            <div className="fixed-bottom">  
                <MDBNavbar color="dark" dark>
                    <MDBContainer>
                        <MDBNavbarBrand>.</MDBNavbarBrand>
                    </MDBContainer>
                </MDBNavbar>
            </div>
        )
    }
}

export default FooterX;
