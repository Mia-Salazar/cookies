import React from "react";

import me from '../../../assets/img/madvueme.png';
import "./Header.scss";

export const Header = () => {
	return (
        <header className="header">
            <img alt="" src={me} className="header__image"></img>
            <p className="header__title">Mia Salazar</p>
            <p className="header__subtitle">Front-end developer, mentor & speaker</p>
        </header>
	);
};

export default Header;