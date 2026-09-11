import React, { useState, useId } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import Button from "../../atoms/Button/Button";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import "./ProjectItem.scss";

export const ProjectItem = ({ href, image, text, title }) => {
  const { t } = useTranslation();
  const [moreInfoOpen, setMoreInfoOpen] = useState(false);
  const infoId = useId();

  const toggleMoreInfo = () => {
    setMoreInfoOpen((prev) => !prev);
  };

  const projectTitle = title ? t(title) : text;

  return (
    <li
      className={`portfolio-item ${moreInfoOpen ? "portfolio-item--active" : ""}`}
      data-testid="portfolio-item"
    >
      <div className="portfolio-item__img-container">
        <img
          alt={t("alt.projectImage", { title: projectTitle })}
          className="portfolio-item__img"
          src={image}
        />
        <p
          id={infoId}
          className="portfolio-item__img-text"
          hidden={!moreInfoOpen}
        >
          <span>{projectTitle}</span> {text}
        </p>
      </div>
      <div className="portfolio-item__button-container">
        <Button
          styles="secondary"
          text="portfolio.info"
          functionality={toggleMoreInfo}
          aria-expanded={moreInfoOpen}
          aria-controls={infoId}
          aria-label={t("portfolio.infoLabel", { title: projectTitle })}
        />
        <LinkButton
          isExternal
          styles="ghost"
          text="portfolio.visit"
          href={href}
          aria-label={t("portfolio.visitLabel", { title: projectTitle })}
        />
      </div>
    </li>
  );
};

ProjectItem.propTypes = {
  href: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
  title: PropTypes.string,
};

export default ProjectItem;
