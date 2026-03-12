import React from "react";
import PropTypes from "prop-types";

import "./Textarea.scss";
import { useTranslation } from "react-i18next";

export const Textarea = ({ functionality, id, name, placeholder, required, value, "aria-describedby": ariaDescribedBy, "aria-invalid": ariaInvalid }) => {
	const { t } = useTranslation();
	return (
		<textarea
			className="textarea"
			id={id}
			name={name}
			value={value}
			required={required}
			onChange={functionality}
			placeholder={t(placeholder)}
			aria-describedby={ariaDescribedBy}
			aria-invalid={ariaInvalid}
		></textarea>
	);
};

Textarea.propTypes = {
	functionality: PropTypes.func,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	required: PropTypes.bool,
	value: PropTypes.string,
	"aria-describedby": PropTypes.string,
	"aria-invalid": PropTypes.bool,
};

export default Textarea;