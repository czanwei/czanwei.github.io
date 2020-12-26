import './BarGroup.css'
import { isMobile } from 'react-device-detect';

function BarGroup(props) {
	let barPadding = isMobile ? 2 : 3;
	let barColour = '#39758d';
	let widthScale = d => d * window.innerWidth * 0.05;

	let width = widthScale(props.d.value);
	let yMid = (props.barHeight * 0.5) + 3;

	return <g className="bar-group">
		<text className={(isMobile ? "bar-lable-mobile " : "") + "bar-label"} x="-6" y={yMid} alignmentBaseline="middle">{props.d.name}</text>
		<rect y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColour} />
		<text className={(isMobile ? "bar-lable-mobile " : "") + "bar-value"} x={width - 11} y={yMid} alignmentBaseline="middle">{props.d.value}</text>
	</g>
}

export default BarGroup;