import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/DashBoard";
import FindGame from "./components/FindGame";
import News from "./components/News";
import Profile from "./components/Profile";
import Test from "./components/test";
import Test2 from "./components/test2";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./Routes";

  class App extends Component {
  state = {
    isLoggedIn: sessionStorage.getItem("isLoggedIn")
  };
  logIn = () => {
    this.setState({isLoggedIn: true});
  }
  logOut = () => {
    this.setState({isLoggedIn: false});
  }
  render() {

    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div style={{
          backgroundImage:
            "url(https://i.ibb.co/BVy8Qwt/bluebb.jpg)",
       
        }}>
          <Navbar isLoggedIn={this.state.isLoggedIn} handleLogOut={this.logOut}/>
          <Switch>
            <div>
              <Route exact path="/" render={() => <Login handleLogIn={this.logIn} />} />
              <Route exact path="/signUp" component={SignUp} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/find-game" component={FindGame} />
              <Route exact path="/news" component={News} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/test" component={Test} />
              <Route exact path="/test2" component={Test2} />
              
            </div>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
