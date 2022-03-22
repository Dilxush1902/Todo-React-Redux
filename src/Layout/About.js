import React from 'react';
import "../Style/about.scss";
import AboutImg from "../Style/img/about (1).jpg"

const About = () => {
	return (
		<section className="about" id="about">
			<div className="container">
				<div className="section_title">
					<h2>About Me</h2>
				</div>
				<div className="row_box">
					<div className="column_box">
						<div className="img_box">
							<img src={AboutImg} alt=""/>
						</div>
					</div>
					<div className="column_box">
							<h2>Hey there is Dilxush Pardayev</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius excepturi fuga, illum laudantium minima nulla
							perferendis quo repellat repudiandae similique! Ab alias animi architecto cum dicta, eum fugit labore laborum
							maiores nobis nostrum provident quaerat quam quas quasi rem ullam veritatis voluptas voluptate voluptatem. At
							autem deleniti eum excepturi exercitationem expedita facere id iste minima mollitia nam necessitatibus nesciunt,
							officiis optio qui quis repudiandae?
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;