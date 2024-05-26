import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import i18n from "../../../i18n";
import "./LanguageButton.scss";

export const LanguageButton = () => {
	const { t } = useTranslation();
	const [language, setLanguage] = useState("es");

	const changeLanguage = (lang) => {
		i18n.changeLanguage(lang);
		setLanguage(lang);
		localStorage.setItem("i18nextLng", lang);
		document.documentElement.lang = lang;
	};

	useEffect(() => {
		const langStorage = localStorage.getItem("i18nextLng");
		if (langStorage === "en" || langStorage === "es") {
			i18n.changeLanguage(langStorage);
			setLanguage(langStorage);
			document.documentElement.lang = langStorage;
			localStorage.setItem("i18nextLng", langStorage);

		} else {
			i18n.changeLanguage("es");
			setLanguage("es");
			document.documentElement.lang = "es";
			localStorage.setItem("i18nextLng", "es");
		}
	}, [language]);
	
	return (
		<form className="language">
			<fieldset className="language__fieldset">
				<legend className="language__title" aria-hidden="false">{t('nav.lang')}</legend>
				<div className="language__container">
					<input checked={language === "en"} className="language__input"
						id="en" type="radio" name="lang" onChange={() => changeLanguage("en")}/>
					<label htmlFor="en" className={language === "en" ? "language__label language__label--active" : "language__label" } >
						en
					</label>

					<input checked={language === "es"} className="language__input"
						id="es" type="radio" name="lang" onChange={() => changeLanguage("es")}/>
					<label htmlFor="es" className={language === "es" ? "language__label language__label--active" : "language__label" } >
						es	
					</label>
				</div>
			</fieldset>
		</form>
	);
};

export default LanguageButton;