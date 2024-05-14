import React from "react";

import "./SocialNetwork.scss";

export const SocialNetwork = ({ icon, link }) => {

    const handleClick = () => {
        window.open(link, "_blank")
    }

	return (
		<div className="social-network">
            <div onClick={handleClick}>
                <i className={`fab social-network__icon ${icon}`}></i>
            </div>
        </div>
	);
};

export default SocialNetwork;