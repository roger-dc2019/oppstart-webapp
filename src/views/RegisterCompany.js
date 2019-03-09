import React, { Component } from "react";

// Assets
import o_logo from "../assets/img/logo.png";

class RegisterCompany extends Component {
	render() {
		return (
			<React.Fragment>
				<section className='dnb-light h-90vh'>
					<div className='row h-100 justify-content-center align-items-center'>
						<div className='col-12'>
							<div className='text-center'>
								<img src={o_logo} width='200px' alt='Oppstart logo' />
								<br />
								<div className='spinner-border' role='status'>
									<span className='sr-only'>Loading...</span>
								</div>
								<h4>Venter på tilkobling..</h4>
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default RegisterCompany;
