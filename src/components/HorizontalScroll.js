import React, { Component } from "react";
import faker from "faker";

// Components
import CompanyCard from "./CompanyCard";

class HorizontalScroll extends Component {
	render() {
		return (
			<React.Fragment>
				<section>
					<div className='h-60vh'>
						<div className='py-5 leftPadding'>
							<h2 className='lightText'>Populære bedrifter</h2>
							<div className='live__scroll'>
								<div className='row text-center'>
									<div className='col-2 live__scroll--box'>
										<CompanyCard
											companyLogo={faker.image.nature()}
											companyName={faker.company.companyName()}
										/>
									</div>
									<div className='col-2 live__scroll--box'>
										<CompanyCard
											companyLogo={faker.image.transport()}
											companyName={faker.company.companyName()}
										/>
									</div>
									<div className='col-2 live__scroll--box'>
										<CompanyCard
											companyLogo={faker.image.nightlife()}
											companyName={faker.company.companyName()}
										/>
									</div>
									<div className='col-2 live__scroll--box'>
										<CompanyCard
											companyLogo={faker.image.food()}
											companyName={faker.company.companyName()}
										/>
									</div>
									<div className='col-2 live__scroll--box'>
										<CompanyCard
											companyLogo={faker.image.fashion()}
											companyName={faker.company.companyName()}
										/>
									</div>
									<div className='col-2 live__scroll--box'>
										<CompanyCard
											companyLogo={faker.image.city()}
											companyName={faker.company.companyName()}
										/>
									</div>
									<div className='col-2 live__scroll--box'>
										<CompanyCard
											companyLogo={faker.image.cats()}
											companyName={faker.company.companyName()}
										/>
									</div>
									<div className='col-2 live__scroll--box'>
										<CompanyCard
											companyLogo={faker.image.business()}
											companyName={faker.company.companyName()}
										/>
									</div>
									<div className='col-2 live__scroll--box'>
										<CompanyCard
											companyLogo={faker.image.avatar()}
											companyName={faker.company.companyName()}
										/>
									</div>
									<div className='col-2 live__scroll--box'>
										<CompanyCard
											companyLogo={faker.image.animals()}
											companyName={faker.company.companyName()}
										/>
									</div>
									<div className='col-2 live__scroll--box'>
										<CompanyCard
											companyLogo={faker.image.abstract()}
											companyName={faker.company.companyName()}
										/>
									</div>
									<div className='col-2 live__scroll--box'>
										<CompanyCard
											companyLogo={faker.image.image()}
											companyName={faker.company.companyName()}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default HorizontalScroll;
