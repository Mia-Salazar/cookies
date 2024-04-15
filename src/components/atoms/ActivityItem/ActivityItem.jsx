import React from "react";
import PropTypes from "prop-types";

import { ButtonLink } from "../../atoms/ButtonLink/ButtonLink";
import "./ActivityItem.scss";

export const ActivityItem = ({item}) => {
	return (
		<div className="list-item">
			<div className="list-item__icon-container">
				<span className={`fas fa-${item.icon}`} aria-label={item.aria} title={item.aria}></span>
				<span className="list-item__lang">{item.lang}</span>
			</div>
			<ButtonLink text={item.text} href={item.href} target={item.target} modificator="simple"/>
		</div>
	);
};

ActivityItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default ActivityItem;