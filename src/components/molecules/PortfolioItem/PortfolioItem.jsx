import React, { useState } from "react";
import PropTypes from "prop-types";

import "./PortfolioItem.scss";
import Button from "../../atoms/Button/Button";
import ButtonLink from "../../atoms/ButtonLink/ButtonLink";

export const PortfolioItem = ({href, image, text}) => {
	const [moreInfoOpen, setMoreInfoOpen] = useState(false);

	const getMoreInfo = () => {
		setMoreInfoOpen(!moreInfoOpen);
	};

	return (
		<div className={moreInfoOpen ? "portfolio-item portfolio-item--active": "portfolio-item" } data-testid="portfolio-item">
			<div className="portfolio-item__img-container">
				<img className="portfolio-item__img" alt="" src={image}/> 
				<p className="portfolio-item__img-text">{text} </p>
			</div>
			<div className="portfolio-item__button-container">
				<ButtonLink styles="ghost" text="Visitar" href={href} target="_blank" />
				<Button text="Más info" functionality={getMoreInfo}/>
			</div>
		</div>
	);
};

PortfolioItem.propTypes = {
    href: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default PortfolioItem;