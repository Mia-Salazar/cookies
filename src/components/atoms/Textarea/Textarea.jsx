import React from "react";
import PropTypes from "prop-types";

import "./Textarea.scss";

export const Textarea = ({ functionality, id, name, required, value }) => {
	return (
		<textarea className="textarea" id={id} name={name} value={value}
			required={required} onChange={functionality}
		></textarea>
	);
};

Textarea.propTypes = {
	functionality: PropTypes.func,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	required: PropTypes.bool,
	value: PropTypes.string,
};;

export default Textarea;