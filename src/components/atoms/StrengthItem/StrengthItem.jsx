import React from "react";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

import "./StrengthItem.scss";

export const StrengthItem = ({ subtitle, title }) => {
	const { t } = useTranslation();
	const displayTitle = typeof title === "number" || (typeof title === "string" && /^\d|\+/.test(title))
		? title
		: t(title);

	return (
		<li className="strength-item">
			<p className="strength-item__title">{displayTitle}</p>
			<p className="strength-item__subtitle">{t(subtitle)}</p>
		</li>
	);
};

StrengthItem.propTypes = {
	subtitle: PropTypes.string.isRequired,
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default StrengthItem;
