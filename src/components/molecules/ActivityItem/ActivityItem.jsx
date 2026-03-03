import React from "react";
import PropTypes from "prop-types";

import ActivityLinks from "../../atoms/ActivityLinks/ActivityLinks";
import "./ActivityItem.scss";

export const ActivityItem = ({ aria, hasVideo, icon, slidesLink, speechLink, text, imageSrc }) => {
	const hasIcon = Boolean(icon);

	return (
		<li
			className={`list-item ${hasIcon ? "list-item--with-icon" : "list-item--full"}`}
			aria-label={aria}
		>
			{hasIcon && (
				<span className="list-item__icon-container" aria-hidden="true">
					<i className={`fas fa-${icon}`} />
				</span>
			)}
			<ActivityLinks
				hasVideo={hasVideo}
				slidesLink={slidesLink}
				speechLink={speechLink}
				text={text}
				imageSrc={imageSrc}
			/>
		</li>
	);
};

ActivityItem.propTypes = {
	aria: PropTypes.string.isRequired,
	hasVideo: PropTypes.bool,
	icon: PropTypes.string,
    speechLink: PropTypes.string,
    slidesLink: PropTypes.string,
	text: PropTypes.string.isRequired,
};

export default ActivityItem;