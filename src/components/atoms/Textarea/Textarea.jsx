import React from "react";
import PropTypes from "prop-types";

import "./Textarea.scss";

export const Textarea = ({type, id, value, required, functionality}) => {
	return (
		<textarea className="textarea" type={type} id={id} name={id} value={value}
			required={required} onChange={functionality}
		></textarea>
	);
};

Textarea.propTypes = {
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
	id: PropTypes.string.isRequired,
	required: PropTypes.bool,
	functionality: PropTypes.func
};;

export default Textarea;