import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from '../../../assets/img/logo.png';
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
        scrollTop >= 600 ? header.classList.add('navbar--is-sticky') : header.classList.remove('navbar--is-sticky');
    };

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

	return (
		<div className={toggle ? "navbar navbar--is-open": "navbar"}>
            <div className={toggle ? "navbar__hamburguer navbar__hamburguer--is-open": "navbar__hamburguer"} onClick={handleClick}>
                <span className={toggle ? "navbar__hamburguer-icon navbar__hamburguer-icon--is-open": "navbar__hamburguer-icon"}></span>
                <span className={toggle ? "navbar__hamburguer-icon navbar__hamburguer-icon--is-open": "navbar__hamburguer-icon"}></span>
                <span className={toggle ? "navbar__hamburguer-icon navbar__hamburguer-icon--is-open": "navbar__hamburguer-icon"}></span>
            </div>
            <div className="navbar__container-name">
                <div className="navbar__img-container">
                    <img className="navbar__img" src={logo} />
                </div>
                <p className="navbar__title">Mia Salazar</p>
            </div>

            <div className={toggle ? "navbar__container navbar__container--is-open": "navbar__container"}>
                <div className="navbar__list">
                    <NavLink className={({ isActive }) => isActive  ? "navbar__link navbar__link--is-active" : "navbar__link" } to="/home">{t('nav.home')}</NavLink>
                    <NavLink className={({ isActive }) => isActive  ? "navbar__link navbar__link--is-active" : "navbar__link" }  to="/articles">{t('nav.articles')}</NavLink>
                    <NavLink className={({ isActive }) => isActive  ? "navbar__link navbar__link--is-active" : "navbar__link" }  to="/activities">{t('nav.activities')}</NavLink>
                    <NavLink className={({ isActive }) => isActive  ? "navbar__link navbar__link--is-active" : "navbar__link" }  to="/projects">{t('nav.portfolio')}</NavLink>
                    <NavLink className={({ isActive }) => isActive  ? "navbar__link navbar__link--is-active" : "navbar__link" }  to="/contact">{t('nav.contact')}</NavLink>
                </div>
                <LanguageButton />
            </div>

        </div>
	);
};

export default Navbar;