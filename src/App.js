import React from 'react';
import Menu from "./Layout/Menu";
import "./Style/main.scss";
import Home from "./Layout/Home";
import About from "./Layout/About";
import MySkills from "./Layout/MySkills";
import Project from "./Layout/Project";
import Contact from "./Layout/Contact";
import Footer from "./Layout/Footer";
import Icon from "./Layout/Icon";

const App = () => {
	return (
		<>
			<Menu/>
			<Home/>
			<Icon/>
			<About/>
			<MySkills/>
			<Project/>
			<Contact/>
			<Footer/>
		</>
	);
};

export default App;