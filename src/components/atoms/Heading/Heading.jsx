import React from "react";
import PropTypes from 'prop-types';

import "./Heading.scss";

export const Heading = ({text, type}) => {
	return (
		<div className={"heading " + (type > 1 ? `heading--h${type}` : '')}>{text}</div>
	);
};

Heading.defaultProps = {
	type: 1
};

Heading.propTypes = {
	text: PropTypes.string.isRequired,
    type: PropTypes.number
}

export default Heading;