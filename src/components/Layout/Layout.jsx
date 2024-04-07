import React from "react";
import PropTypes from 'prop-types';

import "./Layout.scss";

export const Layout = ({children, isIntro}) => {
	return (
		<div className={`layout ${isIntro ? 'layout--intro' : ''}`}>
            {children}
        </div>
	);
};

Layout.defaultProps = {
	isIntro: false
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	isIntro: PropTypes.bool
}

export default Layout;