
import React from "react";
import PropTypes from 'prop-types';

import "./Container.scss";

export const Container = ({ children }) => {
	return (
		<div className="container">{children}</div>
	);
};

Container.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Container;