import React from "react";
import PropTypes from "prop-types";

import ActivityLinks from "../../atoms/ActivityLinks/ActivityLinks";
import "./ActivityItem.scss";

export const ActivityItem = ({ aria, hasVideo, icon, slidesLink, speechLink, text, imageSrc }) => {
	console.log(imageSrc, 'imageSrc')
	return (
		<li className="list-item">
			<span className={`fas fa-${icon}`} aria-label={aria} title={aria}></span>
			<ActivityLinks hasVideo={hasVideo} slidesLink={slidesLink} speechLink={speechLink} text={text} imageSrc={imageSrc}  />
		</li>
	);
};

ActivityItem.propTypes = {
	aria: PropTypes.string.isRequired,
	hasVideo: PropTypes.bool,
	icon: PropTypes.string.isRequired,
    speechLink: PropTypes.string,
    slidesLink: PropTypes.string,
	text: PropTypes.string.isRequired,
};

export default ActivityItem;