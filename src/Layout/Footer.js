import React from 'react';
import "../Style/footer.scss";
const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="footer_title">
					<p>Copyright © {new Date().getFullYear()} - All Right Reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;