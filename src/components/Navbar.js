import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";

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
    isLoggedIn = () => {
        if (this.props.isLoggedIn) {
            return (
                <MDBNavItem>
                    <MDBNavLink to="/" onClick={this.logOut}>
                        Log Out
                    </MDBNavLink>
                </MDBNavItem>
            )
        }
    }

    render() {
        return (
            <div>
                <MDBNavbar color="#283593 indigo darken-3" dark expand="md">
                    <MDBNavbarBrand>
                        <Link className="navbar-brand" to="/">
                            <img src="https://i.ibb.co/yXrwR6V/bgwf.jpg" alt="" />
                        </Link>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav right>
                            <MDBNavItem>
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
                            <MDBNavItem>

                                {this.props.isLoggedIn &&
                                    <span>
                                        <MDBNavLink to="/profile">
                                            <i className="far fa-address-card"></i>
                                            Profile
                                        </MDBNavLink>

                                        <MDBNavItem>
                                            <MDBNavLink to="/" onClick={this.logOut}>
                                                Log Out
                                            </MDBNavLink>
                                        </MDBNavItem>
                                    </span>
                                }
                            </MDBNavItem>

                            {/*}      {this.isLoggedIn()}

                             <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <span className="mr-2">Dropdown</span>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem> */}
                        </MDBNavbarNav>
                        {/* <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBFormInline waves>
                                    <div className="md-form my-0">
                                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                                    </div>
                                </MDBFormInline>
                            </MDBNavItem>
                        </MDBNavbarNav> */}
                    </MDBCollapse>
                </MDBNavbar>
            </div>
        );
    }
}

export default Navbar;