import React from "react";

import logo from '../../assets/img/logo-no-eyes.png';
import "./Intro.scss";

import { ButtonLink } from "../../components";

export const Intro = () => {
	return (
		<div className="intro">
            <div className="intro__img-container">
                <img className="intro__img" src={logo} alt="logo" />
            </div>
            <p className="intro__title">Mia Salazar</p>
            <ButtonLink href="/intro" text="Continuar" />
        </div>
	);
};

export default Intro;