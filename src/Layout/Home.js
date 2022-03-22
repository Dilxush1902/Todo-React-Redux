import React from 'react';
import "../Style/home.scss";
import {DiJavascript1,DiReact} from "react-icons/di";
import {SiRedux} from "react-icons/si";
import Typewriter from 'typewriter-effect';
const Home = () => {
	return (
		<section className="home" id="home">
			<div className="content">
				<div className="container	">
							<div className="title">
										<h3>welcome to my resume</h3>
										<div className="title_user">
											<h1>I'm</h1>
											<h1>
												<Typewriter
													options={{
														strings: ['Dilxush Pardayev', 'React Js Developer'],
														autoStart: true,
														loop: true,
														delay: 35,
														// disableBlinkingOnEnd:true,
														// blinkingSpeed:true
													}}/>
											</h1>
										</div>
										<div className="skills_icon">
											<span><DiJavascript1/></span>
											<span><DiReact/></span>
											<span><SiRedux/></span>
										</div>
							</div>
				</div>
			</div>
		</section>
	);
};

export default Home;