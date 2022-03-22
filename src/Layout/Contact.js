import React from 'react';
import "../Style/contact.scss";
const Contact = () => {
	return (
		<section className="contact" id="contact">
			<div className="content">
				<div className="container">
					<div className="section_title">
						<h2>Get In Touch</h2>
					</div>
					<div className="contact_form">
						<div className="form_box">
								<div className="input_box">
									<input type="text" placeholder="Name*"/>
									<input type="text" placeholder="Email*"/>
									<input type="text" placeholder="Subject*"/>
								</div>
							<div className="area_box">
								<textarea placeholder="Message*"></textarea>
							</div>
							<div className="btn_box">
								<button type="button" className="">Send Message</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;