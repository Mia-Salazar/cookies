import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import me from '../../../assets/img/madvueme.png';
import "./Header.scss";

export const Header = ({ isIntro = false }) => {
	const { t } = useTranslation();
	const TitleTag = isIntro ? "h1" : "p";

	return (
        <header className="header">
            <img
				alt={t("alt.profilePhoto")}
				src={me}
				className="header__image"
				width="200"
				height="200"
			/>
            <TitleTag className="header__title">Mia Salazar</TitleTag>
            <p className="header__subtitle">{t("home.headerSubtitle")}</p>
        </header>
	);
};

Header.propTypes = {
	isIntro: PropTypes.bool,
};

export default Header;
