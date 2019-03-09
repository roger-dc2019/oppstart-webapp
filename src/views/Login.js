import React, { Component } from "react";

// Components
import LoginForm from "../components/LoginForm";

class Login extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='loggInn h-90vh'>
					<div className='row h-100 justify-content-center align-items-center'>
						<div className='col-12'>
							<LoginForm />
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Login;
