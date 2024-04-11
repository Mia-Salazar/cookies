import React from "react";

import logo from '../../../assets/img/logo.png';
import "./Footer.scss";
import SocialNetwork from "../../atoms/SocialNetwork/SocialNetwork";

export const Footer = () => {
    const socialNetwork = [
		{icon: "fa-github-alt", link: "https://github.com/Mia-Salazar", aria: "Github"},
		{icon: "fa-codepen", link: "https://codepen.io/MiaSalazar", aria: "Codepen"},
		{icon: "fa-linkedin-in", link: "https://www.linkedin.com/in/miasalazar/", aria: "Linkedin"},
		{icon: "fa-medium-m", link: "https://marasalazar.medium.com/", aria: "Medium"},
		{icon: "fa-twitter", link: "https://twitter.com/miadeveloper", aria: "Twitter"}
	];
	return (
		<div className="footer">
            <div className="footer__logo">
                <div className="footer__img-container">
                    <img className="footer__img" src={logo} />
                </div>
                <p className="footer__title">Mia Salazar</p>
            </div>
			<div className="footer__list">
				{
					socialNetwork.map((social) => {
						return <SocialNetwork key={social.icon} icon={social.icon} link={social.link}></SocialNetwork>;
					})
				}
            </div>

		</div>
	);
};

export default Footer;