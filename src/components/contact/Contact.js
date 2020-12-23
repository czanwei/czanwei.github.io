import './Contact.css'

function Contact(props) {
	return (
		<div id={props.name}>
			<div className="container pt-5">
				<div className="row pt-4 pt-md-5">
					<h1 className="w-100 text-center text-white mt-4">Contact</h1>
					<p className="w-100 text-center text-white mt-3">Work in Progress, Please stay tune!</p>
				</div>
			</div>
		</div>
	);
}

export default Contact;