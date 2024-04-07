import React from "react";
import PropTypes from 'prop-types';

import "./Layout.scss";

export const Layout = ({children}) => {
	return (
		<div className="layout">
            {children}
        </div>
	);
};

Layout.propTypes = {
	href: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
}

export default Layout;