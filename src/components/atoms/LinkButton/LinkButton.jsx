import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./LinkButton.scss";

export const LinkButton = ({ href, isExternal, text, styles }) => {
	const { t } = useTranslation();

	if (isExternal) {
		<a className={`link ${styles ? styles : ''}`} href={href} target="__blank" rel="noreferrer">
			{t(text)}
		</a>
	}

	return (
		<Link className={`link ${styles ? styles : ''}`} to={href}>{t(text)}</Link>
	);
};

LinkButton.defaultProps = {
	isExternal: false
};

LinkButton.propTypes = {
	href: PropTypes.string.isRequired,
	isExternal: PropTypes.bool, 
	styles: PropTypes.string,
	text: PropTypes.string.isRequired,
}

export default LinkButton;