import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import TopDash from "../components/TopDash";
import BottomDash from "../components/BottomDash";

class DashBoard extends Component {
	render() {
		return (
			<React.Fragment>
				<TopDash />
				<a
					href='https://www.dnb.no/bedrift/puls.html'
					className='d-flex justify-content-center'
				>
					<button className='align-self-end btn puls-btn'>PULS</button>
				</a>
				<BottomDash />
			</React.Fragment>
		);
	}
}

export default DashBoard;
