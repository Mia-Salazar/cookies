import React from "react";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

import "./Heading.scss";

const Types = {
	'big': 'h1',
	'medium': 'h2'
}

export const Heading = ({ text, size }) => {
	const { t } = useTranslation();
	const HeadingType = Types[size]

	return (
		<HeadingType className={"heading " + (size > 'big' ? `heading--${size}` : '')}>{t(text)}</HeadingType>
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