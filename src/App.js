import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Static Components
import NavBar from "./components/NavBar";

// Views
import Home from "./views/Home";
import DashBoard from "./views/DashBoard";
import RegisterCompany from "./views/RegisterCompany";
import Login from "./views/Login";
import StartHub from "./views/StartHub";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<NavBar
					loggedIn={
						window.location.pathname === "/dashboard" ||
						window.location.pathname === "/startHub"
					}
					dashBoard={window.location.pathname !== "/dashboard"}
				/>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/dashboard' component={DashBoard} />
					<Route path='/getStarted' component={RegisterCompany} />
					<Route path='/login' component={Login} />
					<Route path='/startHub' component={StartHub} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default App;
