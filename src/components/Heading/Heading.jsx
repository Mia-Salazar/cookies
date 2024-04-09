import React from "react";
import PropTypes from 'prop-types';

import "./Heading.scss";

export const Heading = ({text}) => {
	return (
		<div className="heading">{text}</div>
	);
};

Heading.propTypes = {
	text: PropTypes.string.isRequired,
}

export default Heading;