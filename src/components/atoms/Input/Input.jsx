import React from "react";
import PropTypes from "prop-types";

import "./Input.scss";

export const Input = ({ checked, functionality, id, name, required, type, value }) => {
	return (
		<input className="input" type={type} id={id} name={name} value={value}
			required={required} onChange={functionality} checked={checked}
		/>
	);
};

Input.propTypes = {
	checked: PropTypes.bool,
	functionality: PropTypes.func,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	required: PropTypes.bool,
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
};;

export default Input;