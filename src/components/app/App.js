import logo from '../../resources/logo-dusty-pink.svg';
import './App.css';
import React, { useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import About from '../about/About';
import Contact from '../contact/Contact';
import * as Scroll from 'react-scroll';
import { Link, Events } from 'react-scroll';

function App() {

	let scroll = Scroll.animateScroll;
	let scrollSpy = Scroll.scrollSpy;

	useEffect(() => {
		Events.scrollEvent.register("begin", function() {
			console.log("begin", arguments);
		});
		Events.scrollEvent.register("end", function() {
			console.log("end", arguments);
		});
		scrollSpy.update();
		scroll.scrollToTop();
		
		return function() {
			Events.scrollEvent.remove("begin");
			Events.scrollEvent.remove("end");
		}
	});

  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand>
          <img src={logo} width="70" height="70" className="d-inline-block align-top" alt="czanwei website logo" />
        </Navbar.Brand>
        <Nav>
					<Link className="nav-link" role="button" to="home" spy={true} smooth={true} duration={700}>Home</Link>
					<Link className="nav-link" role="button" to="about" spy={true} smooth={true} duration={700}>About</Link>
					<Link className="nav-link" role="button" to="contact" spy={true} smooth={true} duration={700}>Contact</Link>
        </Nav>
      </Navbar>
      <div id="home">
        <code className="home-title">Hello World<span className="home-blink">_</span></code>
        <div className="mt-5">
          <h1 className="font-weight-bold home-name">Chong Zan-Wei (Sean)</h1>
          <p className="home-quote"><small>be</small> Curious, <small>stay</small> Humble!</p>
        </div>
      </div>
      <About id="about" />
			<Contact id="contact" />
    </>
  );
}

export default App;
