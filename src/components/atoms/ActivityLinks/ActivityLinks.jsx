import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import LinkButton from "../LinkButton/LinkButton";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import "./ActivityLinks.scss";

export const ActivityLinks = ({ text, speechLink, slidesLink, hasVideo, imageSrc, imageAlt }) => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (slidesLink) {
        return <div className="activity-wrapper">
            <p className="activity-wrapper__text">{t(text)}</p>
            <div className="activity-wrapper__container">
                <LinkButton
                    isExternal
                    styles="ghost small secondary"
                    text={hasVideo ? 'activities.speech' : 'activities.event'}
                    href={speechLink}
                />
                <LinkButton
                    isExternal
                    styles="ghost small"
                    text="activities.slide"
                    href={slidesLink}
                />
                {imageSrc && (
                    <>
                        <Button
                            styles="ghost small"
                            text="activities.image"
                            functionality={() => setIsModalOpen(true)}
                        />
                        <Modal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            imageSrc={imageSrc}
                            imageAlt={imageAlt ?? ""}
                        />
                    </>
                )}
            </div>
        </div>
    }

    if (speechLink) {
        return <a className="activity-link" href={speechLink} target="__blank" rel="noreferrer">{t(text)}</a>
    }

    if (imageSrc) {
        return <div className="activity-wrapper">
            <p className="activity-wrapper__text">{t(text)}</p>
            <div className="activity-wrapper__container">
                {imageSrc && (
                    <>
                        <Button
                            styles="ghost small"
                            text="activities.image"
                            functionality={() => setIsModalOpen(true)}
                        />
                        <Modal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            imageSrc={imageSrc}
                            imageAlt={imageAlt ?? ""}
                        />
                    </>
                )}
            </div>
        </div>
    }

    return <p className="activity-link activity-link--no-link">{t(text)}</p>

}

ActivityLinks.defaultProps = {
	hasVideo: true,
    speechLink: "",
    imageSrc: "",
    imageAlt: "",
};

ActivityLinks.propTypes = {
    hasVideo: PropTypes.bool,
    text: PropTypes.string.isRequired,
    speechLink: PropTypes.string,
    slidesLink: PropTypes.string,
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
};

export default ActivityLinks;