import React from "react";

import "./Intro.scss";

import { ButtonLink, Cookie } from "../../components";

export const Intro = () => {
	return (
		<div className="intro">
            <Cookie />
            <p className="intro__title">Mia Salazar</p>
            <p className="intro__subtitle">Front-end developer & cookie monster</p>
            <ButtonLink href="/home" text="Continuar" />
        </div>
	);
};

export default Intro;