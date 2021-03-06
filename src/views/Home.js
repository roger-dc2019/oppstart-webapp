import React, { Component } from "react";
import { Link } from "react-router-dom";

// Assets
import dnb_logo from "../assets/img/dnb_logo.png";
import o_logo from "../assets/img/logo.png";

class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<section>
					<div className='dnb-light h-45vh'>
						<div className='container h-100'>
							<div className='row h-100 justify-content-center align-items-center'>
								<div className='col-12'>
									<div className='text-center'>
										<img src={dnb_logo} width='350px' alt='DNB logo' />
									</div>
									<div class='text-center my-5'>
										<h1 className='darkText header-font'>O for Oppstart</h1>
										<h5 className='contrastText subtitle-text'>
											For bedrifter som vil ligge ett steg forran.
										</h5>
									</div>
								</div>
							</div>
						</div>
						<Link to='/getStarted' className='d-flex justify-content-center'>
							<button className='align-self-end btn start-btn'>
								<img src={o_logo} width='25px' alt='Oppstart logo' />
								Start bedrift
							</button>
						</Link>
					</div>

					<div className='h-45vh'>
						<div className='container h-100'>
							<div className='row h-100 justify-content-center align-items-center'>
								<div className='col-12'>
									<div className='d-flex justify-content-center'>
										<div className='card bg-light mb-3 card-oppstart float-left mx-auto shadow-lg'>
											<div className='card-header subtitle-font'>
												Start bedrift på 5 minutter
											</div>
											<div className='card-body'>
												<h5 className='card-title header-font lightText'>
													Last ned <u>Oppdrift</u>
												</h5>
												<p className='card-text darkText'>
													Some quick example text to build on the card title and
													make up the bulk of the card's content.
												</p>
											</div>
										</div>
										<div className='card bg-light mb-3 card-oppstart float-left mx-auto shadow-lg'>
											<div className='card-header subtitle-font'>
												Markedsplass for startups
											</div>
											<div className='card-body'>
												<h5 className='card-title header-font lightText'>
													Besøk <u>StartHub</u>
												</h5>
												<p className='card-text darkText'>
													Some quick example text to build on the card title and
													make up the bulk of the card's content.
												</p>
											</div>
										</div>
										<div className='card bg-light mb-3 card-oppstart float-left mx-auto shadow-lg'>
											<div className='card-header subtitle-font'>
												La selskapet vokse
											</div>
											<div className='card-body'>
												<h5 className='card-title header-font lightText'>
													O for <u>Oppstart</u>
												</h5>
												<p className='card-text darkText'>
													Some quick example text to build on the card title and
													make up the bulk of the card's content.
												</p>
											</div>
										</div>
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

export default Home;
