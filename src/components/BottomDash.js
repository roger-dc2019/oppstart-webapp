import React, { Component } from "react";

import o_logo from "../assets/img/dnb_logo.png";

class BottomDash extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='h-60vh'>
					<div className='row'>
						<div className='col-8'>
							<div className='container'>
								<h2 className='darkText pt-3 header-font'>
									Statistikk & Management
								</h2>
								<div className='progress'>
									<div
										className='progress-bar hei'
										role='progressbar'
										width='25%'
										aria-valuenow='25'
										aria-valuemin='0'
										aria-valuemax='100'
									>
										{
											"_____________________________________________________________________________________________"
										}
										<span className='darkText'>Din fremgang</span>
										{
											"_____________________________________________________________________________________________"
										}
									</div>
								</div>
								<div className='row h-100 justify-content-center align-items-center'>
									<div className='col-12'>
										<div className='text-center logo'>
											<img src={o_logo} width='200px' alt='Oppstart logo' />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='col-4 h-60vh'>
							<div className='container'>
								<h2 className='darkText pt-3 header-font'>Varsler</h2>
								<div className='alert alert-success' role='alert'>
									<u>Årsregnskap</u> er fullført!{" "}
									<i className='fa fa-minus-circle float-right' />
								</div>
								<div className='alert alert-secondary' role='alert'>
									<u>Topp Media</u> har sendt deg en melding.{" "}
									<i className='fa fa-minus-circle float-right' />
								</div>
								<div className='alert alert-danger' role='alert'>
									<u>Årsregnskap</u> er fullført!{" "}
									<i className='fa fa-minus-circle float-right' />
								</div>
								<div className='alert alert-secondary' role='alert'>
									<u>Årsregnskap</u> er fullført!{" "}
									<i className='fa fa-minus-circle float-right' />
								</div>
								<div className='alert alert-secondary' role='alert'>
									<u>Årsregnskap</u> er fullført!{" "}
									<i className='fa fa-minus-circle float-right' />
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
