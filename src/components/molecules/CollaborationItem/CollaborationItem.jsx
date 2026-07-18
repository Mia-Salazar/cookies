import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import "./CollaborationItem.scss";

export const CollaborationItem = ({ hasBackground, imageSrc, imageHref, alt, title, year, description }) => {
    const { t } = useTranslation();

    return (
        <article className="collaboration-item">
            <a
				href={imageHref}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={t("alt.openCollaboration", { name: alt || t(title) })}
			>
              <img
				alt={alt || t(title)}
				src={imageSrc}
                className={`collaboration-item__image ${hasBackground ? 'collaboration-item__image--bg' : ''}`}
               />
            </a>
            <div className="collaboration-item__text-wrapper">
                <div className="collaboration-item__wrapper">
                    <h3 className="collaboration-item__title">{t(title)}</h3>
                    <p className="collaboration-item__year">{t(year)}</p>
                </div>
                <p className="collaboration-item__description">{t(description)}</p>
            </div>
        </article>
    );
};

CollaborationItem.propTypes = {
    hasBackground: PropTypes.bool,
    imageSrc: PropTypes.string.isRequired,
    imageHref: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default CollaborationItem;
