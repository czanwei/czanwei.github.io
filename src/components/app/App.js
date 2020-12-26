import React, { useEffect } from 'react';
import './App.css';
import logo from '../../resources/logo-dusty-pink.svg';
import About from '../about/About';
import Tech from '../tech/Tech';
import { Navbar, Nav } from 'react-bootstrap';
import * as Scroll from 'react-scroll';
import { Link, Events } from 'react-scroll';
import {isMobile} from 'react-device-detect';

function App() {

	let scroll = Scroll.animateScroll;
	let scrollSpy = Scroll.scrollSpy;

	useEffect(() => {

		Events.scrollEvent.register("begin", function() {});
		Events.scrollEvent.register("end", function(to, ele) {
			if (to === "tech") {
				document.getElementById("tech-chart").classList.add("tech-chart-expand");
			}
		});
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
					<Link className="nav-link" role="button" to="tech" spy={true} smooth={true} duration={500}>Tech</Link>
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
			<Tech name="tech" />
		</>
	);
}

export default App;
