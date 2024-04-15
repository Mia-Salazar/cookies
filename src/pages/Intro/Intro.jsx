import React from "react";

import { ButtonLink, Header, Frame } from "../../components";


export const Intro = () => {
	return (
		<Frame isIntro>
            <Header />
            <ButtonLink href="/home" text="home.continue" />
        </Frame>
	);
};

export default Intro;