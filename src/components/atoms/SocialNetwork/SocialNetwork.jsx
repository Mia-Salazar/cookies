import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import "./SocialNetwork.scss";

export const SocialNetwork = ({ aria, icon, link }) => {
	const { t } = useTranslation();

	return (
		<li className="social-network" >
            <a href={link} target="_blank" rel="noopener noreferrer" aria-label={t(aria)}>
                <i aria-hidden="true" className={`fab social-network__icon ${icon}`}></i>
            </a>
        </li>
	);
};

SocialNetwork.propTypes = {
    aria: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
}

export default SocialNetwork;
