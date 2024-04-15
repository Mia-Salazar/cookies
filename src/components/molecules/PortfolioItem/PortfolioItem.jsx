import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "../../atoms/Button/Button";
import ButtonLink from "../../atoms/ButtonLink/ButtonLink";
import "./PortfolioItem.scss";

export const PortfolioItem = ({href, image, text}) => {
	const [moreInfoOpen, setMoreInfoOpen] = useState(false);

	const getMoreInfo = () => {
		setMoreInfoOpen(!moreInfoOpen);
	};

	return (
		<div className={moreInfoOpen ? "portfolio-item portfolio-item--active": "portfolio-item" } data-testid="portfolio-item">
			<div className="portfolio-item__img-container">
				<img className="portfolio-item__img" src={image}/> 
				<p className="portfolio-item__img-text">{text} </p>
			</div>
			<div className="portfolio-item__button-container">
				<Button styles="secondary" text="portfolio.info" functionality={getMoreInfo}/>
				<ButtonLink styles="ghost" text="portfolio.visit" href={href} target="_blank" />
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