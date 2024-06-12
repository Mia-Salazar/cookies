import React from "react";

import logo from '../../../assets/img/logo-no-eyes.png';
import "./Cookie.scss";

export const Cookie = () => {
	return (
        <figure className="cookie">
            <img alt="Galleta de chocolate con chips y los ojos bizcos" className="cookie__img" src={logo} />
        </figure>
	);
};

export default Cookie;