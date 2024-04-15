import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./ButtonLink.scss";

export const ButtonLink = ({href, text, styles}) => {
	const { t } = useTranslation();

	return (
		<Link className={`link ${styles ? `link--${styles}` : ''}`} to={href}>{t(text)}</Link>
	);
};

ButtonLink.propTypes = {
	href: PropTypes.string.isRequired,
	styles: PropTypes.string,
	text: PropTypes.string.isRequired,
}

export default ButtonLink;