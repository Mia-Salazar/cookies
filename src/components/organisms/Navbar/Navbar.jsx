import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LanguageButton from "../../molecules/LanguageButton/LanguageButton";
import "./Navbar.scss";

export const Navbar = () => {
    const { t } = useTranslation();

    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle)
    }

    const isSticky = (e) => {
        const header = document.querySelector('.navbar');
        const scrollTop = window.scrollY;
        scrollTop >= 600 && document.body.scrollHeight > 1500 ? header.classList.add('navbar--is-sticky') : header.classList.remove('navbar--is-sticky');
    };

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

	return (
		<nav
            className={toggle ? "navbar navbar--is-open": "navbar"}
            aria-label={t("alt.navigation")}
        >
            <button
                type="button"
                aria-label="Abrir y cerrar menú"
                aria-expanded={toggle}
                aria-controls="navbar-menu"
                className={toggle ? "navbar__hamburguer navbar__hamburguer--is-open": "navbar__hamburguer"}
                onClick={handleClick}
            >
                <span aria-hidden="true" className={toggle ? "navbar__hamburguer-icon navbar__hamburguer-icon--is-open": "navbar__hamburguer-icon"}></span>
                <span aria-hidden="true" className={toggle ? "navbar__hamburguer-icon navbar__hamburguer-icon--is-open": "navbar__hamburguer-icon"}></span>
                <span aria-hidden="true" className={toggle ? "navbar__hamburguer-icon navbar__hamburguer-icon--is-open": "navbar__hamburguer-icon"}></span>
            </button>
            <div
                className={toggle ? "navbar__container navbar__container--is-open": "navbar__container"}
                id="navbar-menu"
            >
                <div className="navbar__border navbar__border--top" aria-hidden="true" />
                <div className="navbar__border navbar__border--bottom" aria-hidden="true" />
                <ul className="navbar__list">
                    <li>
                        <NavLink className={({ isActive }) => isActive  ? "navbar__link navbar__link--is-active" : "navbar__link" } to="/home">{t("home.about")}</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive  ? "navbar__link navbar__link--is-active" : "navbar__link" }  to="/articles">{t('nav.articles')}</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive  ? "navbar__link navbar__link--is-active" : "navbar__link" }  to="/activities">{t('activities.speeches')}</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive  ? "navbar__link navbar__link--is-active" : "navbar__link" }  to="/collaborations">{t('home.collaborations')}</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive  ? "navbar__link navbar__link--is-active" : "navbar__link" }  to="/contact">{t('nav.contact')}</NavLink>
                    </li>
                </ul>
                <LanguageButton />
            </div>
        </nav>
	);
};

export default Navbar;