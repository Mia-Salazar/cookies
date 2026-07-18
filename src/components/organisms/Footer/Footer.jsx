import React from "react";
import { useTranslation } from "react-i18next";

import logo from '../../../assets/img/logo.png';
import { SOCIAL_NETWORKS } from "../../../constants/socialNetworks";
import SocialNetwork from "../../atoms/SocialNetwork/SocialNetwork";
import "./Footer.scss";

export const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className="footer">
            <div className="footer__logo">
                <figure className="footer__img-container">
                    <img alt={t("alt.cookie")} className="footer__img" src={logo} />
                </figure>
                <p className="footer__title">Mia Salazar</p>
            </div>
			<nav aria-label={t("contact.socialIntro")}>
				<ul className="footer__list">
					{
						SOCIAL_NETWORKS.map((social) => {
							return <SocialNetwork key={social.icon} icon={social.icon} link={social.link} aria={social.aria}></SocialNetwork>;
						})
					}
            	</ul>
			</nav>
		</footer>
	);
};

export default Footer;
