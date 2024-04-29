import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./ButtonLink.scss";

export const ButtonLink = ({href, isExternal, text, styles}) => {
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

ButtonLink.defaultProps = {
	isExternal: false
};

ButtonLink.propTypes = {
	href: PropTypes.string.isRequired,
	isExternal: PropTypes.bool, 
	styles: PropTypes.string,
	text: PropTypes.string.isRequired,
}

export default ButtonLink;