import React from "react";
import PropTypes from 'prop-types';

import "./Frame.scss";
import Footer from "../../organisms/Footer/Footer";

export const Frame = ({children, isIntro, styles = ""}) => {
	return (
		<>
			<div className={`Frame ${isIntro ? 'Frame--intro' : styles}`}>
				{children}
			</div>
			{!isIntro && <Footer />}
		</>
	);
};

Frame.defaultProps = {
	isIntro: false
};

Frame.propTypes = {
	children: PropTypes.node.isRequired,
	isIntro: PropTypes.bool,
	styles: PropTypes.string
}

export default Frame;