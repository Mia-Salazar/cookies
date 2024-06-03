import React from "react";

import { LinkButton, Header, Frame } from "../../components";

export const Intro = () => {
	return (
		<Frame isIntro>
            <Header />
            <LinkButton href="/home" text="home.continue" />
        </Frame>
	);
};

export default Intro;