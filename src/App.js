import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/DashBoard";
import FindGame from "./components/FindGame";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./Routes";

class App extends Component {
  state = {

  };
  


  render() {

    return (
      <Router>
        <div style={{
          backgroundImage:
            "url(https://i.ibb.co/BVy8Qwt/bluebb.jpg)",
       
        }}>
          <Navbar/>
          <Switch>
            <div>
              <Route exact path="/Board-Games-With-Friends/" component={Login} />
              <Route exact path="/sign-up" component={SignUp} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/find-game" component={FindGame} />
            </div>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
