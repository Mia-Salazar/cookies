import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import "./ActivityLinks.scss";
import ButtonLink from "../ButtonLink/ButtonLink";

export const ActivityLinks = ({text, speechLink, slidesLink}) => {

    const { t } = useTranslation();

    if (slidesLink) {
        return <div className="activity-wrapper">
            <p className="activity-wrapper__text">{t(text)}</p>
            <div className="activity-wrapper__container">
                <ButtonLink isExternal styles="ghost small secondary" text="activities.speech" href={speechLink}/>
                <ButtonLink isExternal styles="ghost small" text="activities.slide" href={slidesLink}/>
            </div>
        </div>
    }

    return <a className="activity-link" href={speechLink} target="__blank" rel="noreferrer">{t(text)}</a>

}

ActivityLinks.propTypes = {
    text: PropTypes.string.isRequired,
    speechLink: PropTypes.string.isRequired,
    slidesLink: PropTypes.string
};

export default ActivityLinks;