import React, { useState } from "react";

import i18n from "../../../i18n";
import "./LanguageButton.scss";

export const LanguageButton = () => {
	const [language, setLanguage] = useState("es");

	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
		setLanguage(language);
		//document.documentElement.lang = language;
	};
	
	return (
		<form className="language">
			<div className="language__container">
				<label htmlFor="en" className={language === "en" ? "language__label language__label--active" : "language__label" } >
					en
				</label>
				<input checked={language === "en"} className="language__input"
					id="en" type="radio" name="lang" onChange={() => changeLanguage("en")}/>
			</div>
			<div className="language__container">
				<label htmlFor="es" className={language === "es" ? "language__label language__label--active" : "language__label" } >
					es	
				</label>
				<input checked={language === "es"} className="language__input"
					id="es" type="radio" name="lang" onChange={() => changeLanguage("es")}/>
			</div>
		</form>
	);
};

export default LanguageButton;