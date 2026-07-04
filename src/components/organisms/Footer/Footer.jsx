import React from "react";

import logo from '../../../assets/img/logo.png';
import { SOCIAL_NETWORKS } from "../../../constants/socialNetworks";
import SocialNetwork from "../../atoms/SocialNetwork/SocialNetwork";
import "./Footer.scss";

export const Footer = () => {
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
					SOCIAL_NETWORKS.map((social) => {
						return <SocialNetwork key={social.icon} icon={social.icon} link={social.link} aria={social.aria}></SocialNetwork>;
					})
				}
            </ul>
		</footer>
	);
};

export default Footer;