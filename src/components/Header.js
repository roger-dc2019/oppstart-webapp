import React, { Component } from "react";

// Assets
import o_logo from "../assets/img/logo.png";

class Header extends Component {
	render() {
		return (
			<section>
				<div className='dnb-light h-30vh'>
					<div className='container h-100'>
						<div className='row h-100 justify-content-center align-items-center'>
							<div className='col-12'>
								<div className='float-left mr-2'>
									<img src={o_logo} width='140px' alt='Oppstart logo' />
								</div>
								<div className='float-left pt-4'>
									<h1 className='darkText'>StartHub</h1>
									<h5 className='contrastText'>
										Hele Norges markedsplass for oppstartsbedrifter.
									</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Header;
