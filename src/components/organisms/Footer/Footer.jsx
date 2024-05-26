import React from "react";

import logo from '../../../assets/img/logo.png';
import SocialNetwork from "../../atoms/SocialNetwork/SocialNetwork";
import "./Footer.scss";

export const Footer = () => {
    const socialNetwork = [
		{icon: "fa-github-alt", link: "https://github.com/Mia-Salazar", aria: "alt.github"},
		{icon: "fa-codepen", link: "https://codepen.io/MiaSalazar", aria: "alt.codepen"},
		{icon: "fa-linkedin-in", link: "https://www.linkedin.com/in/miasalazar/", aria: "alt.linkedin"},
		{icon: "fa-medium-m", link: "https://marasalazar.medium.com/", aria: "alt.medium"},
		{icon: "fa-twitter", link: "https://twitter.com/miadeveloper", aria: "alt.twitter"}
	];
	return (
		<div className="footer">
            <div className="footer__logo">
                <div className="footer__img-container">
                    <img className="footer__img" src={logo} />
                </div>
                <p className="footer__title">Mia Salazar</p>
            </div>
			<ul className="footer__list">
				{
					socialNetwork.map((social) => {
						return <SocialNetwork key={social.icon} icon={social.icon} link={social.link}></SocialNetwork>;
					})
				}
            </ul>
		</div>
	);
};

export default Footer;