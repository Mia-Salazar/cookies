
import React from "react";
import PropTypes from 'prop-types';

import "./Text.scss";

export const Text = ({ children, id }) => {
	return (
		<p className="text" id={id}>{children}</p>
	);
};

Text.propTypes = {
	children: PropTypes.node.isRequired,
	id: PropTypes.string,
}

export default Text;
