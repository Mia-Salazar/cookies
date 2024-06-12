import React from "react";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

import "./StrengthItem.scss";

export const StrengthItem = ({ subtitle, title }) => {
	const { t } = useTranslation();

	return (
		<li className="strength-item">
			<p className="strength-item__title">{t(title)}</p>
			<p className="strength-item__subtitle">{t(subtitle)}</p>
		</li>
	);
};

StrengthItem.propTypes = {
	subtitle: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
}

export default StrengthItem;