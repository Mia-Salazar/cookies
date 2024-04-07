import React from "react";

import logo from '../../assets/img/logo-no-eyes.png';
import "./Cookie.scss";

export const Cookie = () => {
	return (
        <div className="cookie">
            <img className="cookie__img" src={logo} />
        </div>
	);
};

export default Cookie;