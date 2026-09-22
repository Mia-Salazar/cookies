import React, { useId, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import LinkButton from "../LinkButton/LinkButton";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import "./ActivityLinks.scss";

export const ActivityLinks = ({
    text,
    speechLink = "",
    slidesLink = "",
    hasVideo = true,
    imageSrc = "",
    imageAlt = "",
}) => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const imageButtonRef = useRef(null);
    const modalTitleId = useId();

    const renderTextWithBoldFirstSentence = () => {
        const translated = t(text);
        const firstDotIndex = translated.indexOf(".");

        if (firstDotIndex === -1) {
            return translated;
        }

        const firstSentence = translated.slice(0, firstDotIndex + 1);
        const rest = translated.slice(firstDotIndex + 1);

        return (
            <>
                <span className="activity-highlight">{firstSentence}</span>
                {rest}
            </>
        );
    };

    const handleOpenModal = () => setIsModalOpen(true);

    const handleCloseModal = () => {
        setIsModalOpen(false);
        // Devuelve el foco al elemento que abrió el diálogo (patrón WAI-ARIA dialog).
        imageButtonRef.current?.focus();
    };

    const linkHref = speechLink;
    const linkLabel = hasVideo ? "activities.speech" : "activities.event";
    const hasAnyLink = Boolean(slidesLink || speechLink || imageSrc);

    if (!hasAnyLink) {
        return (
            <p className="activity-link activity-link--no-link">
                {renderTextWithBoldFirstSentence()}
            </p>
        );
    }

    return (
        <div className="activity-wrapper">
            <p className="activity-wrapper__text">
                {renderTextWithBoldFirstSentence()}
            </p>
            <div className="activity-wrapper__container">
                {linkHref && (
                    <LinkButton
                        isExternal
                        styles="ghost small secondary"
                        text={linkLabel}
                        href={linkHref}
                        aria-label={`${t(linkLabel)} (${t("common.opensInNewTab", "se abre en una pestaña nueva")})`}
                    />
                )}

                {imageSrc && (
                    <>
                        <Button
                            ref={imageButtonRef}
                            styles="ghost small"
                            text="activities.image"
                            functionality={handleOpenModal}
                            aria-haspopup="dialog"
                            aria-expanded={isModalOpen}
                        />
                        <Modal
                            isOpen={isModalOpen}
                            onClose={handleCloseModal}
                            imageSrc={imageSrc}
                            imageAlt={imageAlt}
                            aria-labelledby={modalTitleId}
                            role="dialog"
                            aria-modal="true"
                        />
                    </>
                )}
            </div>
        </div>
    );
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