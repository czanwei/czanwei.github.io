import React, { useState } from 'react';
import './Tech.css';
import BarGroup from '../utlilty/BarGroup';
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import {
	faJava,
	faHtml5,
	faCss3,
	faBootstrap,
	faJs,
	faAngular,
	faReact,
	faNpm,
	faNode,
	faGitAlt,
	faLinux,
	faDocker,
	faGithub
} from '@fortawesome/free-brands-svg-icons';
import logoTypescript from '../../resources/typescript.svg';
import logoCordova from '../../resources/cordova.svg';
import logoIBM from '../../resources/ibm.svg';
import logoGCloud from '../../resources/google-cloud.svg';
import logoSpring from '../../resources/spring.svg';
import logoWebRTC from '../../resources/webrtc.svg';

function Tech(props) {

	const [stack] = useState({
		data: [
			{ name: "Java", value: 7 },
			{ name: "C", value: 3 },
			{ name: "HTML/CSS", value: 6 },
			{ name: "Javascript", value: 6 },
			{ name: "ReactJS", value: 3 },
			{ name: "Angular", value: 5},
			{ name: "SQL", value: 5 },
			{ name: "REST", value: 6 }
		]
	});

	// take 0.3% (1% for mobile view) from the window width and multiply by number of tech stack
	let barHeight = window.innerWidth * (isMobile ? 0.01 : 0.003) * stack.data.length;
	// create BarGroup for each tech stack
	let barGroups = stack.data.map((d, i) => {
		return <g key={`stack-${i}`} transform={`translate(${window.innerWidth * 0.15}, ${i * barHeight})`}>
			<BarGroup d={d} barHeight={barHeight} />
		</g>
	})

	return (
		<>
		<div id={props.name}>
			<div className="container pt-5">
				<div className="row pt-4 pt-md-5">
					<h1 className="w-100 text-center text-white mt-4">Tech Stack</h1>
				</div>
				<div className="row pt-4">
					<div className="offset-2"></div>
					<div className="col text-white">
						<FontAwesomeIcon icon={faAngleRight} /> <small>Proficiency from 1 to 10</small>
					</div>
				</div>
				<div id="tech-chart" className="row pt-3 ml-3 ml-md-1">
					<svg width={window.innerWidth * 0.84} height={barHeight * (stack.data.length * 1.1)}>
						{barGroups}
					</svg>
				</div>
				<div className="row mt-5">
					<div className="offset-1"></div>
					<div className="col text-white">
						<FontAwesomeIcon icon={faStar} size="2x" /> <small>Technologies I have experienced:</small>
					</div>
				</div>
				<div className="row mt-3 ml-3 ml-md-5 pl-0 pr-5 px-md-5">
					<FontAwesomeIcon icon={faJava} size={isMobile? "3x" : "5x"} color="white" pull="left" />
					<FontAwesomeIcon icon={faHtml5} size={isMobile? "3x" : "5x"} color="white" pull="left"  />
					<FontAwesomeIcon icon={faCss3} size={isMobile? "3x" : "5x"} color="white" pull="left"  />
					<FontAwesomeIcon icon={faBootstrap} size={isMobile? "3x" : "5x"} color="white" pull="left"  />
					<FontAwesomeIcon icon={faJs} size={isMobile? "3x" : "5x"} color="white" pull="left"  />
					<img src={logoTypescript} className="tech-logo" height={isMobile ? "45" : "77"} width={isMobile ? "45" : "77"} alt="typescript" />
					<FontAwesomeIcon icon={faAngular} size={isMobile? "3x" : "5x"} color="white" pull="left"  />
					<img src={logoCordova} className="tech-logo" height={isMobile ? "45" : "77"} width={isMobile ? "45" : "77"} alt="cordova" />
					<FontAwesomeIcon icon={faReact} size={isMobile? "3x" : "5x"} color="white" pull="left"  />
					<FontAwesomeIcon icon={faNpm} size={isMobile? "3x" : "5x"} color="white" pull="left"  />
					<FontAwesomeIcon icon={faNode} size={isMobile? "3x" : "5x"} color="white" pull="left"  />
					<FontAwesomeIcon icon={faGitAlt} size={isMobile? "3x" : "5x"} color="white" pull="left"  />
					<FontAwesomeIcon icon={faGithub} size={isMobile? "3x" : "5x"} color="white" pull="left"  />
					<FontAwesomeIcon icon={faLinux} size={isMobile? "3x" : "5x"} color="white" pull="left"  />
					<FontAwesomeIcon icon={faDocker} size={isMobile? "3x" : "5x"} color="white" pull="left"  />
					<img src={logoIBM} className="tech-logo" height={isMobile ? "45" : "77"} width={isMobile ? "45" : "77"} alt="IBM" />
					<img src={logoGCloud} className="tech-logo" height={isMobile ? "45" : "77"} width={isMobile ? "45" : "77"} alt="google cloud" />
					<img src={logoSpring} className="tech-logo" height={isMobile ? "45" : "77"} width={isMobile ? "45" : "77"} alt="spring" />
					<img src={logoWebRTC} className="tech-logo" height={isMobile ? "45" : "77"} width={isMobile ? "45" : "77"} alt="webrtc" />
				</div>
			</div>
		</div>
		<div></div>
		</>
	);
}

export default Tech;