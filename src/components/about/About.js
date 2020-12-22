import me from '../../resources/me.jpg'
import './About.css'

function About(props) {
	return (
		<div id={props.id} className="container mt-5">
			<div className="row mt-0 mt-md-5">
				<h1 className="w-100 text-center">About Me</h1>
			</div>
			<div className="row mt-0 mt-md-5">
				<div className="col-md-4 col-sm-12">
					<img src={me} width="350" height="350" className="about-me d-block mx-auto mt-3 mt-md-4" alt="zanwei's portrait" />
				</div>
				<div className="col ml-5 my-5 my-md-3">
					<div className="row py-1 pl-2 w-50 bg-dark text-white rounded"><small>Name</small></div>
					<div className="row mt-2"><h5>Chong Zan-Wei</h5></div>
					<div className="row py-1 pl-2 w-50 bg-dark text-white rounded"><small>Email</small></div>
					<div className="row mt-2"><h5>seanczw@gmail.com</h5></div>
					<div className="row py-1 pl-2 w-50 bg-dark text-white rounded"><small>Current Location</small></div>
					<div className="row mt-2"><h5>Petaling Jaya, Selangor, Malaysia</h5></div>
					<div className="row py-1 pl-2 w-50 bg-dark text-white rounded"><small>Education</small></div>
					<div className="row mt-2"><small><i>May 2012 - May 2016</i></small></div>
					<div className="row"><small><i>UTAR, University Tunku Abdul Rahman (Kampar Campus)</i></small></div>
					<div className="row">
						<h5>Bachelor of Computer Science (HONS)</h5>
						<i className="pl-2">CGPA: 3.1000</i>
					</div>
					<div className="row py-1 pl-2 w-50 bg-dark text-white rounded"><small>Experience</small></div>
					<div className="row mt-2">
						<small><i>June 2016 - October 2016</i></small>
					</div>
					<div className="row">
						<h5 className="m-0">Intern Developer -</h5>
						<a href="https://www.lintramax.com/" target="_blank" rel="noreferrer" className="col-md-6 col-sm-12 pl-1 pt-md-1 pt-sm-0 text-decoration-none">
							<small><i>LintraMax (M) Sdn. Bhd.</i></small>
						</a>
					</div>
					<div className="row mt-2">
						<small><i>November 2016 - December 2020</i></small>
					</div>
					<div className="row">
						<h5 className="m-0">Web Developer -</h5>
						<a href="http://www.cyber-village.net/" target="_blank" rel="noreferrer" className="col-md-6 col-sm-12 pl-1 pt-md-1 pt-sm-0 text-decoration-none">
							<small><i>Cyber Village Sdn. Bhd.</i></small>
						</a>
					</div>
					<div className="row mt-2">
						<small><i>... Starting January 2021</i></small>
					</div>
					<div className="row">
						<h5 className="m-0">Software Engineer -</h5>
						<a href="https://www.kerrylogistics.com/" target="_blank" rel="noreferrer" className="col-md-6 col-sm-12 pl-1 pt-md-1 pt-sm-0 text-decoration-none">
							<small><i>Kerry Logistics Network Services Sdn. Bhd.</i></small>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;