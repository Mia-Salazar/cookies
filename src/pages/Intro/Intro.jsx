import React from "react";
import { useTranslation } from "react-i18next";

import { LinkButton, Header, Frame } from "../../components";
import usePageTitle from "../../utils/usePageTitle";

export const Intro = () => {
	const { t } = useTranslation();
	usePageTitle("intro");

	return (
		<Frame isIntro>
			<a className="skip" href="#main">{t("alt.skip")}</a>
            <Header isIntro />
			<main id="main">
            	<LinkButton href="/home" text="home.continue" />
			</main>
        </Frame>
	);
};

export default Intro;
