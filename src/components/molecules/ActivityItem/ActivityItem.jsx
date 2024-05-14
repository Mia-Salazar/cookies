import React from "react";
import PropTypes from "prop-types";

import ActivityLinks from "../../atoms/ActivityLinks/ActivityLinks";
import "./ActivityItem.scss";

export const ActivityItem = ({ aria, hasVideo, icon, slidesLink, speechLink, text, year }) => {

	return (
		<li className="list-item">
			<span className={`fas fa-${icon}`} aria-label={aria} title={aria}></span>
			<span className="list-item__year">{year}</span>
			<ActivityLinks hasVideo={hasVideo} slidesLink={slidesLink} speechLink={speechLink} text={text}  />
		</li>
	);
};

ActivityItem.propTypes = {
	aria: PropTypes.string.isRequired,
	hasVideo: PropTypes.bool,
	href: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
};

export default ActivityItem;