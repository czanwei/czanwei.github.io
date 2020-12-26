import React, { useState } from 'react';
import './Tech.css';
import BarGroup from '../utlilty/BarGroup';
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faJava, faHtml5, faCss3, faJs, faAngular, faReact, faGit, faLinux } from '@fortawesome/free-brands-svg-icons'

function Tech(props) {

	const [stack] = useState({
		data: [
			{ name: "Java", value: 6 },
			{ name: "C", value: 3 },
			{ name: "HTML", value: 7 },
			{ name: "CSS", value: 6 },
			{ name: "Javascript", value: 6 },
			{ name: "ReactJS", value: 3 },
			{ name: "Angular", value: 5},
			{ name: "SQL", value: 5 }
		]
	});

	let barHeight = window.innerWidth * (isMobile ? 0.1 : 0.04);
	let barGroups = stack.data.map((d, i) => {
		return <g transform={`translate(${window.innerWidth * 0.15}, ${i * barHeight})`}>
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
					<div className="offset-3"></div>
					<div className="col text-white">
						<FontAwesomeIcon icon={faAngleRight} /> <small>Proficiency from 1 to 10</small>
					</div>
				</div>
				<div id="tech-chart" className="row pt-3 ml-3 ml-md-5">
					<svg width={window.innerWidth * 0.84} height={window.innerHeight * 0.45}>
						{barGroups}
					</svg>
				</div>
				<div className="row mt-5 ml-3">
					<FontAwesomeIcon icon={faJava} size={isMobile? "2x" : "5x"} color="white" pull="left" />
					<FontAwesomeIcon icon={faHtml5} size={isMobile? "2x" : "5x"} color="white" pull="left"  />
					<FontAwesomeIcon icon={faCss3} size={isMobile? "2x" : "5x"} color="white" pull="left"  />
					<FontAwesomeIcon icon={faJs} size={isMobile? "2x" : "5x"} color="white" pull="left"  />
					<FontAwesomeIcon icon={faReact} size={isMobile? "2x" : "5x"} color="white" pull="left"  />
					<FontAwesomeIcon icon={faAngular} size={isMobile? "2x" : "5x"} color="white" pull="left"  />
					<FontAwesomeIcon icon={faGit} size={isMobile? "2x" : "5x"} color="white" pull="left"  />
					<FontAwesomeIcon icon={faLinux} size={isMobile? "2x" : "5x"} color="white" pull="left"  />
				</div>
			</div>
		</div>
		<div></div>
		</>
	);
}

export default Tech;