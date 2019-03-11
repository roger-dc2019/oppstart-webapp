import React, { Component } from "react";

class CompanyCard extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='card card-oppstart shadow-sm'>
					<img
						src={this.props.companyLogo}
						className='card-img-top'
						alt='...'
					/>
					<div className='card-body card-O'>
						<p className='card-text lightText'>{this.props.companyName}</p>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default CompanyCard;
