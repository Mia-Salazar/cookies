import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { Textarea } from "../../atoms/Textarea/Textarea";
import { Input } from "../../atoms/Input/Input";

import "./FormElement.scss";

export const FormElement = ({ checked, functionality, id, name, placeholder, required, text, type, value, errorMessage }) => {
	const { t } = useTranslation();
	const errorId = errorMessage ? `${id}-error` : undefined;

	return (
		<div className="form-element">
			{type
				? (
					<Input
						placeholder={placeholder}
						type={type}
						id={id}
						name={name}
						required={required}
						functionality={functionality}
						value={value}
						checked={checked}
						aria-describedby={errorId}
						aria-invalid={!!errorMessage}
					/>
				)
				: (
					<Textarea
						placeholder={placeholder}
						id={id}
						name={name}
						required={required}
						functionality={functionality}
						value={value}
						aria-describedby={errorId}
						aria-invalid={!!errorMessage}
					/>
				)}
			<label htmlFor={id} className="form-element__text">
				{t(text)}
				{required ? <span className="form-element__asterisk" aria-hidden="true">*</span> : ""}
			</label>
			{errorMessage && (
				<span id={errorId} className="form-element__error" role="alert">
					{errorMessage}
				</span>
			)}
		</div>
	);
};

FormElement.propTypes = {
	checked: PropTypes.bool,
	functionality: PropTypes.func,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	required: PropTypes.bool,
	text: PropTypes.string.isRequired,
	type: PropTypes.string,
	value: PropTypes.string,
	errorMessage: PropTypes.string,
};

export default FormElement;