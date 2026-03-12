import React from "react";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

import "./TechItem.scss";

export const TechItem = ({ href, size, text }) => {
	const { t } = useTranslation();
	return (
		<li className="cloud-item">
			<a
				className={"cloud-item__link cloud-item__link--" + (size)}
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={t("alt.openResource", { text })}
			>
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