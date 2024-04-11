import React from "react";
import PropTypes from "prop-types";

import "./Button.scss";

export const Button = ({ text, type = "button", functionality, disabled = false, ...rest}) => {
	return (
		<button {...rest} className="button" onClick={functionality} type={type} disabled={disabled}>{text}</button>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string,
	functionality: PropTypes.func,
	disabled: PropTypes.bool
};

export default Button;