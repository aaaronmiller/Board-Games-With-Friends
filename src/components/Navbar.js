import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBNavbar, MDBCol, MDBRow, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import Media from 'react-media';

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
        };
    }
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    logOut = () => {
        sessionStorage.clear();
        this.props.handleLogOut();
    }

    // Legacy Code : this function is handled with a && instead, delete on 8/10
    //   |
    //   |
    //           V
    // isLoggedIn = () => {
    //     if (this.props.isLoggedIn) {
    //         return (
    //             <MDBNavItem>
    //                 <MDBNavLink to="/" onClick={this.logOut}>
    //                     Log Out
    //                 </MDBNavLink>
    //             </MDBNavItem>
    //         )
    //     }
    // }

    render() {
        return (
            <div>
                <MDBNavbar color="#283593 indigo darken-3" dark expand="md">
                    <MDBNavbarBrand>
                     <Media query="(max-width: 599px)">
                     {matches =>
                      matches ? (
                        <Link className="navbar-brand containerFluid" to="/">
                            <img className="containerFluid" src="https://i.ibb.co/yF7HS8y/bgwf-small.jpg" alt="Board Games with Friends" />
                         </Link>
                       ) : (
                            <Link className="navbar-brand containerFluid" to="/">
                                <img className="containerFluid" src="https://i.ibb.co/yXrwR6V/bgwf.jpg" alt="Board Games with Friends" />
                            </Link>
                       ) }
                        </Media>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav right>
                            <MDBNavItem active>
                                <MDBNavLink to="/"><i className="fas fa-home"></i>
                                    Home
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/dashboard">
                                    <i className="fas fa-chess-rook"></i>
                                    My Game
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/find-game">
                                    <i className="fas fa-chess-knight"></i>
                                    Find A Game
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/news">
                                    <i className="far fa-newspaper"></i>
                                    News
                                 </MDBNavLink>
                            </MDBNavItem>
                            {this.props.isLoggedIn &&
                                <MDBNavItem>
                                    <MDBNavLink to="/profile">
                                        <i className="far fa-address-card"></i>
                                        Profile
                                    </MDBNavLink>
                                </MDBNavItem>
                            }
                            {this.props.isLoggedIn &&
                                <MDBNavItem>
                                    <MDBNavLink to="/" onClick={this.logOut}>
                                        Log Out
                                    </MDBNavLink>
                                </MDBNavItem>
                            }
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </div>
        );
    }
}

export default Navbar;