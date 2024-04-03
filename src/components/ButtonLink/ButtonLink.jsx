import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import "./ButtonLink.scss";

export const ButtonLink = ({href, text}) => {
	return (
		<Link className={"link"} to={href}>{text}</Link>
	);
};

ButtonLink.propTypes = {
	href: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
}

export default ButtonLink;