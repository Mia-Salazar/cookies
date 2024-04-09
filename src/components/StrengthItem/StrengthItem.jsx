import React from "react";
import PropTypes from 'prop-types';

import "./StrengthItem.scss";

export const StrengthItem = ({title, subtitle}) => {
	return (
		<div className="strength-item">
			<p className="strength-item__title">{title}</p>
			<p className="strength-item__subtitle">{subtitle}</p>
		</div>
	);
};

StrengthItem.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
}

export default StrengthItem;