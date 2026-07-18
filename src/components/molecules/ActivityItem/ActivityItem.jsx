import React from "react";
import PropTypes from "prop-types";

import ActivityLinks from "../../atoms/ActivityLinks/ActivityLinks";
import "./ActivityItem.scss";

export const ActivityItem = ({ hasVideo, icon, slidesLink, speechLink, text, imageSrc, imageAlt }) => {
	const hasIcon = Boolean(icon);

	return (
		<li
			className={`list-item ${hasIcon ? "list-item--with-icon" : "list-item--full"}`}
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
				imageAlt={imageAlt}
			/>
		</li>
	);
};

ActivityItem.propTypes = {
	hasVideo: PropTypes.bool,
	icon: PropTypes.string,
    speechLink: PropTypes.string,
    slidesLink: PropTypes.string,
	text: PropTypes.string.isRequired,
	imageSrc: PropTypes.string,
	imageAlt: PropTypes.string,
};

export default ActivityItem;
