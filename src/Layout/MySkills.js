import React from 'react';
import "../Style/skills.scss";
const MySkills = () => {
	return (
		<section className="skills" id="skills">
			<div className="container">
				<div className="section_title">
					<h2>My Skills</h2>
				</div>
				<div className="column_box">
					<div className="row_box">
						<div className="card_box html">
								<div className="skills_title">
									<span>Html</span>
									<span>90%</span>
								</div>
								<div className="skills_line"></div>
						</div>
						<div className="card_box css">
								<div className="skills_title">
									<span>Css</span>
									<span>40%</span>
								</div>
								<div className="skills_line"></div>
						</div>
						<div className="card_box scss">
								<div className="skills_title">
									<span>Sass</span>
									<span>40%</span>
								</div>
								<div className="skills_line"></div>
						</div>
						<div className="card_box bootstrap">
								<div className="skills_title">
									<span>Bootstrap</span>
									<span>40%</span>
								</div>
								<div className="skills_line"></div>
						</div>
						<div className="card_box javascript">
								<div className="skills_title">
									<span>JavaScript</span>
									<span>35%</span>
								</div>
								<div className="skills_line"></div>
						</div>
						<div className="card_box jquery">
								<div className="skills_title">
									<span>jQuery</span>
									<span>10%</span>
								</div>
								<div className="skills_line"></div>
						</div>
					</div>
					<div className="row_box">
						<div className="card_box react">
							<div className="skills_title">
								<span>React JS</span>
								<span>40%</span>
							</div>
							<div className="skills_line"></div>
						</div>
						<div className="card_box router">
							<div className="skills_title">
								<span>React Router</span>
								<span>60%</span>
							</div>
							<div className="skills_line"></div>
						</div>
						<div className="card_box redux">
							<div className="skills_title">
								<span>Redux</span>
								<span>80%</span>
							</div>
							<div className="skills_line"></div>
						</div>
						<div className="card_box next">
							<div className="skills_title">
								<span>Next JS</span>
								<span>40%</span>
							</div>
							<div className="skills_line"></div>
						</div>
						<div className="card_box typescript">
							<div className="skills_title">
								<span>TypeScript</span>
								<span>40%</span>
							</div>
							<div className="skills_line"></div>
						</div>
						<div className="card_box git">
							<div className="skills_title">
								<span>git, gitlab</span>
								<span>60%</span>
							</div>
							<div className="skills_line"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MySkills;