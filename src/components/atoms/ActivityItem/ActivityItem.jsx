import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import "./ActivityItem.scss";

export const ActivityItem = ({aria, href, icon, text, year}) => {
	const { t } = useTranslation();

	return (
		<div className="list-item">
			<span className={`fas fa-${icon}`} aria-label={aria} title={aria}></span>
			<span className="list-item__year">{year}</span>
			<a className="list-item__link" href={href} target="__blank">{t(text)}</a>
		</div>
	);
};

ActivityItem.propTypes = {
	aria: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
};

export default ActivityItem;