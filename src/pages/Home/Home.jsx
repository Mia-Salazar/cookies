import React from "react";

import logo from '../../assets/img/logo-no-eyes.png';
import "./Home.scss";

export const Home = () => {
	return (
		<div className="Intro">
            <div className="Intro__img-container">
                <img className="Intro__img" src={logo} alt="logo" />
            </div>
            <p className="Intro__title">Mia Salazar</p>
        </div>
	);
};

export default Home;