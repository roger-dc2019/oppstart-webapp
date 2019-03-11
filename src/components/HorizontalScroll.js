import React, { Component } from "react";
import faker from "faker";

// Assets
import swiss from "../assets/img/swiss.png";
import netflix from "../assets/img/netflix.png";
import amazon from "../assets/img/amazon.png";
import apple from "../assets/img/apple.png";
import amd from "../assets/img/amd.png";
import snap from "../assets/img/snapchat.png";
import mastercard from "../assets/img/mastercard.png";
import tesla from "../assets/img/tesla.png";

// Components
import CompanyCard from "./CompanyCard";

class HorizontalScroll extends Component {
	render() {
		return (
			<React.Fragment>
				<section>
					<div className='h-60vh'>
						<div className='py-5 leftPadding'>
							<h2 className='lightText header-font'>Populære bedrifter</h2>
							<div className='live__scroll'>
								<div className='row text-center'>
									<div className='col-2 live__scroll--box'>
										<CompanyCard companyLogo={tesla} companyName={"Tesla"} />
									</div>
									<div className='col-2 live__scroll--box'>
										<CompanyCard
											companyLogo={swiss}
											companyName={"SWISS Air Lines"}
										/>
									</div>
									<div className='col-2 live__scroll--box'>
										<CompanyCard
											companyLogo={netflix}
											companyName={"Netflix"}
										/>
									</div>
									<div className='col-2 live__scroll--box'>
										<CompanyCard companyLogo={snap} companyName={"Snapchat"} />
									</div>
									<div className='col-2 live__scroll--box'>
										<CompanyCard
											companyLogo={mastercard}
											companyName={"Mastercard"}
										/>
									</div>
									<div className='col-2 live__scroll--box'>
										<CompanyCard companyLogo={amazon} companyName={"Amazon"} />
									</div>
									<div className='col-2 live__scroll--box'>
										<CompanyCard companyLogo={amd} companyName={"AMD"} />
									</div>
									<div className='col-2 live__scroll--box'>
										<CompanyCard companyLogo={apple} companyName={"Apple"} />
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
