import React from "react";
import PropTypes from "prop-types";

import { ActivityLinks } from "../../atoms/ActivityLinks/ActivityLinks";
import "./ActivityItem.scss";

export const ActivityItem = ({
	icon,
	speechLink,
	text,
	imageSrc,
	imageAlt,
	lang = "es",
}) => (
	<li className={`list-item ${icon ? "list-item--with-icon" : "list-item--full"}`}>
		{icon && (
			<span className="list-item__icon-container" aria-hidden="true">
				<i className={`fas fa-${icon}`} />
			</span>
		)}
		<ActivityLinks
			speechLink={speechLink}
			text={text}
			imageSrc={imageSrc}
			imageAlt={imageAlt}
			lang={lang}
		/>
	</li>
);

ActivityItem.propTypes = {
	icon: PropTypes.string,
	speechLink: PropTypes.string,
	text: PropTypes.string.isRequired,
	imageSrc: PropTypes.string,
	imageAlt: PropTypes.string,
	lang: PropTypes.string,
};

export default ActivityItem;
