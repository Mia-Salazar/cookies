import React from "react";
import PropTypes from 'prop-types';

import "./Layout.scss";
import Footer from "../../organisms/Footer/Footer";

export const Layout = ({children, isIntro, styles = ""}) => {
	return (
		<>
			<div className={`layout ${isIntro ? 'layout--intro' : styles}`}>
				{children}
			</div>
			{!isIntro && <Footer />}
		</>
	);
};

Layout.defaultProps = {
	isIntro: false
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	isIntro: PropTypes.bool,
	styles: PropTypes.string
}

export default Layout;