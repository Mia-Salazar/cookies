import React from "react";

import Cookie from "../Cookie/Cookie";
import "./Header.scss";

export const Header = () => {
	return (
        <>
            <Cookie />
            <p className="header__title">Mia Salazar</p>
            <p className="header__subtitle">Front-end developer & cookie monster</p>
        </>
	);
};

export default Header;