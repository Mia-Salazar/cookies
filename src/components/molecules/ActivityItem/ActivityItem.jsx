import React from "react";

import PropTypes from "prop-types";
import { ActivityLinks } from "../../atoms/ActivityLinks/ActivityLinks";

import "./ActivityItem.scss"

const LANGUAGE_LABELS = {
  es: "Español",
  en: "English"
};

export const ActivityItem = ({
  hasVideo,
  icon,
  slidesLink,
  speechLink,
  text,
  imageSrc,
  imageAlt,
  lang = "es"
}) => {
  const hasIcon = Boolean(icon);

  const languageCode = lang === "en" ? "en" : "es";
  const languageLabel = LANGUAGE_LABELS[languageCode];

  return (
    <li
      className={`list-item ${
        hasIcon ? "list-item--with-icon" : "list-item--full"
      }`}
    >
      {hasIcon && (
        <span
          className="list-item__icon-container"
          aria-hidden="true"
        >
          <i className={`fas fa-${icon}`} />
        </span>
      )}

      <ActivityLinks
        hasVideo={hasVideo}
        slidesLink={slidesLink}
        speechLink={speechLink}
        text={text}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        lang={languageCode}
        languageLabel={languageLabel}
      />
    </li>
  );
};

ActivityItem.propTypes = {
	hasVideo: PropTypes.bool,
	icon: PropTypes.string,
    speechLink: PropTypes.string,
    slidesLink: PropTypes.string,
	text: PropTypes.string.isRequired,
	imageSrc: PropTypes.string,
	imageAlt: PropTypes.string,
};

export default ActivityItem;
