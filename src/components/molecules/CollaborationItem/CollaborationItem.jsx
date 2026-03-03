import React from "react";
import PropTypes from "prop-types";

import "./CollaborationItem.scss";
import { useTranslation } from "react-i18next";

export const CollaborationItem = ({ imageSrc, imageHref, alt, title, year, description }) => {
    const { t } = useTranslation();
    return (
        <article className="collaboration-item">
            <a href={imageHref}>
              <img alt={alt} src={imageSrc} className="collaboration-item__image" />
            </a>
            <div className="collaboration-item__text-wrapper">
                <div className="collaboration-item__wrapper">
                    <p className="collaboration-item__title">{t(title)}</p>
                    <p className="collaboration-item__year">{t(year)}</p>
                </div>
                <p className="collaboration-item__description">{t(description)}</p>
            </div>
        </article>
    );
};