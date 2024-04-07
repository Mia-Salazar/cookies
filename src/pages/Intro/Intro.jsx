import React from "react";

import "./Intro.scss";

import { ButtonLink, Cookie, Layout } from "../../components";

export const Intro = () => {
	return (
		<Layout isIntro>
            <Cookie />
            <p className="intro__title">Mia Salazar</p>
            <p className="intro__subtitle">Front-end developer & cookie monster</p>
            <ButtonLink href="/home" text="Continuar" />
        </Layout>
	);
};

export default Intro;