import React from "react";
import PropTypes from "prop-types";

import "./SocialNetwork.scss";

export const SocialNetwork = ({ icon, link }) => {
    const handleClick = () => {
        window.open(link, "_blank")
    }

	return (
		<li className="social-network">
            <div onClick={handleClick}>
                <i className={`fab social-network__icon ${icon}`}></i>
            </div>
        </li>
	);
};

SocialNetwork.propTypes = {
	icon: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
}

export default SocialNetwork;