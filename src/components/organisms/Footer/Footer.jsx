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
		<footer className="footer">
            <div className="footer__logo">
                <figure className="footer__img-container">
                    <img alt="Galleta de chocolate con chips y los ojos bizcos" className="footer__img" src={logo} />
                </figure>
                <p className="footer__title">Mia Salazar</p>
            </div>
			<ul className="footer__list">
				{
					socialNetwork.map((social) => {
						return <SocialNetwork key={social.icon} icon={social.icon} link={social.link} aria={social.aria}></SocialNetwork>;
					})
				}
            </ul>
		</footer>
	);
};

export default Footer;