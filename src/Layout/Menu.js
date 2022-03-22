import React, {useState} from 'react';
import "../Style/menu.scss";

const Menu = () => {
	const [menuBtn,setMenuBtn]=useState(false);
	const [navbar,setNavbar]=useState(false);
	window.addEventListener("scroll",()=>{
		if (window.scrollY >= 30) {
			setNavbar(true)
		}
		else {
			setNavbar(false)
		}
	})
	return (
		<nav className={navbar ? "active": `${menuBtn ? "bg_c":""}`}>
			<div className="container">
				<a href="#home" className="nav_logo">Dilxush</a>
				<div className={menuBtn ? "nav_item active ": "nav_item"}>
						<a href="#home">Home</a>
							<a href="#about">About</a>
							<a href="#skills">My Skills</a>
							<a href="#project">My Project</a>
							<a href="#contact">Contact</a>
					</div>
					<div
						onClick={()=>setMenuBtn(!menuBtn)}
						className={menuBtn ? "menu_btn active" :"menu_btn"}>
							<span></span>
							<span></span>
							<span></span>
					</div>
					</div>
			</nav>
		// <nav className={navbar ? `${menuBtn ? "navbar active navbar-expand-lg navbar-dark bg-black":"navbar active navbar-expand-lg navbar-dark"}`:"navbar navbar-expand-lg navbar-dark"}>
		// 	<div className="container">
		// 		<a className="navbar-brand navbar_logo" href="#">Dilxush</a>
		// 		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
		// 										aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		// 			<div onClick={()=>setMenuBtn(!menuBtn)} className={menuBtn ? "active" : "before"}>
		// 							<span></span>
		// 							<span></span>
		// 							<span></span>
		// 			</div>
		// 		</button>
		// 		<div className="collapse navbar-collapse" id="navbarSupportedContent">
		// 			<ul className="navbar-nav me-auto mb-2 mb-lg-0">
		// 				<li className="nav-item">
		// 					<a className="nav-link text-center" aria-current="page" href="#home">Home</a>
		// 				</li>
		// 				<li className="nav-item">
		// 					<a className="nav-link text-center" href="#about">About</a>
		// 				</li>
		// 				<li className="nav-item">
		// 					<a className="nav-link text-center" href="#skills">Skills</a>
		// 				</li>
		// 				<li className="nav-item">
		// 					<a className="nav-link text-center" href="#project">Projects</a>
		// 				</li>
		// 				<li className="nav-item">
		// 					<a className="nav-link text-center" href="#contact">Contact</a>
		// 				</li>
		// 			</ul>
		// 		</div>
		// 	</div>
		// </nav>
	);
};

export default Menu;