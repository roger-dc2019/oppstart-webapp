import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import Header from "../components/Header";
import HorizontalScroll from "../components/HorizontalScroll";

class StartHub extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<HorizontalScroll />
			</React.Fragment>
		);
	}
}

export default StartHub;
