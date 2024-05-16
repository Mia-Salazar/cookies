import React from "react";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

import "./Heading.scss";

// const TYPES = {
// 	'big': 'h1',
// 	'medium': 'h2'
// }

export const Heading = ({ text, type }) => {
	const { t } = useTranslation();

	return (
		<div className={"heading " + (type > 'big' ? `heading--${type}` : '')}>{t(text)}</div>
	);
};

Heading.defaultProps = {
	type: 'big'
};

Heading.propTypes = {
	text: PropTypes.string.isRequired,
    type: PropTypes.string
}

export default Heading;