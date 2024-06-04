import React from "react";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

import "./Heading.scss";

export const Heading = ({ text, size }) => {
	const { t } = useTranslation();

	return (
		<div className={"heading " + (size > 'big' ? `heading--${size}` : '')}>{t(text)}</div>
	);
};

Heading.defaultProps = {
	size: 'big'
};

Heading.propTypes = {
	text: PropTypes.string.isRequired,
    size: PropTypes.string
}

export default Heading;