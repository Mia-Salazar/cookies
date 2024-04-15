import React from "react";
import PropTypes from 'prop-types';

import "./Heading.scss";
import { useTranslation } from "react-i18next";

export const Heading = ({text, type}) => {
	const { t } = useTranslation();

	return (
		<div className={"heading " + (type > 1 ? `heading--h${type}` : '')}>{t(text)}</div>
	);
};

Heading.defaultProps = {
	type: 1
};

Heading.propTypes = {
	text: PropTypes.string.isRequired,
    type: PropTypes.number
}

export default Heading;