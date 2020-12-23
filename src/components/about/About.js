import React, { useEffect, useState } from 'react'
import './About.css'
import me from '../../resources/me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faUserCircle, faInbox, faMapMarkerAlt, faUniversity, faHiking } from '@fortawesome/free-solid-svg-icons'

function About(props) {

	const [isMobile, setMobile] = useState(false);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setMobile(window.innerWidth < 770);
		}, false);
	});

	return (
		<div id={props.name}>
			<div className="container mt-5">
				<div className="row mt-4 mt-md-5">
					<h1 className="w-100 text-center mt-4">About Me</h1>
				</div>
				<div className={(isMobile ? "" : "about-container ") + "row mt-0 mt-md-3 ml-sm-0 ml-md-5 pb-3"}>
					<div className="col-md-4 col-sm-12">
						<img src={me} width="300" height="300" className="about-me d-block mx-auto" alt="zanwei's portrait" />
						<div className="row mt-4 ml-1 p-2">
							<div className="mx-auto">
								<a href="https://www.linkedin.com/in/chong-zan-wei-56312a91/" target="_blank" rel="noreferrer" id="about-linkedin" className="about-socials">
									<FontAwesomeIcon icon={faLinkedin} size="3x" pull="left" />
								</a>
								<a href="https://www.facebook.com/Seanczw/" target="_blank" rel="noreferrer" id="about-facebook" className="about-socials">
									<FontAwesomeIcon icon={faFacebook} size="3x" pull="left" />
								</a>
								<a href="https://www.instagram.com/seanczw/" target="_blank" rel="noreferrer" id="about-insta" className="about-socials">
									<FontAwesomeIcon icon={faInstagram} size="3x" pull="left" />
								</a>
							</div>
						</div>
					</div>
					<div className="col ml-5 my-5 my-md-3">
						<div className="row py-1 pl-2 w-50 bg-dark text-white rounded">
							<FontAwesomeIcon icon={faUserCircle} pull="left" />
							<small>name</small>
						</div>
						<div className="row mt-2 pl-2"><h5>Chong Zan-Wei</h5></div>
						<div className="row py-1 pl-2 w-50 bg-dark text-white rounded">
							<FontAwesomeIcon icon={faInbox} pull="left" />
							<small>email</small>
						</div>
						<div className="row mt-2 pl-2"><h5>seanczw@gmail.com</h5></div>
						<div className="row py-1 pl-2 w-50 bg-dark text-white rounded">
							<FontAwesomeIcon icon={faMapMarkerAlt} pull="left" />
							<small>current location</small>
						</div>
						<div className="row mt-2 pl-2"><h5>Petaling Jaya, Selangor, Malaysia</h5></div>
						<div className="row py-1 pl-2 mt-3 w-75 bg-dark text-white rounded">
							<FontAwesomeIcon icon={faUniversity} pull="left" />
							<small>education</small>
						</div>
						<div className="row mt-2 pl-2"><small><i>May 2012 - May 2016</i></small></div>
						<div className="row pl-2"><small><i>University Tunku Abdul Rahman (UTAR)</i></small></div>
						<div className="row pl-2">
							<h5>Bachelor of Computer Science (HONS)</h5>
							<i className="pl-2">CGPA: 3.1000</i>
						</div>
						<div className="row py-1 pl-2 mt-3 w-75 bg-dark text-white rounded">
						<FontAwesomeIcon icon={faHiking} pull="left" />
							<small>experience</small>
						</div>
						<div className="row mt-2 pl-2">
							<small><i>June 2016 - October 2016</i></small>
						</div>
						<div className="row pl-2">
							<h5 className="m-0">Intern Developer -</h5>
							<a href="https://www.lintramax.com/" target="_blank" rel="noreferrer" className="col-md-6 col-sm-12 pl-1 pt-md-1 pt-sm-0 text-decoration-none">
								<small><i>LintraMax (M) Sdn. Bhd.</i></small>
							</a>
						</div>
						<div className="row mt-2 pl-2">
							<small><i>November 2016 - December 2020</i></small>
						</div>
						<div className="row pl-2">
							<h5 className="m-0">Web Developer -</h5>
							<a href="http://www.cyber-village.net/" target="_blank" rel="noreferrer" className="col-md-6 col-sm-12 pl-1 pt-md-1 pt-sm-0 text-decoration-none">
								<small><i>Cyber Village Sdn. Bhd.</i></small>
							</a>
						</div>
						<div className="row mt-2 pl-2">
							<small><i>... Starting January 2021</i></small>
						</div>
						<div className="row pl-2">
							<h5 className="m-0">Software Engineer -</h5>
							<a href="https://www.kerrylogistics.com/" target="_blank" rel="noreferrer" className="col-md-6 col-sm-12 pl-1 pt-md-1 pt-sm-0 text-decoration-none">
								<small><i>Kerry Logistics Network Services Sdn. Bhd.</i></small>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;