import React from "react";
import PropTypes from "prop-types";

import { Textarea } from "../../atoms/Textarea/Textarea";
import { Input } from "../../atoms/Input/Input";

import "./FormElement.scss";

export const FormElement = ({text, type, id, value, required, functionality}) => {
	return (
		<div className="form-element">
			<p className="form-element__text">
				{text}
				{required ? <span className="form-element__asterisk">*</span> : ""}
			</p>
			{type 
				? <Input type={type} id={id} required={required} functionality={functionality} value={value} />
				: <Textarea id={id} text={text} required={required} functionality={functionality} value={value} />
			}			
		</div>
	);
};

FormElement.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string,
	value: PropTypes.string,
	id: PropTypes.string.isRequired,
	required: PropTypes.bool,
	functionality: PropTypes.func,
};

export default FormElement;