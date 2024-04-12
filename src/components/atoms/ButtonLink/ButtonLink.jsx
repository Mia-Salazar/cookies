import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import "./ButtonLink.scss";

export const ButtonLink = ({href, text, style}) => {
	return (
		<Link className={`link ${style ? `style--${style}` : ''}`} to={href}>{text}</Link>
	);
};

ButtonLink.propTypes = {
	href: PropTypes.string.isRequired,
	style: PropTypes.string,
	text: PropTypes.string.isRequired,
}

export default ButtonLink;