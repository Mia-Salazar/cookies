import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

export const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle)
    }

    const isSticky = (e) => {
        const header = document.querySelector('.navbar');
        const scrollTop = window.scrollY;
        scrollTop >= 650 ? header.classList.add('navbar--is-sticky') : header.classList.remove('navbar--is-sticky');
    };

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

	return (
		<div className={toggle ? "navbar navbar--is-open": "navbar"}>
            <div className={toggle ? "navbar__hamburguer--is-open": "navbar__hamburguer"} onClick={handleClick}>
                <span className={toggle ? "navbar__hamburguer-icon navbar__hamburguer-icon--is-open": "navbar__hamburguer-icon"}></span>
                <span className={toggle ? "navbar__hamburguer-icon navbar__hamburguer-icon--is-open": "navbar__hamburguer-icon"}></span>
                <span className={toggle ? "navbar__hamburguer-icon navbar__hamburguer-icon--is-open": "navbar__hamburguer-icon"}></span>
            </div>
            <ul className={toggle ? "navbar__container navbar__container--is-open": "navbar__container"}>
                <li>
                    <Link className={"navbar__link"} to="/home">Inicio</Link>
                </li>
                <li>
                    <Link className={"navbar__link"} to="/things">Fregaos</Link>
                </li>
                <li>
                    <Link className={"navbar__link"} to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link className={"navbar__link"} to="/contact">Contacto</Link>
                </li>
            </ul>
        </div>
	);
};

export default Navbar;