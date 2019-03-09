import React, { Component } from "react";
import { Link } from "react-router-dom";

import O_logo from "../assets/img/logo.png";

class NavBar extends Component {
	render() {
		return (
			<nav className='navbar navbar-expand-lg navbar-light bg-light h-10vh'>
				<Link to='/' className='navbar-brand'>
					<img src={O_logo} width='50px' alt='Oppstart logo' />
				</Link>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav mr-auto'>
						<li className='nav-item'>
							<Link to='/dashboard' className='nav-link'>
								{this.props.loggedIn ? "Dashbord" : ""}
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/startHub' className='nav-link'>
								StartHub
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/' className='nav-link'>
								Lær mer
							</Link>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='http://www.dnb.no'>
								<u>Tilbake til DnB</u>
							</a>
						</li>
					</ul>
					<Link to='/login' className='my-2 my-lg-0'>
						<button className='btn login-btn my-2 my-sm-0'>
							{this.props.loggedIn ? "Logg ut" : "Logg inn"}
						</button>
					</Link>
				</div>
			</nav>
		);
	}
}

export default NavBar;
