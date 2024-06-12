import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import LinkButton from "../LinkButton/LinkButton";
import "./ActivityLinks.scss";

export const ActivityLinks = ({ text, speechLink, slidesLink, hasVideo }) => {
    const { t } = useTranslation();

    if (slidesLink) {
        return <div className="activity-wrapper">
            <p className="activity-wrapper__text">{t(text)}</p>
            <div className="activity-wrapper__container">
                <LinkButton isExternal styles="ghost small secondary" text={hasVideo ? 'activities.speech' : 'activities.event'} href={speechLink}/>
                <LinkButton isExternal styles="ghost small" text="activities.slide" href={slidesLink}/>
            </div>
        </div>
    }

    return <a className="activity-link" href={speechLink} target="__blank" rel="noreferrer">{t(text)}</a>

}

ActivityLinks.defaultProps = {
	hasVideo: true
};

ActivityLinks.propTypes = {
    hasVideo: PropTypes.bool,
    text: PropTypes.string.isRequired,
    speechLink: PropTypes.string.isRequired,
    slidesLink: PropTypes.string
};

export default ActivityLinks;