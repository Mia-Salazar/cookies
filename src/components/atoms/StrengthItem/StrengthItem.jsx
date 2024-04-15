import React from "react";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

import "./StrengthItem.scss";

export const StrengthItem = ({title, subtitle}) => {
	const { t } = useTranslation();

	return (
		<div className="strength-item">
			<p className="strength-item__title">{t(title)}</p>
			<p className="strength-item__subtitle">{t(subtitle)}</p>
		</div>
	);
};

StrengthItem.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
}

export default StrengthItem;