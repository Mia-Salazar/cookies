
import React from "react";
import PropTypes from 'prop-types';

import "./Container.scss";

export const Container = ({ children }) => {
	return (
		<main id="main" className="container">{children}</main>
	);
};

Container.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Container;