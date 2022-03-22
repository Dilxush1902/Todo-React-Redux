import React from 'react';
import {TiSocialLinkedin} from "react-icons/ti";
import {VscGithub} from "react-icons/vsc";
import {AiOutlineInstagram} from "react-icons/ai";
import {RiTelegramLine} from "react-icons/ri";
import "../Style/icon.scss";

const Icon = () => {
	return (
		<div className="icons">
			<div className="icon_box">
				<a href="https://linkedin.com/in/dilxush-pardayev-4a1532220" target="_blank"><TiSocialLinkedin/></a>
				<a href="https://github.com/Dilxush1902" target="_blank"><VscGithub/></a>
				<a href="https://www.instagram.com/dilxush_1902/" target="_blank"><AiOutlineInstagram/></a>
				<a class="telegram-button" href="javascript:void(window.open('https://t.me/share/url?url='+encodeURIComponent(document.title)+'&text=https://t.me/@dilxush7107', '_blank'))"><RiTelegramLine/></a>
			</div>
		</div>
	);
};

export default Icon;