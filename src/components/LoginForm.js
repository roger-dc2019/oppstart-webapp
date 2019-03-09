import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginForm extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='d-flex justify-content-center'>
					<div className='card shadow-lg p-3 mb-5 bg-white rounded'>
						<form className='card-body'>
							<div className='form-group'>
								<label for='username'>Brukernavn</label>
								<input
									type='text'
									className='form-control'
									id='username'
									placeholder='Brukernavn'
								/>
							</div>
							<div className='form-group'>
								<label for='password'>Passord</label>
								<input
									type='password'
									className='form-control'
									id='password'
									placeholder='Passord'
								/>
							</div>
							<Link to='/dashboard'>
								<button className='btn login-btn'>Logg inn</button>
							</Link>
						</form>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default LoginForm;
