import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LanguageButton from "../../molecules/LanguageButton/LanguageButton";
import "./Navbar.scss";

export const Navbar = () => {
    const { t } = useTranslation();
    const menuButtonRef = useRef(null);

    const [toggle, setToggle] = useState(false);

    const closeMenu = () => {
        setToggle(false);
    };

    const handleClick = () => {
        setToggle((prev) => !prev);
    };

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
    }, []);

    useEffect(() => {
        if (!toggle) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closeMenu();
                menuButtonRef.current?.focus();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [toggle]);

	return (
		<nav
            className={toggle ? "navbar navbar--is-open": "navbar"}
            aria-label={t("alt.navigation")}
        >
            <button
                ref={menuButtonRef}
                type="button"
                aria-label={t("alt.menuToggle")}
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
                        <NavLink onClick={closeMenu} className={({ isActive }) => isActive  ? "navbar__link navbar__link--is-active" : "navbar__link" } to="/home">{t("home.about")}</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeMenu} className={({ isActive }) => isActive  ? "navbar__link navbar__link--is-active" : "navbar__link" }  to="/articles">{t('nav.articles')}</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeMenu} className={({ isActive }) => isActive  ? "navbar__link navbar__link--is-active" : "navbar__link" }  to="/activities">{t('activities.speeches')}</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeMenu} className={({ isActive }) => isActive  ? "navbar__link navbar__link--is-active" : "navbar__link" }  to="/collaborations">{t('home.collaborations')}</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeMenu} className={({ isActive }) => isActive  ? "navbar__link navbar__link--is-active" : "navbar__link" }  to="/contact">{t('nav.contact')}</NavLink>
                    </li>
                </ul>
                <LanguageButton />
            </div>
        </nav>
	);
};

export default Navbar;
