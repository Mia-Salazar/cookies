import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import "./Button.scss";

export const Button = ({ disabled = false, functionality, styles,  text, type = "button", ...rest}) => {
	const { t } = useTranslation();

	return (
		<button {...rest} className={`button ${styles ? `button--${styles}` : ''}`} onClick={functionality} type={type} disabled={disabled}>{t(text)}</button>
	);
};

Button.propTypes = {
	disabled: PropTypes.bool,
	functionality: PropTypes.func,
	styles:  PropTypes.string,
	text: PropTypes.string.isRequired,
	type: PropTypes.string,
};

export default Button;