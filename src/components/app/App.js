import React, { useEffect, useState } from 'react';
import './App.css';
import logo from '../../resources/logo-dusty-pink.svg';
import About from '../about/About';
import Contact from '../contact/Contact';
import { Navbar, Nav } from 'react-bootstrap';
import * as Scroll from 'react-scroll';
import { Link, Events } from 'react-scroll';

function App() {

	const [isMobile, setMobile] = useState(false);

	let scroll = Scroll.animateScroll;
	let scrollSpy = Scroll.scrollSpy;

	useEffect(() => {
		window.addEventListener('resize', () => {
			setMobile(window.innerWidth < 1080);
		}, false);

		Events.scrollEvent.register("begin", function() {});
		Events.scrollEvent.register("end", function() {});
		scrollSpy.update();
		scroll.scrollToTop();

		return function () {
			Events.scrollEvent.remove("begin");
			Events.scrollEvent.remove("end");
		}
	});

	return (
		<>
			<Navbar fixed="top" className="app-nav">
				<Navbar.Brand>
					<img src={logo} width="70" height="70" className="d-inline-block align-top" alt="czanwei website logo" />
				</Navbar.Brand>
				<Nav>
					<Link className="nav-link" role="button" to="home" spy={true} smooth={true} duration={500}>Home</Link>
					<Link className="nav-link" role="button" to="about" spy={true} smooth={true} duration={500}>About</Link>
					<Link className="nav-link" role="button" to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
				</Nav>
			</Navbar>
			<div id="home">
				<code className="home-title">
					<div className={(isMobile ? "home-title-small " : "") + "home-typewriter"}>Hello World</div>
				</code>
				<div className="mt-5 home-desc">
					<h1 className={(isMobile ? "home-desc-small " : "") + "font-weight-bold"}>Chong Zan-Wei (Sean)</h1>
					<p className="home-quote"><small>be</small> Curious, <small>stay</small> Humble!</p>
				</div>
			</div>
			<div className="home-foot"></div>
			<About name="about" isMobile={isMobile} />
			<Contact name="contact" />
		</>
	);
}

export default App;
