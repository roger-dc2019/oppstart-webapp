import React, { Component } from "react";

// Components
import TopDash from "../components/TopDash";
import BottomDash from "../components/BottomDash";

class DashBoard extends Component {
	render() {
		return (
			<React.Fragment>
				<TopDash />
				<BottomDash />
			</React.Fragment>
		);
	}
}

export default DashBoard;
