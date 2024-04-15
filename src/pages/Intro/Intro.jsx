import React from "react";

import { ButtonLink, Header, Layout } from "../../components";


export const Intro = () => {
	return (
		<Layout isIntro>
            <Header />
            <ButtonLink href="/home" text="home.continue" />
        </Layout>
	);
};

export default Intro;