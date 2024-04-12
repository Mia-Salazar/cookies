import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import "./ButtonLink.scss";

export const ButtonLink = ({href, text, styles}) => {
	return (
		<Link className={`link ${styles ? `style--${styles}` : ''}`} to={href}>{text}</Link>
	);
};

ButtonLink.propTypes = {
	href: PropTypes.string.isRequired,
	styles: PropTypes.string,
	text: PropTypes.string.isRequired,
}

export default ButtonLink;