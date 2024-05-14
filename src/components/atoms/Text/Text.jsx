
import React from "react";
import PropTypes from 'prop-types';

import "./Text.scss";

export const Text = ({ children }) => {
	return (
		<p className="text">{children}</p>
	);
};

Text.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Text;