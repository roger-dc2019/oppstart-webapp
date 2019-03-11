import React, { Component } from "react";

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
