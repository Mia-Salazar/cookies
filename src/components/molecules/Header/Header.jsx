import React from "react";

import Cookie from "../../atoms/Cookie/Cookie";
import "./Header.scss";

export const Header = () => {
	return (
        <header className="header">
            <Cookie />
            <p className="header__title">Mia Salazar</p>
            <p className="header__subtitle">Front-end developer & cookie monster</p>
        </header>
	);
};

export default Header;