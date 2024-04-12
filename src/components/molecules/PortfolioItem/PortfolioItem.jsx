import React, { useState } from "react";
import PropTypes from "prop-types";

import "./PortfolioItem.scss";
import Button from "../../atoms/Button/Button";
import ButtonLink from "../../atoms/ButtonLink/ButtonLink";

export const PortfolioItem = ({item}) => {
	const [moreInfoOpen, setMoreInfoOpen] = useState(false);
	const getMoreInfo = () => {
		setMoreInfoOpen(!moreInfoOpen);
	};
	return (
		<article className={moreInfoOpen ? "portfolio-item portfolio-item--active": "portfolio-item" } data-testid="portfolio-item">
			<figure className="portfolio-item__img-container">
				<img className="portfolio-item__img" alt="" src={item.src}/> 
				<figcaption className="portfolio-item__img-text">{item.text} </figcaption>
			</figure>
			<div className="portfolio-item__button-container">
				<Button text="Más info" functionality={getMoreInfo}/>
				<ButtonLink text="Vistar" href={item.href} target="_blank" />
			</div>
		</article>
	);
};

PortfolioItem.propTypes = {
	item: PropTypes.shape({
        href: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired
};

export default PortfolioItem;