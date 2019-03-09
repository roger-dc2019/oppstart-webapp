import React, { Component } from "react";

class BottomDash extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='h-60vh'>
					<div className='row'>
						<div className='col-8'>
							<div className='container'>
								<h2 className='darkText pt-3'>Noe artig må jo være her</h2>
							</div>
						</div>
						<div className='col-4 h-60vh'>
							<div className='container'>
								<h2 className='darkText pt-3'>Varsler</h2>
								<div className='alert alert-primary' role='alert'>
									This is a primary alert—check it out!
								</div>
								<div className='alert alert-secondary' role='alert'>
									This is a secondary alert—check it out!
								</div>
								<div className='alert alert-danger' role='alert'>
									This is a success alert—check it out!
								</div>
								<div className='alert alert-success' role='alert'>
									This is a success alert—check it out!
								</div>
								<div className='alert alert-danger' role='alert'>
									This is a success alert—check it out!
								</div>
								<div className='alert alert-success' role='alert'>
									This is a success alert—check it out!
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default BottomDash;
