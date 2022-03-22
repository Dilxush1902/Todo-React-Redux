import React from 'react';
import "../Style/project.scss"
import img1 from "../Style/img/weather-1.png"

const Project = () => {
	return (<section className="project" id="project">
		<div className="container">
			<div className="section_title">
				<h2>My Project</h2>
			</div>
			<div className="row_box">
				<div className="column_box">
					<div className="card_box">
						<div className="img_card">
								<img src={img1} alt=""/>
						</div>
						<div className="card_info">
							<h5>The Team showcase their talents</h5>
							<p>
								Other visual stylings like exposed
								brick and custom-made barber.
							</p>
							<span>
								<a href="#">Read Store</a>
							</span>
						</div>
					</div>
					<div className="card_box">
						<div className="img_card">
								<img src={img1} alt=""/>
						</div>
						<div className="card_info">
							<h5>The Team showcase their talents</h5>
							<p>
								Other visual stylings like exposed
								brick and custom-made barber.
							</p>
							<span>
								<a href="#">Read Store</a>
							</span>
						</div>
					</div>
				</div>
				<div className="column_box">
					<div className="card_box">
						<div className="img_card">
								<img src={img1} alt=""/>
						</div>
						<div className="card_info">
							<h5>The Team showcase their talents</h5>
							<p>
								Other visual stylings like exposed
								brick and custom-made barber.
							</p>
							<span><a href="#">Read Store</a></span>
						</div>
					</div>
					<div className="card_box">
						<div className="img_card">
								<img src={img1} alt=""/>
						</div>
						<div className="card_info">
							<h5>The Team showcase their talents</h5>
							<p>
								Other visual stylings like exposed
								brick and custom-made barber.
							</p>
						<span>	<a href="#">Read Store</a></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>);
};

export default Project;