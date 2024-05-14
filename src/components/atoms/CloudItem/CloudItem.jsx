import React from "react";
import PropTypes from 'prop-types';

import "./CloudItem.scss";

export const CloudItem = ({ href, size, text }) => {
	return (
		<div className="cloud-item">
			<a className={"cloud-item__link cloud-item__link--" + (size)} href={href}>
                {text}
            </a>
		</div>
	);
};

CloudItem.propTypes = {
	href: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
}

export default CloudItem;