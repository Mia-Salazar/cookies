import React from "react";
import PropTypes from 'prop-types';

import "./TechItem.scss";

export const TechItem = ({ href, size, text }) => {
	return (
		<li className="cloud-item">
			<a className={"cloud-item__link cloud-item__link--" + (size)} href={href}>
                {text}
            </a>
		</li>
	);
};

TechItem.propTypes = {
	href: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
}

export default TechItem;