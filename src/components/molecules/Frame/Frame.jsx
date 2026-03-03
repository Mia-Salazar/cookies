import React from "react";
import PropTypes from 'prop-types';

import Footer from "../../organisms/Footer/Footer";
import "./Frame.scss";

export const Frame = ({children, isIntro, styles = ""}) => {
	return (
		<>
			<div className={`Frame ${isIntro ? 'Frame--intro' : styles}`}>
				<div className="Frame__superior" aria-hidden="true"></div>
				<div className="Frame__border Frame__border--top" aria-hidden="true" />
				<div className="Frame__border Frame__border--bottom" aria-hidden="true" />
				<div className="Frame__corner Frame__corner--top-left" aria-hidden="true" />
				<div className="Frame__corner Frame__corner--bottom-right" aria-hidden="true" />
				<div className="Frame__inferior" aria-hidden="true"></div>
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