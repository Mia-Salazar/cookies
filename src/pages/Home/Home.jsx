import React from "react";

import logo from '../../assets/img/logo.png';
import "./Home.scss";

import { ButtonLink } from "../../components";

export const Home = () => {
	return (
		<div className="home">
            <div className="home__img-container">
                <img className="home__img" src={logo} alt="logo" />
            </div>
            <p className="home__title">Mia Salazar</p>
            <ButtonLink href="/home" text="Continuar" />
        </div>
	);
};

export default Home;